import { COUNT_CHANGE } from '../../action/types'

const initial_state = {
  count: 0,
}

export default dynamicBottomNavigatorReducer = (state = initial_state, {type, payload}) => {
  switch (type) {
    case COUNT_CHANGE:
      return {
        ...state,
        count: state.count + payload
      }
    default: 
      return state
  }
}