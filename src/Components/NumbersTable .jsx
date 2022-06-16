function NumbersTable({limit}){
    const arrayToDisplay = []
    for (let index = 1; index <= limit; index+=1) {
        arrayToDisplay.push(index);    
    }
    return (
        <div className="numberTable">
            {arrayToDisplay.map((number)=>{
                return(
                    number % 2 === 0 ? 
                    <div style={{backgroundColor:"red"}}>{number}</div>
                    : <div style={{backgroundColor:"white"}}>{number}</div>
                )
            })}
        </div>
    )
}

export default NumbersTable 