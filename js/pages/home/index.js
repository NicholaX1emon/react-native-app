import React from 'react'
import {
  View,
  Text,
  Button,
  StyleSheet,
} from 'react-native'
import { createAppContainer } from 'react-navigation'
import { createBottomTabNavigator } from 'react-navigation-tabs'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import Entypo from 'react-native-vector-icons/Entypo'
import { Page1, Page2, Page3 } from '../example'

export default Home = ({navigation}) => {
  const _tabNavigator = () => {
    return createAppContainer(createBottomTabNavigator({
      Page1: {
        screen: Page1,
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
        screen: Page2,
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
        screen: Page3,
        navigationOptions: {
          tabBarLabel: '我的',
          tabBarIcon: (({tintColor, focused}) => (
            <MaterialIcons 
              name={'whatshot'}
              size={24}
              style={{color: tintColor}}
            />
          )),
        }
      }
    }))
  }
  const BottomTabs = _tabNavigator()
  return (
    <View style={styles.container}>
      <BottomTabs />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#654',
    flex: 1,
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#ffffff',
    textAlign: 'center',
  }
})