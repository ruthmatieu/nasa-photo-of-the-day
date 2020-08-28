import React from 'react';
import styled from 'styled-components';

const Description = styled.p`
    width: 800px;
    margin: auto;
    line-height: 20px;
    margin-top: 50px;
    margin-bottom: 50px;
`;

function SpaceDescriptions(props) {

    return (
        <div>
            <Description>{props.description}</Description>  
        </div>
    )
}

export default SpaceDescriptions;