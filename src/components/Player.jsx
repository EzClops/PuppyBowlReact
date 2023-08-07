import React from "react"
import Details from "./Details";
import PlayerDelete from "./PlayerDelete";
import PlayerList from "./PlayerList";
import { useState, useEffect, useCallback } from "react";
import { Routes, Route, Link } from "react-router-dom";
import { useNavigate } from "react-router-dom"

export default function Player({ player, setPlayerList }){
    const navigate = useNavigate();
    
    
    const [playerDetail, setPlayerDetail] = useState("hi");

    function refreshPage(){ 
        window.location.reload(); 
    }

    useEffect(() =>{
        async function fetchPlayerDetail(){
            try{
                // console.log(player.id);
                const response = await fetch(`https://fsa-puppy-bowl.herokuapp.com/api/2109-UNF-HY-WEB-PT/players/${player.id}`);
                const result = await response.json();
                // console.log(result.data.player);
                setPlayerDetail(result.data.player);
            }catch(error){
                console.error(error);
            }
        }
        fetchPlayerDetail();
    }, [])

   
    const fetchRequest = useCallback(() =>{
        async function deletePlayer(){
            fetch('https://fsa-puppy-bowl.herokuapp.com/api/2109-UNF-HY-WEB-PT/players', {
                method: 'DELETE',
            });
            try {
                const response = await fetch(
                `https://fsa-puppy-bowl.herokuapp.com/api/2109-UNF-HY-WEB-PT/players/${player.id}`,
                {
                    method: 'DELETE',
                }
                );
                const result = await response.json();
                console.log(result);
                const response2 = await fetch('https://fsa-puppy-bowl.herokuapp.com/api/2109-UNF-HY-WEB-PT/players');
                const result2 = await response2.json();
                setPlayerList(result2.data.players)
                
            } catch (err) {
                console.error(err);
            }
        }
        deletePlayer();  
    })
    


    return(
        <>
            <tr>
                <div className="attributes">
                    <td>Name: {player.name}</td>
                    <td>Breed: {player.breed}</td>
                    <td>Status: {player.status}</td>
                </div>
                <img alt="doggie" src={player.imageUrl}></img>
                <button onClick={() => navigate(`/player${player.id}`)}>
                    <Link to={`/player${player.id}`}>Details</Link>
                    <Routes>
                        <Route path={`/player${player.id}`} element={<Details key={`/player${player.id}`} player={playerDetail}></Details>}/>

                    </Routes>
                </button>
                <button onClick={() =>{ 
                    fetchRequest();
                    // refreshPage();
                    // <PlayerDelete key={player.id}></PlayerDelete>
                    // deletePlayer()
                    // navigate('/players');
                }}>
                
                    Delete
                </button>
                
            </tr>
        </>
    )
}