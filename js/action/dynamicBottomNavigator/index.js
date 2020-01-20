import { COUNT_CHANGE, SEARCH_KEYWORD } from '../types'
import axios from 'axios'
import Storage from '../../util/Storage'

export const countChange = number => {
  return {
    type: COUNT_CHANGE,
    payload: number,
  }
}

export const searchKeyword = keyword => async dispatch => {
  try {
    const storage = new Storage()
    const result = await storage.fetchData(`https://api.github.com/search/repositories?q=${keyword}`, )
    console.log('result ---', result)
    result && storage.save('_search', result)
    // const resp = await axios.get(`https://api.github.com/search/repositories?q=${keyword}`)
    // const { data } = resp
    // console.log('resp ---', resp)
    dispatch({
      type: SEARCH_KEYWORD,
      payload: result,
    })
  } catch(err) {
    console.error(err)
  }
}