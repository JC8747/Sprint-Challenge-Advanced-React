import React from 'react';
import PlayerCard from './PlayerCard';
import styled from 'styled-components';

const ListStyle = styled.div`
flex-direction: column;
width: 80%;
margin-left: 10%;
`;

const PlayerList = props => {
    return (
        <ListStyle>
            {props.players.map(player =>(
                <PlayerCard key={player.id} player={player}/>
            ))}
        </ListStyle>
    )
}

export default PlayerList;