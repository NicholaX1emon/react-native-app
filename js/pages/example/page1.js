import React from 'react'
import {
  View,
  Text,
  Button,
  StyleSheet,
} from 'react-native'

export default Page1 = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome Home</Text>
      <Button 
        title={'->跳转到Page2'}
        onPress={() => {
          navigation.navigate('Page2')
        }}
      />
      <Button 
        title={'->跳转到FastList'}
        onPress={() => {
          navigation.navigate('FastList')
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