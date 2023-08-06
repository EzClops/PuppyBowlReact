import { useState } from 'react'
import './App.css'
import PlayerList from './components/PlayerList'
import PlayerForm from './components/PlayerForm'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <h1>Puppy Bowl</h1>
      <PlayerForm/>
      <PlayerList></PlayerList>
    </>
  )
}

export default App
