import React, { Component } from 'react'
import {
  View,
  Text,
  Button,
  StyleSheet,
} from 'react-native'
import { createAppContainer } from 'react-navigation'
import { createMaterialTopTabNavigator } from 'react-navigation-tabs'
import axios from 'axios'
import qs from 'qs'
import Pingpp from 'pingpp-react-native'
import NaviUtil from '../../util/NaviUtil'

export default class Page1 extends Component {
  constructor(props) {
    super(props)

    const { navigation } = props

    this.initialTopTabs = [
      'React',
      'Vue',
      'Java',
    ]

    this.topTabNodes = [
      (<Button 
        title={'->跳转到Page2'}
        onPress={() => {
          navigation.navigate('Page2')
        }}
      />),
      (
        <Button 
          title={'->跳转到FastList'}
          onPress={() => {
            NaviUtil.navigateTo('FastList')
          }}
        />
      ),
      (
        <Button 
          title={'改变颜色-红'}
          onPress={() => {
            navigation.setParams({
              theme: {
                activeTintColor: 'red',
                updateTime: new Date().getTime()
              }
            })
          }}
        />
      ),
    ]
  }

// "proxy": {
//   "/*": {
//     "target": "http://app.eatgreat.net",
//     "changeOrigin": true,
//     "pathRewrite": {}
//   }
// },
  
  componentDidMount() {
    console.disableYellowBox = true
    // const url = `http://app.eatgreat.net/pay/booking/pay/charge/`
    // let charge = null
    // axios.post(url, qs.stringify({
    //   booking_id: '5e21290a8c33e46f00ea3971',
    //   language_code: 'zh-cn',
    //   access_token: 'eef4c7be-3902-11ea-9323-06c003b736e8',
    //   channel: 'wx',
    //   amount: 1,
    //   is_local_money: true, 
    //   total_price: 1,
    //   discount_price: 0,
    //   note: '测试获取charge',
    //   // open_id: 'oaPr05ajf09umqGzXeDjfQArIq_s',
    //   // pingpp_id: 'app_0W9SqHmXznjDSazX',
    // })).then(resp => {
    //   console.log('resp ---', resp)
    //   console.log('charge ---', resp.data.data.charge)
      
    //   // charge = JSON.stringify(resp.data.data.charge)
    //   charge = JSON.stringify(resp.data.data.charge)
    //   console.log('charge string--', charge)
    //   Pingpp.setDebug(true)
    //   Pingpp.createPayment(charge, (result, err) => {
    //     if (err) {
    //       console.log(JSON.parse(err))
    //       alert(2)
    //     } else {
    //       console.log('result ---', result)
    //       alert(1)
    //     }
    //   })
    // }).catch(err => {
    //   alert(JSON.stringify(error))
    //   console.error(err)
    // })
  }

  _topTabs = _ => {
    const tabs = {}
    this.initialTopTabs.forEach((tab, index) => {
      tabs[`tab${index}`] = {
        screen: props => <TopTabComponent {...props} label={tab} node={this.topTabNodes[index]}/>,
        navigationOptions: {
          title: tab,
        }
      }
    })

    return createAppContainer(createMaterialTopTabNavigator(tabs, {
      tabBarOptions: {
        scrollEnabled: true,
        upperCaseLabel: false,
        tabStyle: styles.tabStyle,
        indicatorStyle: styles.indicatorStyle,
        labelStyle: styles.labelStyle,
        style: {
          backgroundColor: 'red',
        },
      },
    }))  
  }
  
  render() {
    const TopTabsNavigator = this._topTabs()
    return (
      <View style={styles.container}>
        <TopTabsNavigator />
        <Text style={styles.title}>Welcome Home</Text>
      </View>
    )
  }
}

class TopTabComponent extends Component {
  render() {
    const { label = 'unknown', node = null } = this.props
    return (
      <View>
        <Text style={styles.label}>{label}</Text>
        {node}
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#896',
    flex: 1,
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'center',
  },
  tabStyle: {
    minWidth: 60,
  },
  indicatorStyle: {
    color: '#666'
  },
  labelStyle: {
    color: '#555'
  },
  label: {
    fontSize: 18,
    color: '#888'
  },
})