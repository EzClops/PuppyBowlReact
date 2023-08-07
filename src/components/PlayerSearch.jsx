import { useState } from "react"
import React from "react"
// import TextField from "@mui/material/TextField";


export default function PlayerSearch({ playerList, setPlayerList }){
    const [searchInput, setSearchInput] = useState("");

    const handleChange = (e) => {
        e.preventDefault();
        setSearchInput(e.target.value.toLowerCase());
    }
        playerList.filter(playerName => {
            return playerName.name.toLowerCase().includes(searchInput.toLocaleLowerCase());

        })
        setPlayerList(playerList);
    

    return(
        <>
            {/* <TextField> */}
                Search Here: <input type="search" value={searchInput} onChange={handleChange}/>
            {/* </TextField> */}
        </>
    )
}