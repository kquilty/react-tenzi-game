import { useState, type JSX } from 'react'
import './App.css'

import Gameboard from './components/Gameboard'
// import Die from './components/Die'
import RollDiceButton from './components/RollDiceButton'

function App() {
    const [dieObjects, setDieObjects] = useState<DieObject[]>([])
    const [clickCount, setClickCount] = useState(0)

    // rollAllDiceFresh()
    const isGameWon = getIsGameWon()

    function GetRandomDieNumber() {
        return Math.ceil(Math.random() * 6);
    }

    function getIsGameWon(){
        if(dieObjects.length === 0){
            return false
        }
        const firstValue = dieObjects[0].value
        for(const dieObject of dieObjects){
            if(dieObject.value !== firstValue || !dieObject.isHeld){
                return false
            }
        }
        return true
    }

    function onRollDiceClick(){
        if(dieObjects.length === 0 || isGameWon){
            rollAllDiceFresh()
            setClickCount(1)
        } else {
            rollDice()
            setClickCount(clickCount + 1)
        }
    }
    
    function rollDice(){
        const newDieObjects = dieObjects.map(dieObject => {
            if(dieObject.isHeld){
                return dieObject
            } else {
                return {
                    ...dieObject,
                    value: GetRandomDieNumber()
                }
            }
        })
        setDieObjects(newDieObjects)
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

            {isGameWon && <div className='won-message'>You won in {clickCount} rolls!</div>}

        </div>
    )
}

export type DieObject = {
    value: number,
    isHeld: boolean
}

export default App
