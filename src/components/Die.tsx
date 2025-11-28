export default function Die(
    props: DieProps
){
    return (
        <div 
            className={props.isHeld ? "die held" : "die"}
            onClick={props.onClick}
         >
            {props.value}
        </div>
    )
}
interface DieProps {
    value: number,
    isHeld: boolean,
    onClick?: () => void
}