import { COUNT_CHANGE, SEARCH_KEYWORD } from '../../action/types'

const initial_state = {
  count: 0,
  repositories: null,
}

export default dynamicBottomNavigatorReducer = (state = initial_state, {type, payload}) => {
  switch (type) {
    case COUNT_CHANGE:
      return {
        ...state,
        count: state.count + payload,
      }
    case SEARCH_KEYWORD:
      return {
        ...state,
        repositories: payload,
      }  
    default: 
      return state
  }
}