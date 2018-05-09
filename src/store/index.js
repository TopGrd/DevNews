import { createStore, applyMiddleware, compose } from 'redux'
import rootReducer from '../reducers'
import { reduxLogger } from '../utils'

// eslint-disable-next-line
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(reduxLogger))
)

export default store
