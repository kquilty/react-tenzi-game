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
            <Die value={1} isHeld={false} />
            <Die value={2} isHeld={false} />
            <Die value={3} isHeld={false} />
            <Die value={4} isHeld={false} />
            <Die value={5} isHeld={false} />
            <Die value={6} isHeld={false} />
            <Die value={7} isHeld={false} />
            <Die value={8} isHeld={false} />
            <Die value={9} isHeld={false} />
        </div>
    )
}
function Die(props: DieProps){
    return (
        <div className={props.isHeld ? "die held" : "die"}>
            {props.value}
        </div>
    )
}
interface DieProps {
    value: number,
    isHeld: boolean
}

export default App
