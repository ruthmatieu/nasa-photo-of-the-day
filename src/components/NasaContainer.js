import React, { useState, useEffect } from 'react';
// import styled from 'styled-components';

import Header from './Header';
import SpaceImages from './SpaceImages';
import SpaceDescriptions from './SpaceDescriptions';
import DateContainer from './DateContainer';
import Footer from './Footer';

import axios from "axios";
function NasaContainer() {

    function currentDate() {
        var today = new Date();
        var dd = String(today.getDate()).padStart(2, '0');
        var mm = String(today.getMonth() + 1).padStart(2, '0'); 
        var yyyy = today.getFullYear();

        return today = yyyy + '-' + mm + '-' + dd;

    }

    const [space, setSpace] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

  

    // useEffect(() => {
    //     axios
    //     //https://epic.gsfc.nasa.gov/api/images.php
    //     //https://api.nasa.gov/planetary/apod?api_key=yZDxIiPvOfjGaoMRqCFCcqfAumlcNCc2U40gjgPW
    //     //https://eonet.sci.gsfc.nasa.gov/api/v2.1/events
    //         .get('https://api.nasa.gov/planetary/apod?api_key=yZDxIiPvOfjGaoMRqCFCcqfAumlcNCc2U40gjgPW&date=2012-03-14')
    //         .then((res) => {
    //             console.log('response: ', res);
    //             setSpace(res.data);
    //             setIsLoading(false);
    //             console.log(res.data)
    //         })
    //         .catch((err) => {
    //             console.log('Error: ', err);
    //         });
            
    // },[]);
    useEffect(() => {
        axios.get('https://api.nasa.gov/planetary/apod?api_key=yZDxIiPvOfjGaoMRqCFCcqfAumlcNCc2U40gjgPW&date=2012-03-14')
        .then((res) => {
            console.log(res.data)
        })
        .catch((err) => {
            console.og('Error:' , err)
        })
    },[])
    
    function LoadingCheck(){
        if(isLoading){
            return <h1>Loading...</h1>
        } else {
            return (
                <div>
                    {console.log(currentDate())}
                    <Header/>
                    
                    <DateContainer 
                        
                    />

                    <SpaceImages 
                        
                    />

                    <SpaceDescriptions 
                        
                        
                    /> 

                  
                        
                </div>
            )
        }
    }
    return (
        <div>
            {LoadingCheck()}
        </div>
    )
}

export default NasaContainer;