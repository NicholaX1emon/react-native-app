import { COUNT_CHANGE } from '../types'

export const countChange = number => {
  return {
    type: COUNT_CHANGE,
    payload: number,
  }
}