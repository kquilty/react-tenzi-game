import { useState, type JSX } from 'react'
import './App.css'

import Gameboard from './components/Gameboard'
// import Die from './components/Die'
import RollDiceButton from './components/RollDiceButton'

function App() {
    const [dieObjects, setDieObjects] = useState<DieObject[]>([])

    // rollAllDiceFresh()

    function GetRandomDieNumber() {
        return Math.ceil(Math.random() * 6);
    }

    function onRollDiceClick(){
        rollAllDiceFresh()
    }
    function rollAllDiceFresh(){
        const newDieObjects = []
        for(let i = 0; i < 9; i++){
            newDieObjects.push({
                    value: GetRandomDieNumber(),
                    isHeld: false
                }
            )
        }
        setDieObjects(newDieObjects)
    }

    function handleDieClick(dieIndex: number){
        const newDieObjects = [...dieObjects]

        // Toggle isHeld
        newDieObjects[dieIndex].isHeld = !newDieObjects[dieIndex].isHeld
        
        setDieObjects(newDieObjects)
    }

    return (
        <div className="App">
            <Gameboard 
                dieObjects={dieObjects} 
                onDieClick={handleDieClick}
            />
            <RollDiceButton onRollDiceClick={onRollDiceClick} />
        </div>
    )
}

export type DieObject = {
    value: number,
    isHeld: boolean
}

export default App
