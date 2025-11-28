import Die from "./Die"
import type { DieObject } from "../App"


export default function Gameboard(
    {
        dieObjects,
        onDieClick
    }: 
    {
        dieObjects: DieObject[],
        onDieClick: (index: number) => void
    }) {

    const dieComponents = dieObjects.map((dieObject, index) => (
        <Die key={index}
            value={dieObject.value}
            isHeld={dieObject.isHeld}
            onClick={() => onDieClick(index)}
        />
    ));

    return (
        <div className='gameboard'>
            {dieComponents}
        </div>
    )
}