import { AsyncStorage } from 'react-native'
import axios from 'axios'
import moment from 'moment'

export default class Storage {
  static validateTimestamp(target) {
    if (!target.timestamp) return false
    // return moment().isSame(moment(target.timestamp).format('YYYY-MM-DD')) && moment().hour() - moment(target.timestamp).hour() < 4
    return true
  }

  _wrapDataWithTimestamp(data) {
    return {
      ...data,
      timestamp: moment(),
    }
  }

  save(key, value, callback) {
    if (!key || !value) return
    AsyncStorage.setItem(key, JSON.stringify(this._wrapDataWithTimestamp(value)), callback) 
  }

  async load(key) {
    if (!key) return
    try {
      const item = await AsyncStorage.getItem(key)
      try {
        const value = JSON.parse(item)
        return value
      } catch(err) {
        throw new Error('ParseError: value is not JSON')
      }
    } catch(err) {
      console.error(err)
    }
  }

  async fetchServerData(url) {
    try {
      const resp = await axios.get(url)
      console.log('server resp ---', resp)
      if (resp.status !== 200 && resp.status !== 0) throw new Error('RequestError: Bad Network')
      this.save('server_data', resp.data)
      return resp.data
    } catch(err) {
      console.error(err)
    }
  }

  async fetchData(url, key) {
    try {
      const localData = this.load(key)
      if (localData && Storage.validateTimestamp(localData)) {
        console.log('local data ----', localData)
        return localData
      } else {
        try {
          const serverData = await this.fetchServerData(url)
          console.log('server data ----', serverData)
          return this._wrapDataWithTimestamp(serverData)
        } catch(err) {
          throw new Error(`RequestError: failed to request data from ${url}`)
        }
      }
    } catch(err) {
      try {
        const serverData = await this.fetchServerData(url)
        return this._wrapDataWithTimestamp(serverData)
      } catch(err) {
        console.error(err)
      }
    }
  }
}