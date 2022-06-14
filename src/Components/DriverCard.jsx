import Rating from "./Rating";

function DriverCard({name, rating, img, car}) {
    return (
        <div className="driverCard">
            <div className="roundImg"><img src={img} alt="idPhoto"/></div>
            <div className="driverInfo">
                <h2>{name}</h2>
                <Rating>{rating}</Rating>
                <p>{`${car.model} - ${car.licensePlate}`} </p>
            </div>
            
        </div>
    )
}
export default DriverCard;