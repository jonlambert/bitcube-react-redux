import {createStore, Action, applyMiddleware} from 'redux'
import {createLogger} from 'redux-logger'

interface AppAction {
  type: string
  payload: any
}

module AppActions {
  export const SAY_HELLO = "SAY_HELLO"
}

const initialState = {
  message: 'Welcome to Toshi'
}

const appReducer = (state = {}, action: AppAction) => {
  return {...state}
}

const logger = store => next => action => {
  console.info(action, store.getState())
  return next(action)
}

const changeMessage = (message: string) => {
  return {
    type: AppActions.SAY_HELLO,
    payload: message
  }
}

export const configureStore = () => {
  return createStore(appReducer, {}, applyMiddleware(logger))
}
