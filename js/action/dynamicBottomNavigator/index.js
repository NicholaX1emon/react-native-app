import { COUNT_CHANGE, SEARCH_KEYWORD } from '../types'
import axios from 'axios'

export const countChange = number => {
  return {
    type: COUNT_CHANGE,
    payload: number,
  }
}

export const searchKeyword = keyword => async dispatch => {
  try {
    const resp = await axios.get(`https://api.github.com/search/repositories?q=${keyword}`)
    const { data } = resp
    console.log('resp ---', resp)
    dispatch({
      type: SEARCH_KEYWORD,
      payload: data,
    })
  } catch(err) {
    console.error(err)
  }
}