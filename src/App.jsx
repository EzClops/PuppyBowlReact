import { useState } from 'react'
import './App.css'
import PlayerList from './components/PlayerList'
import PlayerForm from './components/PlayerForm'
import { Routes, Route, Link } from "react-router-dom";

function App() {
  // const [playerListMain, setPlayerListMain] = useState("")

  return (
    <>
    <h1>Puppy Bowl</h1>
      {/* <PlayerForm playerListMain={playerListMain} setPlayerListMain={setPlayerListMain}/> */}
      <Routes>
      <Route path="/players" element={<PlayerList></PlayerList>}/>
      </Routes>
      <PlayerList></PlayerList>
    </>
  )
}

export default App
