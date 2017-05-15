interface Person {
  name: string
  email: string
  age: number
}

function check(person: Person): boolean {
  return person.age > 21
}

import * as React from 'react'
import {render} from 'react-dom'
import {configureStore} from './redux/store'

const store = configureStore()

store.subscribe(() => {
  const state = store.getState()
  console.log('State is: ', state)
})

store.dispatch({type: 'HELLO'})

render(
  <div>
    <h1>React / Redux</h1>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Exercitationem facere, illum sint labore corrupti corporis sequi dolorem voluptatum assumenda quia voluptates! Itaque id alias porro nisi sint quae doloribus, voluptates.</p>
  </div>,
  document.getElementById('root')
)
