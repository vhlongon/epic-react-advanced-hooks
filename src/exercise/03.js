// useContext: simple Counter
// http://localhost:3000/isolated/exercise/03.js

import * as React from 'react'

const CountContext = React.createContext()
// 🐨 create your CountContext here with React.createContext

// 🐨 create a CountProvider component here that does this:
//   🐨 get the count state and setCount updater with React.useState
//   🐨 create a `value` array with count and setCount
//   🐨 return your context provider with the value assigned to that array and forward all the other props
//   💰 more specifically, we need the children prop forwarded to the context provider

const useCountContext = () => {
  const context = React.useContext(CountContext)
  if (!context) {
    throw new Error('useCount must be used within a CountProvider')
  }
  return context
}

const CountProvider = ({children, initialValue}) => {
  const [count, setCount] = React.useState(initialValue)
  return (
    <CountContext.Provider value={{count, setCount: setCount}}>
      {children}
    </CountContext.Provider>
  )
}

function CountDisplay() {
  const {count} = useCountContext()
  return <div>{`The current count is ${count}`}</div>
}

function Counter() {
  const {setCount} = React.useContext(CountContext)

  const increment = () => setCount(c => c + 1)
  return <button onClick={increment}>Increment count</button>
}

function App() {
  return (
    <CountProvider initialValue={0}>
      <div>
        <CountDisplay />
        <Counter />
      </div>
    </CountProvider>
  )
}

export default App
