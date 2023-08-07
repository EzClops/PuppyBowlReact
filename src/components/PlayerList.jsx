import { useState, useEffect } from "react"
import Player from "./Player";
import PlayerForm from "./PlayerForm";

const dummyPlayer=[{ id: 1, name: "R2-D2", breed: "222-222-2222", status: "r2d2@droids.com", imageUrl:"https://learndotresources.s3.amazonaws.com/workshop/60ad725bbe74cd0004a6cba0/puppybowl-default-dog.png"}]

export default function PlayerList(){
    const [playerList, setPlayerList] = useState(dummyPlayer);
    const [deletePlayerNotif, setDeletePlayerNotif] = useState("")

    useEffect(() =>{
        async function fetchPlayers(){
            try{
                const request = await fetch("https://fsa-puppy-bowl.herokuapp.com/api/2109-UNF-HY-WEB-PT/players");
                const response = await request.json();
                // console.log(response.data.players);
                setPlayerList(response.data.players);
                setPlayerListMain(response.data.players);
            }catch (error){
                console.error(error);
            }
        }
        fetchPlayers();
    }, [])
    // console.log(playerList)    
    
    return(
        <>
            <PlayerForm setPlayerList={setPlayerList}></PlayerForm>
            <table>
                <thead>
                    <tr>
                        <th>Player</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        playerList.map(player =>{
                            return <Player key={player.id} player={player} setPlayerList={setPlayerList}/>
                        })
                    }
                </tbody>
            </table>
        </>
    )
}