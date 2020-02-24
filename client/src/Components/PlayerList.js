import React from 'react';
import PlayerCard from './PlayerCard';
import styled from 'styled-components';

const ListStyle = styled.div`
display: flex;
flex-direction: row;
justify-content: space-between;
flex-wrap: wrap;
align-items: flex-start;
align-content: flex-start
width: 90%;
margin-left: 10%;
`;

const PlayerList = props => {
    return (
        <ListStyle data-testid="player-list">
            {props.players.map(player =>(
                <PlayerCard key={player.id} player={player}/>
            ))}
        </ListStyle>
    )
}

export default PlayerList;