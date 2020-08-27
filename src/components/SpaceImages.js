import React from 'react';
import styled from 'styled-components';

const StyledImage = styled.img`
    width: 500px;
    border: 10px solid #702459;
    border-radius: 30px;
`;

function SpaceImages(props) {
    return (
        <div>
            <h3>{props.title}</h3>
            <StyledImage src={props.image} alt={props.title}/>
            <p>Date: {props.date}</p>
        </div>
    )
}

export default SpaceImages;