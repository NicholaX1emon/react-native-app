import React, { Component } from 'react'
import { Provider } from 'react-redux'
import AppNavigator from './navigator'
import store from './store'
import NaviUtil from './util/NaviUtil'

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <AppNavigator/>
      </Provider>
    )
  }
}