const greetings = {
    de : "Hallo",
    fr: "Bonjour",
    en: "Hello",
    cn: "你好"
}

function Greetings ({lang, name}){
    return (
        <div className="borderCard">{greetings[lang]} {name}</div>
    )
}
export default Greetings;
