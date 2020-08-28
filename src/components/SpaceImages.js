import React from 'react';
import styled from 'styled-components';

const StyledImage = styled.img`
    width: 650px;
    border: 10px solid #CBD5E0;
    border-radius: 30px;
`;

const HeadingThree = styled.h3`
  color: #D69E2E;
  font-family: 'Cinzel', serif;
  font-size: 35px;
`;

const DatePara = styled.p`
  color: #D69E2E;
  font-family: 'Cinzel', serif;
  font-size: 20px;
`;

const Date = styled.span`
  color: #718096;
  font-family: 'Alfa Slab One', cursive;
  font-size: 20px;
`;

function SpaceImages(props) {
    return (
        <div>
            <HeadingThree>{props.title}</HeadingThree>
            <DatePara>Showing image for: <Date>{props.date}</Date></DatePara>
            <StyledImage src={props.image} alt={props.title}/>
        </div>
    )
}

export default SpaceImages;