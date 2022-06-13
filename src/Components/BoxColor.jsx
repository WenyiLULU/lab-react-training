function componentToHex(c) {
    var hex = c.toString(16);
    return hex.length === 1 ? "0" + hex : hex;
}
  
function rgbToHex(r, g, b) {
return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
}


function BoxColor({r, g, b}){
    const divStyle = {
        margin:'10px',
        padding: '20px',
        border: '1px solid',
        height: '100px',
        backgroundColor: 'rgb(' + r + ',' + g + ',' + b + ')'
    }
    return (
        <div style={divStyle}>
            <p>rgb({r},{g},{b})</p>
            <p>{rgbToHex(r,g,b)}</p>
        </div>
    )
}

export default BoxColor;