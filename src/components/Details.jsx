

export default function Details({ id, player }){
    // console.log(player);
    return(
        <div className={`${id}`}>
            <tr>
                <div className="attributes">
                <td>Name: {player.name}</td>
                <td>Breed: {player.breed}</td>
                <td>Status: {player.status}</td>
                <td>TeamID: {player.teamId === null ? 'no teamId' : player.teamId}</td>
                <td>Team: {player.team === null ? 'no team' : player.team}</td>
                </div>
            </tr>
        </div>
    )
}