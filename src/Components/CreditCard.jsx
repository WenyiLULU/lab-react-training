import masterCard from "../assets/images/master-card.svg"
import visaCard from "../assets/images/visa.png"

function cardTypeImg(type){
    if(type === "Visa"){
        return visaCard
    } else {
        return masterCard
    }
}
function hideNumber(number){
    return "⋅⋅⋅⋅ ⋅⋅⋅⋅ ⋅⋅⋅⋅ " + number.slice(-4,)
}
function twoNumbers(number){
    return number < 10 ? "0"+number : number
}
function simpleYear(number){
    return number % 100
}

function CreditCard({card}){
    const divStyle = {
        margin :"10px",
        padding: "20px",
        borderRadius: "10px",
        backgroundColor: card.bgColor,
        color: card.color,
        width: "350px",
        height:"200px"
    }
    return (
        <div style={divStyle} className="creditCard">
            <div className="creditImage"><img src={cardTypeImg(card.type)} alt="Card Type" /></div>
            <h1>{hideNumber(card.number)}</h1>
            <div className="cardText">
                <p>Expires {twoNumbers(card.expirationMonth)}/{simpleYear(card.expirationYear)} <span>{card.bank}</span></p>
                <p>{card.owner}</p>
            </div>
        </div>
    )

}

export default CreditCard;