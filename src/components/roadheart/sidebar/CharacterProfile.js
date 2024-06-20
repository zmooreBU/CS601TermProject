function CharacterProfile({character}) {
    return(
        <div className="character-profile">
            <div >
                <img className="profile-img" src={'/' + character.img} alt=""/>
            </div>
            <div className="profile-details">
                <h3>{character.name}</h3>
                <div className="profile-details-section">
                    <h4>{character.class} {character.level} </h4>
                    <div>
                    <h4>Skills:</h4>
                        <ul>
                            {character.skills.map((skill, index) =>
                            <li key={index}><b>{skill.name}: +{skill.bonus}</b></li>)}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CharacterProfile;