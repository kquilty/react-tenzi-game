// import { useState } from 'react'
import './App.css'

function App() {

  return (
    <div className="App">
        <Gameboard />
    </div>
  )
}

function Gameboard(){
    return (
        <div className='gameboard'>
            <Die />
            <Die />
            <Die />
            <Die />
            <Die />
            <Die />
            <Die />
            <Die />
            <Die />
        </div>
    )
}
function Die(){
    return (
        <div className='die'>
            x
        </div>
    )
}

export default App
