

import rootReducer from '../reducer'
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import logger from 'redux-logger'

const middlewares = [
  logger,
  thunk,
]

const initialState = {}

export default store = createStore(rootReducer, initialState, applyMiddleware(...middlewares))

