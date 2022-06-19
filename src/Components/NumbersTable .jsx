function NumbersTable({limit}){
    const arrayToDisplay = []
    for (let index = 1; index <= limit; index+=1) {
        arrayToDisplay.push(index);    
    }
    return (
        <div className="numberTable">
            {arrayToDisplay.map((number, i)=>{
                return(
                    number % 2 === 0 ? 
                    <div style={{backgroundColor:"red"}} key={number +"_" + i}>{number}</div>
                    : <div style={{backgroundColor:"white"}} key={number +"_" + i}>{number}</div>
                )
            })}
        </div>
    )
}

export default NumbersTable 