import React from 'react';
import styled from "styled-components";

const CardStyle = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
  margin-left: 10%;
  background-color: #550A46;
  p {
    color: #f2f5e3;
  }
`;

const PlayerCard = props => {
    return(
        <CardStyle>
            <h2>{props.player.name}</h2>
            <p>Country: {props.player.contry}</p>
            <p>Searches: {props.player.searches}</p>
        </CardStyle>
    )
}
export default PlayerCard;