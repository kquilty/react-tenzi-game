export default function RollDiceButton({onRollDiceClick}: {onRollDiceClick: () => void}){
    return (
        <button 
            className='roll-dice-button'
            onClick={onRollDiceClick}
        >
            Roll Dice
        </button>
    )
}