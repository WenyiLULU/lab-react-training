import { useState } from "react"

const colors = ['purple','blue','green','yellow','orange','red']

function LikeButton(){
    
    const [number1, setNumber1] = useState(0)
    const [number2, setNumber2] = useState(0)
    let color1 = colors[number1 % 6]
    let color2 = colors[number2 % 6]
    return (
        
    <div >
        <button className="likeBtn" type="button" style={{backgroundColor: color1}} onClick={()=>{
            setNumber1(number1+1)
        }} >{number1} Likes</button>
        <button className="likeBtn" type="button" style={{backgroundColor: color2}} onClick={()=>{
            setNumber2(number2+1)
        }}>{number2} Likes</button>
    </div>
        
    )
}

export default LikeButton