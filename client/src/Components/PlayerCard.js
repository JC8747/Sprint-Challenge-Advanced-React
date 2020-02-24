import React from 'react';
// import styled from "styled-components";

// const PlayerStyle = styled.div`
//   background-color: #8f95a3;
//   margin: 3% 10% 3% 10%;
//   padding: 2% 0 2% 0;
//   p {
//     color: #f2f5e3;
//   }
// `;

const PlayerCard = props => {
    return(
        <div>
            <h2>{props.player.name}</h2>
            <p>Country: {props.player.contry}</p>
            <p>Searches: {props.player.searches}</p>
        </div>
    )
}
export default PlayerCard;