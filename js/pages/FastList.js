/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { PureComponent } from 'react';
import {
  StyleSheet,
  ScrollView,
  View,
  FlatList,
  Text,
} from 'react-native';

import {
  Header,
  Colors,
} from 'react-native/Libraries/NewAppScreen';

import Pingpp from 'pingpp-react-native'

class FastList extends PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      temp_data: [
        {
          name: 'hapi',
          age: 11,
        },
        {
          name: 'hanhan',
          age: 12,
        }
      ],
      refreshing: false,
    }
  }

  componentDidMount() {
    console.log('Pingpp ---', Pingpp)
    // Pingpp.setDebug(true)
    // Pingpp.createPayment('charge', (res) => {
    //   console.log('payment res ---', res)
    // })
  }
  

  render () {
    const { temp_data, refreshing } = this.state  

    return (
      <FlatList
        style={styles.fastList}
        data={temp_data}
        keyExtractor={(item, index) => `${item.name}${index}`}
        renderItem={({item}, index) => {
          return (
            <View style={styles.item}>
              <Text style={styles.name}>{item.name} : {item.age}</Text>
            </View>
          )
        }}
        refreshing={refreshing}
        onRefresh={() => {
          this.setState({
            temp_data: [
              ...this.state.temp_data.reverse()
            ],
            refreshing: true
          })
          setTimeout(() => {
            this.setState({
              refreshing: false,
            })
          }, 1000)
        }}
        onEndReached={() => {
          this.setState({
            temp_data: [
              ...this.state.temp_data,
              {
                name: `xx-${Math.floor(Math.random() * 10)}`,
                age: Math.ceil(Math.random() * 30),
              }
            ],
          })
        }}
      />
    );
  }
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
  fastList: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: 'bold',
    padding: 10,
    backgroundColor: '#1890ff'
  },
  item: {
    height: 200,
    color: '#ffffff',
    marginBottom: 16,
    backgroundColor: 'green',
  },
  name: {
    color: '#fff',
  }
});

export default FastList;
