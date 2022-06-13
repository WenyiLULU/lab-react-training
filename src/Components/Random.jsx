function Random({min, max}) {
    return (
        <div className="borderCard">Randome value between {min} and {max} {"=>"} {Math.floor(Math.random() * max)}</div>
    )
}
export default Random;
