import React from 'react';
import Dropdown from './Dropdown';

function SpaceImages(props) {
    return (
        <div>
            <Dropdown/>
            <h3>{props.title}</h3>
            <img src={props.image} alt={props.title}/>
            <p>Date: {props.date}</p>
        </div>
    )
}

export default SpaceImages;