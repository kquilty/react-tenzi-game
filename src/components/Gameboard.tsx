export default function Gameboard({dieComponents}: {dieComponents: JSX.Element[]}) {
    return (
        <div className='gameboard'>
            {dieComponents}
        </div>
    )
}