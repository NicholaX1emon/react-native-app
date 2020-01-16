import React from 'react'
import {
  View,
  Text,
  Button,
  StyleSheet,
} from 'react-native'

export default Page2 = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to Page2</Text>
      <Button 
        title={'->跳转到Page3'}
        onPress={() => {
          navigation.navigate('Page3')
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