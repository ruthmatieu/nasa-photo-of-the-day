import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

import SpaceImages from './SpaceImages';
import SpaceDescriptions from './SpaceDescriptions';
import Header from './Header';
import DateContainer from './DateContainer';

import axios from "axios";
function NasaContainer() {
    const [space, setSpace] = useState([]);

    useEffect(() => {
        axios
        //https://epic.gsfc.nasa.gov/api/images.php
        //https://api.nasa.gov/planetary/apod?api_key=yZDxIiPvOfjGaoMRqCFCcqfAumlcNCc2U40gjgPW
        //https://eonet.sci.gsfc.nasa.gov/api/v2.1/events
            .get('https://api.nasa.gov/planetary/apod?api_key=yZDxIiPvOfjGaoMRqCFCcqfAumlcNCc2U40gjgPW&date=2017-03-14')
            .then((res) => {
                console.log('response: ', res);
                setSpace(res.data);
            })
            .catch((err) => {
                console.log('Error: ', err);
            });
    }, []);
    
    return (
        <div>
            <Header/>
            <DateContainer image= {space.url}/>
            <SpaceImages 
                title = {space.title}
                date = {space.date}
                image = {space.url}
            />
            <SpaceDescriptions 
                description = {space.explanation}
                copyright = {space.copyright}
            /> 
        </div>
    )
}

export default NasaContainer;