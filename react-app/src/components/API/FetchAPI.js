import React, { useState } from 'react'
import { useEffect } from 'react'
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';

// YOUTUBE EMBED FILE + YOUTUBE API IMPORTS
import "./styles.css";
import YoutubeEmbed from "./YoutubeEmbed";
import youtubesearchapi from 'youtube-search-api' 

// Function: FetchAPI
// Purpose: Declares three states (data,videos,hasInfo), 
// Return: page that prompts user input, onChange calls fetchData function, which triggers searchYoutube function,
// and displays information about vehicle and related YouTube videos after API responses received

const FetchAPI = () => {

// (data: array stores results from nhtsa.dot.gov/api)
    const [data, setData] = useState([])
// (videos: array stores results from youtubesearchapi)
    const [videos, setVideos] = useState([])
// (hasInfo: boolean switches to 'true' if youtubesearchapi results have been received)
    const [hasInfo, setHasInfo] = useState(null)

// useEffect calls searchYoutube function (only after data is non-empty) and passes 'data' param 
    useEffect(() => {
        if (data.length > 0) {
            console.log(data)
            searchYoutube(data)
        }
    }, [data]); 

// fetch function, called after input has been changed, sends query to nhtsa.dot.gov/api with user input,
// then stores response in data, otherwise logs error message
    const fetchData = e => {
        const query = e.target.value
        fetch(`https://vpic.nhtsa.dot.gov/api/vehicles/DecodeVinValuesExtended/${query}?format=json`)
            .then(response => {
                return response.json()
            })
            .then(result => {
                setData(result.Results)
            })
            .catch(err =>{
                console.log(err)
            })
    }

// sends query to youtubesearchapi using fields from data object parameter,
// stores response in videos state, switches hasInfo boolean to true
    async function searchYoutube(data) {
        const searchString = `${data[0].Make} ${data[0].Model} ${data[0].ModelYear} ${data[0].BodyClass}&origin=https://localhost:3000`
        const videos = await youtubesearchapi.GetListByKeyword(searchString,false,3,[{type:"video"}])
        setVideos(videos)
        setHasInfo(true)
        console.log('youtube result')
        console.log(videos.items)
    }

    return (
        <div>
            <h1>Enter VIN Number</h1>
            <input onChange={fetchData} label="Search VIN"/>
            {data.length > 0 && (
                <ul>
                    {data.map(info => (
                        <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
                            <ListItem> 
                                <ListItemText primary="Year" secondary={info.ModelYear}> </ListItemText> 
                            </ListItem>
                            <ListItem>
                                <ListItemText primary="Make" secondary={info.Make}> </ListItemText> 
                            </ListItem>
                            <ListItem>
                                <ListItemText primary="Model" secondary={info.Model}> </ListItemText> 
                            </ListItem>
                            <ListItem>
                                <ListItemText primary="Body Style" secondary={info.BodyClass}> </ListItemText> 
                            </ListItem>
                            <ListItem>
                                <ListItemText primary="Vehicle Type" secondary={info.VehicleType}> </ListItemText> 
                            </ListItem>
                            <ListItem>
                                <ListItemText primary="Primary Fuel Type" secondary={info.FuelTypePrimary}> </ListItemText> 
                            </ListItem>
                            <ListItem>
                                <ListItemText primary="Fuel Injection Type" secondary={info.FuelInjectionType}> </ListItemText> 
                            </ListItem>
                            <ListItem>
                                <ListItemText primary="Brake System Type" secondary={info.BrakeSystemType}> </ListItemText> 
                            </ListItem>
                            <ListItem>
                                <ListItemText primary="Drive Type" secondary={info.DriveType}> </ListItemText> 
                            </ListItem>
                            <ListItem>
                                <ListItemText primary="Maximum Weight Rating" secondary={info.GVWR}> </ListItemText> 
                            </ListItem>
                        </List> 
                    ))}
                </ul>
            )}
            
            {hasInfo && ( 
                <YoutubeEmbed embedId={videos.items[0].id} />
            )}
            {hasInfo && ( 
                <YoutubeEmbed embedId={videos.items[1].id} />
            )}
            {hasInfo && ( 
                <YoutubeEmbed embedId={videos.items[2].id} />
            )}
            
        </div>
        
    )

}


export default FetchAPI;