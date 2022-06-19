import { useState } from "react"



function FaceBook ({profiles}){
    const countriesList = profiles.map((profile)=>{return profile.country})
    const [countrySlected, setCountrySelected] = useState("")

    return (
        
        <div>
            <div className="selectBtns">
                <button onClick={()=> setCountrySelected(" ")}>All</button>
                <button onClick={()=> setCountrySelected("England")}>England</button>
                <button onClick={()=> setCountrySelected("USA")}>USA</button>
                <button onClick={()=> setCountrySelected("Malaysia")}>Malaysia</button>
                <button onClick={()=> setCountrySelected("Germany")}>Germany</button>
                <div class="dropdown">
                    <button class="dropbtn">...</button>
                    <div class="dropdown-content">
                        {countriesList.map((country, i)=> 
                        <p key={country + i} onClick={()=> setCountrySelected(country)}>
                            {country}
                        </p>)}
                    </div>
                </div>
                
            </div>
            
            {profiles.map((profile, i)=>{
                let bgColor =""
                profile.country === countrySlected ?
                bgColor = "lightblue" : bgColor = "white"              
               
                return(
                    <div className="faceBook" key= {profile.firstName + i } style={{backgroundColor: bgColor}}>
                        <img src={profile.img} alt="photo"></img>
                        <div>
                            <p><strong>First name: </strong>{profile.firstName }</p>
                            <p><strong>Last name: </strong>{profile.lastName }</p>
                            <p><strong>Country: </strong>{profile.country }</p>
                            <p><strong>Type: </strong>{profile.isStudent ? 'Student': 'Teacher' }</p>
                        </div>
                    </div>)
            }
            
            )}
        </div>
        
    )
}
export default FaceBook