import React from "react"
import Details from "./Details";
import { useState, useEffect } from "react";
import { Routes, Route, Link } from "react-router-dom";
import { useNavigate } from "react-router-dom"

export default function Player({ player }){
    const navigate = useNavigate();

    const [playerDetail, setPlayerDetail] = useState("hi");

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

    return(
        <>
            <tr>
                <div className="attributes">
                    <td>Name: {player.name}</td>
                    <td>Breed: {player.breed}</td>
                    <td>Status: {player.status}</td>
                </div>
                <img alt="doggie" src={`${player.imageUrl}`}></img>
                <button onClick={() => navigate(`/player${player.id}`)}>
                    <Link to={`/player${player.id}`}>Details</Link>
                    <Routes>
                        <Route path={`/player${player.id}`} element={<Details key={`/player${player.id}`} player={playerDetail}></Details>}/>

                    </Routes>
                </button>
                
            </tr>
        </>
    )
}