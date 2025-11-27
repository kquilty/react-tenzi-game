import { useState, type JSX } from 'react'
import './App.css'
import Gameboard from './components/Gameboard'
import Die from './components/Die'
import RollDiceButton from './components/RollDiceButton'

function App() {
    const [dieComponents, setDieComponents] = useState<JSX.Element[]>([])

    // rollAllDiceFresh()

    function GetRandomDieNumber() {
        return Math.ceil(Math.random() * 6);
    }

    function onRollDiceClick(){
        rollAllDiceFresh()
    }
    function rollAllDiceFresh(){
        const newDieComponents = []
        for(let i = 0; i < 9; i++){
            newDieComponents.push(<Die value={GetRandomDieNumber()} isHeld={false} />)
        }
        setDieComponents(newDieComponents)
    }

    return (
    <div className="App">
        <Gameboard dieComponents={dieComponents} />
        <RollDiceButton onRollDiceClick={onRollDiceClick} />
    </div>
    )
}


export default App
