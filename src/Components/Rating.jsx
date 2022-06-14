function Rating({children}) {
    return (
        <div className="rating">{"★".repeat(Math.round(children))+"☆".repeat(5-Math.round(children))}</div>
    )
}
export default Rating;