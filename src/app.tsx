
import * as React from 'react'
import * as ReactDOM from 'react-dom'
import {configureStore, incrementCounter, decrementCounter} from './redux/store'
import {Provider, connect} from 'react-redux'

const Counter = ({counter}) => {
  return <div>Counter: {counter}</div>
}

@connect(
  state => ({
    counter: state.counter
  }),
  dispatch => ({
    increment: () => dispatch(incrementCounter()),
    decrement: () => dispatch(decrementCounter())
  })
)
class Application extends React.Component<any, any> {
  render() {
    return <div>
      <Counter counter={this.props.counter} />
      <button onClick={this.props.increment}>Increment</button>
      <button onClick={this.props.decrement}>Decrement</button>
    </div>
  }
}

const initialState = {
  counter: 0 
}
const store = configureStore(initialState)

ReactDOM.render(
  <Provider store={store}>
    <Application />
  </Provider>, 
  document.getElementById('root')
)
