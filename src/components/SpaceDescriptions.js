import React from 'react';

function SpaceDescriptions(props) {
    return (
        <div>
            <p>{props.description}</p>
            <p>copyright: {props.copyright}</p>
        </div>
    )
}

export default SpaceDescriptions;