import emptyDice from '../assets/images/dice-empty.png'
import dice1 from '../assets/images/dice1.png'
import dice2 from '../assets/images/dice2.png'
import dice3 from '../assets/images/dice3.png'
import dice4 from '../assets/images/dice4.png'
import dice5 from '../assets/images/dice5.png'
import dice6 from '../assets/images/dice6.png'
import { useState } from "react"


const dices = [dice1, dice2, dice3, dice4, dice5, dice6]

function randomDice(){
    return dices[Math.floor(Math.random() * dices.length)]
}

function Dice(){
    const [dice, setDice] = useState(dice3)

    function handleDice(){
        setDice(emptyDice)
        window.setTimeout(() => {
            setDice(randomDice())
        }, 1000);
    }
    
    return (
        <div className="dice">
            <img src={dice} alt="dice number" onClick={()=>{handleDice()}} />
               
        </div>
        
    )
    
}

export default Dice