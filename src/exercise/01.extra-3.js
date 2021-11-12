// useReducer: simple Counter
// http://localhost:3000/isolated/exercise/01.js

import React, { useReducer } from 'react'

function countReducer(state, action) {
  if (typeof action === 'object') {
    return {count: action.count}
  }
  return action(state)
}

function Counter({initialCount = 0, step = 1}) {
  const [state, setState] = useReducer(countReducer, {
    count: initialCount,
  })
  const {count} = state
  const increment = () =>
  setState(currentState => ({count: currentState.count + step}))

  return <button onClick={increment}>{count}</button>
}

function App() {
  return <Counter />
}

export default App


