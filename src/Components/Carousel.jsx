import {useState} from 'react'

function Carousel({images}){
    const [index, setIndex] = useState(0)
    return (
        <div>
            <div><img src={images[index]} alt="one image"></img></div>
            <div>
                <button type="button" onClick={()=>{
                    if(index-1 < 0){
                        setIndex(images.length-1)
                    }else{
                        setIndex(index - 1)
                    }
                }}> Left </button>
                <button type="button" onClick={()=>{
                    if(index +1> images.length-1){
                        setIndex(0)
                    }else{
                        setIndex(index + 1)
                    }
                }}> Right </button>
            </div>
        </div>
    )
}

export default Carousel