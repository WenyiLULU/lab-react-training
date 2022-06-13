function toMeter(heightInCm) {
    return heightInCm / 100;
}
function dateToString(date){
    return date.toString().slice(0,15)
}
function IdCard({person}){
    return(
        <div className="borderCard">
            <div><img src={person.picture} alt="profile" /></div>
            <div className="idInfo">
                <p><strong>First name: </strong>{person.firstName}</p>
                <p><strong>Last name: </strong>{person.lastName}</p>
                <p><strong>Gender: </strong>{person.gender}</p>
                <p><strong>Height: </strong>{toMeter(person.height)}m</p>
                <p><strong>Birth: </strong>{dateToString(person.birth)}m</p>
            </div>
        </div>
    )
}

export default IdCard