import React from 'react';
import styled from 'styled-components'

const Style = styled.div`
color: white;
text-shadow: 2px 2px 5px red;
`;

const Character = (props) => {
return(
    <Style>
       <p><b>Name:</b> {props.character.name}</p> 
          <p><b>Birth Year:</b> {props.character.birth_year}</p>
          <p><b>Gender:</b> {props.character.gender}</p>
          <p><b>Height:</b> {props.character.height}</p> 
    </Style>
)
};

export default Character;