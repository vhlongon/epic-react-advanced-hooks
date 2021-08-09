// useReducer: simple Counter
// http://localhost:3000/isolated/exercise/01.js

import * as React from 'react'

const countReducer = (state, action) => {
  if (typeof action === 'function') {
    return action(state)
  }

  const {type, step} = action

  switch (type) {
    case 'INCREMENT': {
      const {count} = state
      return {...state, count: step + count}
    }

    default: {
      return state
    }
  }
}

function Counter({initialCount = 0, step = 1}) {
  const [state, setState] = React.useReducer(countReducer, {
    count: initialCount,
  })

  const {count} = state
  const increment = () => setState({step, type: 'INCREMENT'})
  const increment2 = () =>
    setState(currentState => ({count: currentState.count + step}))
  return (
    <>
      <button onClick={increment}>{count}</button>
      <button onClick={increment2}>{count}</button>
    </>
  )
}

function App() {
  return <Counter />
}

export default App
