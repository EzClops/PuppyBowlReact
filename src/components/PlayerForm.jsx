import { useState, useEffect } from "react";


export default function PlayerForm(){
    const [name, setName] = useState("");
    const [breed, setBreed] = useState("");
    const [team, setTeam] = useState(0);
    const [teamId, setTeamId] = useState(0);
    const [status, setStatus] = useState("");
    const [imgUrl, setImgUrl] = useState("");

    async function addPlayer(event){
        event.preventDefault();
        try{
            const response = await fetch(
                'https://fsa-puppy-bowl.herokuapp.com/api/2109-UNF-HY-WEB-PT/players',
                {
                    method: 'POST',
                    headers: {
                    'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                    name: {name},
                    breed: {breed},
                    // team: {team},
                    // teamId: {teamId},
                    // status: {status},
                    imgUrl: {imgUrl}
                    }),
                }
                );
                const result = await response.json();
                console.log(result);
        }catch(error){
            console.error(error);
        }
    }
    
    return(
        <>
            <form onSubmit={addPlayer}>
                <label>
                    Name: <input value={name} onChange={(e) => {
                        setName(e.target.value);
                    }}/>
                </label>
                <label>
                    Breed: <input value={breed} onChange={(e) => {
                        setBreed(e.target.value);
                    }}/>
                </label>
                {/* <label>
                    Team: <input value={team} onChange={(e) => {
                        setTeam(e.target.value);
                    }}/>
                </label>
                <label>
                    TeamId: <input value={teamId} onChange={(e) => {
                        setTeamId(e.target.value);
                    }}/>
                </label> */}
                {/* <label>
                    Name: <input value={name} onChange={(e) => {
                        setName(e.target.value);
                    }}/>
                </label> */}
                <label>
                    ImageUrl: <input value={imgUrl} onChange={(e) => {
                        setImgUrl(e.target.value);
                    }}/>
                </label>
                <button type="submit">Submit</button>
            </form>
        </>
    )
}