import React, { Component } from 'react'
import { createAppContainer } from 'react-navigation'
import { createBottomTabNavigator, BottomTabBar } from 'react-navigation-tabs'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import Entypo from 'react-native-vector-icons/Entypo'
import { Page1, Page2, Page3 } from '../pages/example'
import { connect } from 'react-redux'

const createTabs = props => {
  return {
    Page1: {
      screen: _ => <Page1 {...props} />,
      navigationOptions: {
        tabBarLabel: '主页',
        tabBarIcon: (({tintColor, focused}) => (
          <FontAwesome5 
            name={'fire'}
            size={24}
            style={{color: tintColor}}
          />
        )),
      }
    },
    Page2: {
      screen: _ => <Page2 {...props}/>,
      navigationOptions: {
        tabBarLabel: '最新',
        tabBarIcon: (({tintColor, focused}) => (
          <Entypo 
            name={'new'}
            size={24}
            style={{color: tintColor}}
          />
        )),
      }
    },
    Page3: {
      screen: _ => <Page3 {...props}/>,
      navigationOptions: {
        tabBarLabel: '我的',
        tabBarIcon: (({tintColor, focused}) => (
          <MaterialIcons 
            name={'home'}
            size={24}
            style={{color: tintColor}}
          />
        )),
      }
    }
  }
}

class DynamicBottomNavigator extends Component {
  _tabNavigator() {
    const tabs = createTabs(this.props)
    return createAppContainer(createBottomTabNavigator({
      ...tabs
    }, {
      tabBarComponent: TabBarComponent,
    }))
  }

  render() {
    const Tabs = this._tabNavigator()
    return <Tabs />
  }
}

const mapStateToProps = state => {
  return {
    dynamicBottomNavigator: state.dynamicBottomNavigator,
  }
}

export default connect(mapStateToProps)(DynamicBottomNavigator)

class TabBarComponent extends Component {
  constructor(props) {
    super(props)
    this.theme = {
      activeTintColor: props.activeTintColor,
      updateTime: new Date().getTime(), // 每次加载组件会重置该时间 使得自身更新时间大于外部navigation params updateTime
    }
  }

  render() {
    const { routes, index } = this.props.navigation.state
    const naviParams = routes[index].params
    if (naviParams) {
      const { theme } = naviParams
      if (theme && theme.updateTime > this.theme.updateTime) { // 外部navigation params更新时间大于自身更新时间时 才进行赋值更换主题
        this.theme = theme
      }
    }

    return (
      <BottomTabBar
        {...this.props}
        activeTintColor={this.theme.activeTintColor || this.props.activeTintColor}
      />
    )
  }
}