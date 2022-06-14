import { useState } from "react"
import img from '../assets/images/maxence.png'
import imgClicked from '../assets/images/maxence-glasses.png'

function CilckablePicture(){

    const [clicked, setClicked] = useState(false)
    let imgPath = clicked ? imgClicked : img
    
    return (
        
    <div className="clickableImg">
        <img src={imgPath} alt= "a photo" onClick = {()=>{
            setClicked(!clicked)
        }} />
        
    </div>
        
    )
}

export default CilckablePicture