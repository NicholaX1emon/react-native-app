/**
 * @format
 */

import { createAppContainer, createSwitchNavigator } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import FastList from '../pages/FastList'
import Welcome from '../pages/welcome'
import Home from '../pages/home'

const AppStack = createStackNavigator({
  Home: {
    screen: Home,
    navigationOptions: {}
  },
  FastList: {
    screen: FastList,
    navigationOptions: {}
  },
})

const SwitchNavigator = createSwitchNavigator({
  Welcome: {
    screen: Welcome,
    navigationOptions: {
      header: null,
    }
  },
  App: {
    screen: AppStack,
  }
})

export default AppNavigator = createAppContainer(SwitchNavigator)

