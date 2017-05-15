import {createStore, applyMiddleware} from 'redux'
import {createLogger} from 'redux-logger'

export module AppActions {
  export const INCREMENT = "INCREMENT"
  export const DECREMENT = "DECREMENT"
}

interface AppState {
  counter: number
}

interface Action {
  type: string
  payload: any
}

const appReducer = (state: AppState, action: Action): AppState => {
  switch (action.type) {
    case AppActions.INCREMENT:
      return {
        ...state,
        counter: state.counter + 1
      }
    case AppActions.DECREMENT:
      return {
        ...state,
        counter: state.counter - 1
      }
    default: return {...state}
  }
}

export const incrementCounter = () => {
  return {
    type: AppActions.INCREMENT
  }
}

export const decrementCounter = () => {
  return {
    type: AppActions.DECREMENT
  }
}

export const configureStore = (initialState: AppState) => {
  const middleware = [
    createLogger(),
    // ...plus any others needed
  ]

  return createStore<AppState>(
    appReducer, 
    initialState, 
    applyMiddleware(...middleware)
  )
}
