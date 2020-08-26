import React from 'react';

function SpaceImages(props) {
    return (
        <div>
            <h3>{props.title}</h3>
            <p>Date: {props.date}</p>
            <img src={props.image} alt={props.title}/>
        </div>
    )
}

export default SpaceImages;