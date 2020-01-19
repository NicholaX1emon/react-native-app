import React, { Component } from 'react'
import {
  View,
  Text,
  Button,
  Image,
  StyleSheet,
  TextInput,
  TouchableHighlight,
} from 'react-native'
import { connect } from 'react-redux'
import axios from 'axios'
import qs from 'qs'
import NaviUtil from '../../util/NaviUtil'
import { countChange, searchKeyword } from '../../action'
import StorageUtil from '../../util/StorageUtil'


class Page1 extends Component {
  componentDidMount() {
    console.disableYellowBox = true
    console.log('page1 props ---', this.props)
  }

  render() {
    const { dynamicBottomNavigator: { repositories } } = this.props
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.title}>Welcome Home</Text>
          <Image 
            source={require('../../asset/image/kris.jpg')}
            style={styles.avatar}
          />
        </View>
        <View>
          <TextInput
            style={{height: 40, borderColor: 'gray', borderWidth: 1, marginLeft: 12, marginRight: 12,}}
            placeholder={'請輸入想搜索的關鍵字'}
            onChangeText={(text) => this.keyword = text}
          />
          <TouchableHighlight>
            <View style={styles.button}>
              <Button 
                title={'搜索'}
                onPress={() => {
                  if (!this.keyword) {
                    return
                  } else {
                    this.props.onSearchKeyword(this.keyword)
                  }
                }}
              />
            </View>
          </TouchableHighlight>
          
          {
            repositories ? <Text>相關倉庫數量: {repositories.total_count}</Text> : null
          }
        </View>
        <View style={styles.button}>
          <Button
            title={`点击次数-${this.props.dynamicBottomNavigator.count || 0}`}
            onPress={() => {
              // this.props.dispatch(countChange(1))
            }}
          />
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: '#896',
    flex: 1,
  },
  header: {
    alignItems: 'center',
    flexDirection: 'row',
    padding: 20,
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'left',
    paddingRight: 40,
  },
  avatar: {
    width: 80,
    height: 80,
    borderRadius: 50,
    alignSelf: 'flex-end',
  },
  button: {
    borderRadius: 4,
    borderWidth: 1,
    borderColor: 'black',
    marginTop: 10,
    marginBottom: 10,
    marginLeft: 12,
    marginRight: 12,
  }
})

const mapDispatchToProps = dispatch => {
  return {
    onSearchKeyword: keyword => dispatch(searchKeyword(keyword))
  }
}

export default connect(null, mapDispatchToProps)(Page1)