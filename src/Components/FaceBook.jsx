function FaceBook ({profiles}){
    return (
        profiles.map((profile, i)=>
            <div className="faceBook" key= {profile.firstName + i }>
                <img src={profile.img} alt="photo"></img>
                <div>
                    <p><strong>First name: </strong>{profile.firstName }</p>
                    <p><strong>Last name: </strong>{profile.lastName }</p>
                    <p><strong>Country: </strong>{profile.country }</p>
                    <p><strong>Type: </strong>{profile.isStudent ? 'Student': 'Teacher' }</p>
                </div>
            </div>
        )
    )
}
export default FaceBook