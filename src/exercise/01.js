// useReducer: simple Counter
// http://localhost:3000/isolated/exercise/01.js

import * as React from 'react'

// function countReducer(state, newState) {
//   return newState
// }

// function countReducer(count, step) {
//   return count + step
// }

// function countReducer(state, newState) {
//   return { ...state, ...newState }
// }

// function countReducer(state, action) {
//   return {
//     ...state,
//     ...(typeof action === 'function' ? action(state) : action)
//   }
// }

function countReducer(state, action) {
  switch(action.type) {
    case 'INCREMENT':
      return { ...state, count: state.count + action.step }
    default:
      throw new Error(`Unsupported action type: ${action.type}`)
  }
}

function Counter({initialCount = 0, step = 1}) {
  // const [count, setCount] = React.useReducer(countReducer, initialCount)
  // const [count, changeCount] = React.useReducer(countReducer, initialCount)
  // const [state, setState] = React.useReducer(countReducer, { count: initialCount })
  const [state, dispatch] = React.useReducer(countReducer, { count: initialCount })

  const {count} = state

  // const increment = () => setCount(count + step)
  // const increment = () => changeCount(step)
  // const increment = () => setState({count: count + step})
  // const increment = () => setState(currentState => ({count: currentState.count + step}))
  const increment = () => dispatch({type: 'INCREMENT', step})
  return <button onClick={increment}>{count}</button>
}

function App() {
  return <Counter />
}

export default App
