import React from 'react'
import {
  View,
  Text,
  Button,
  StyleSheet,
} from 'react-native'

export default Page3 = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to Page3</Text>
      <Button 
        title={'->跳转到Home'}
        onPress={() => {
          navigation.navigate('Page1')
        }}
      />
      <Button 
          title={'改变颜色-蓝'}
          onPress={() => {
            navigation.setParams({
              theme: {
                activeTintColor: 'blue',
                updateTime: new Date().getTime()
              }
            })
          }}
        />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#896',
    flex: 1,
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#ffffff',
    textAlign: 'center',
  }
})