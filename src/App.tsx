import { useState, type JSX } from 'react'
import './App.css'

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


function Gameboard({dieComponents}: {dieComponents: JSX.Element[]}) {
    return (
        <div className='gameboard'>
            {dieComponents}
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
function RollDiceButton({onRollDiceClick}: {onRollDiceClick: () => void}){
    return (
        <button 
            className='roll-dice-button'
            onClick={onRollDiceClick}
        >
            Roll Dice
        </button>
    )
}

export default App
