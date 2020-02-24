import React from 'react';
import styled from "styled-components";

const CardStyle = styled.div`
  background-color: #550a46;
  padding: 10px;
  margin: 1%;
  h2{
    color: #9aceff;
    font-weight: 600;
  }
  p {
    color: #4a69bb;
  }
`;

const PlayerCard = props => {
    return(
        <CardStyle>
            <h2>{props.player.name}</h2>
            <p>Country: {props.player.country}</p>
            <p>Searches: {props.player.searches}</p>
        </CardStyle>
    )
}
export default PlayerCard;