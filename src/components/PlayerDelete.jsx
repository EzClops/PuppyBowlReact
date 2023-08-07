import { useEffect, useState } from "react"


export default function PlayerDelete({ playerId }){
    // console.log(playerId);
    useEffect(() =>{
        async function deletePlayer(event){
            event.preventDefault();
            // fetch('https://fsa-puppy-bowl.herokuapp.com/api/2109-UNF-HY-WEB-PT/players', {
            //     method: 'DELETE',
            // });
            try {
                const response = await fetch(
                `https://fsa-puppy-bowl.herokuapp.com/api/2109-UNF-HY-WEB-PT/players/${playerId}`,
                {
                    method: 'DELETE',
                }
                );
                const result = await response.json();
                console.log(result);
        } catch (err) {
            console.error(err);
        }
    }
    deletePlayer();
    })
}