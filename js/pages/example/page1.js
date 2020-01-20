import React, { Component } from 'react'
import {
  View,
  Text,
  Button,
  Image,
  StyleSheet,
  TextInput,
  TouchableHighlight,
  FlatList,
} from 'react-native'
import { connect } from 'react-redux'
import axios from 'axios'
import qs from 'qs'
import NaviUtil from '../../util/NaviUtil'
import { countChange, searchKeyword } from '../../action'
import Storage from '../../util/Storage'


class Page1 extends Component {
  constructor(props) {
    super(props)
    this.state = {
      total_count: 0,
      loaded: false,
      data: [],
    }
  }

  componentDidMount() {
    console.disableYellowBox = true
    console.log('page1 props ---', this.props)
    new Storage().load('_search').then(localData => {
      const { loaded } = this.state
      !loaded && this.setState({
        total_count: localData.total_count,
        data: localData.items,
      })
    })
  }

  render() {
    const { dynamicBottomNavigator: { repositories } } = this.props
    const { data } = this.state

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
            /* repositories ? <Text>相關倉庫數量: {repositories.total_count}</Text> : null */
            <Text style={styles.count_text}>相關倉庫數量: {this.state.total_count}</Text>
          }
        </View>
          {
            data.length > 0 && <FlatList 
              data={data}
              keyExtractor={(item) => item.id}
              renderItem={({item}, index) => {
                console.log('item ----', item)
                return <View style={styles.list_item}>
                  <Text style={{fontSize: 16, color: '#0366d6'}}>{item.full_name}</Text>
                  <Text style={{color: '#24292e',}}>{item.description}</Text>
                  <View style={styles.list_item_footer}>
                    <Text style={{flex: 1, paddingLeft: 4, color: '#586069'}}>★ {item.stargazers_count}</Text>
                    <Text style={{flex: 2, color: '#586069'}}>updated on {item.updated_at}</Text>
                  </View>
                </View>
              }}
            />
          }
        {/* <View style={styles.button}>
          <Button
            title={`点击次数-${this.props.dynamicBottomNavigator.count || 0}`}
            onPress={() => {
              this.props.dispatch(countChange(1))
            }}
          />
        </View> */}
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    paddingTop: 0,
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
    width: 70,
    height: 70,
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
  },
  count_text: {
    fontSize: 18,
    color: '#923',
    marginBottom: 12,
  },
  list_item: {
    backgroundColor: '#ffffff',
    padding: 8,
    borderRadius: 4,
    marginTop: 4,
    marginBottom: 4,
    elevation: 4,
  },
  list_item_footer: {
    flexDirection: 'row',
    justifyContent: 'flex-start'
  }
})  

const mapDispatchToProps = dispatch => {
  return {
    onSearchKeyword: keyword => dispatch(searchKeyword(keyword))
  }
}

export default connect(null, mapDispatchToProps)(Page1)