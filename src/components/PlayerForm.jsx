import { useState, useEffect } from "react";
// , team, teamId, status, imgUrl

export default function PlayerForm({ setPlayerList }){
    const [name, setName] = useState("");
    const [breed, setBreed] = useState("");
    const [team, setTeam] = useState(0);
    const [teamId, setTeamId] = useState(0);
    const [status, setStatus] = useState("");
    const [imageUrl, setImgUrl] = useState("");

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
                    body: JSON.stringify({name, breed, imageUrl}),
                }
                );
            const result = await response.json();
            console.log("Hi", result);
            const response2 = await fetch('https://fsa-puppy-bowl.herokuapp.com/api/2109-UNF-HY-WEB-PT/players');
            const result2 = await response2.json();
            setPlayerList(result2.data.players);

        }catch(error){
            console.error(error);
        }
    }
    
    return(
        <>
            <form onSubmit={addPlayer}>
                <label>
                    Name: <input type="text" value={name} onChange={(e) => {
                        setName(e.target.value);
                    }}/>
                </label>
                <label>
                    Breed: <input type="text" value={breed} onChange={(e) => {
                        setBreed(e.target.value);
                    }}/>
                </label>
                {/* <label>
                    Team: <input value={team} onChange={(e) => {
                        setTeam(e.target.value);
                    }}/>
                </label> */}
                {/* <label>
                    TeamId: <input value={teamId} onChange={(e) => {
                        setTeamId(e.target.value);
                    }}/>
                </label> */}
                {/* <label>
                    Status: <input value={status} onChange={(e) => {
                        setStatus(e.target.value);
                    }}/>
                </label> */}
                <label>
                    ImageUrl: <input type="text" value={imageUrl} onChange={(e) => {
                        setImgUrl(e.target.value);
                    }}/>
                </label>
                <input type="submit" value="Submit"/>
            </form>
        </>
    )
}