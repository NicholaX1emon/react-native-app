import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
} from 'react-native'

export default class Welcome extends Component {
  componentDidMount() {
    setTimeout(() => {
      this.props.navigation.navigate('App')
    }, 2000)
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>欢迎回来 🐉🔈</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#745',
    flex: 1,
  },
  welcome: {
    fontSize: 42,
    color: 'red',
    fontWeight: '600',
  }
})