/**
 * @format
 */

import FastList from './js/pages/FastList'
import { createAppContainer, createSwitchNavigator } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'

const MainNavigator = createStackNavigator({
  FastList: {
    screen: FastList,
    navigationOptions: {}
  },
})

export default AppNavigator = createAppContainer(MainNavigator)

