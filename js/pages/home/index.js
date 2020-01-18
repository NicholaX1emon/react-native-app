import React from 'react'
import {
  View,
  Text,
  Button,
  StyleSheet,
} from 'react-native'
import DynamicBottomNavigator from '../../navigator/DynamicBottomNavigator'
import NaviUtil from '../../util/NaviUtil'

export default Home = ({navigation}) => {
  // 通过将AppNavigator的navigation赋值到NaviUtil的方式 解决Home中DynamicBottomNavigator中组件跳转至外部的问题
  NaviUtil.navigation = navigation
  return (
    <View style={styles.container}>
      <DynamicBottomNavigator />
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