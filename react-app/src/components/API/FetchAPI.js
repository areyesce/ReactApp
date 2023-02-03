import React, { useState } from 'react'
import { useEffect } from 'react'
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';

// YOUTUBE IMPORTS
import "./styles.css";
import YoutubeEmbed from "./YoutubeEmbed";
import youtubesearchapi from 'youtube-search-api' 

const FetchAPI = () => {
    const [data, setData] = useState([])
    const [videos, setVideos] = useState([])
    const [hasInfo, setHasInfo] = useState(null)

    useEffect(() => {
        if (data.length > 0) {
            console.log('DATA useEffect called')
            console.log(data)
            searchYoutube(data)
        }
    }, [data]); 

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
    async function searchYoutube(data) {
        const searchString = `${data[0].Make} ${data[0].Model} ${data[0].ModelYear} ${data[0].BodyClass}&origin=https://localhost:3000`
        const videos = await youtubesearchapi.GetListByKeyword(searchString,false,3,[{type:"video"}])
        setVideos(videos)
        setHasInfo(true)
        console.log('youtube result')
        console.log(videos.items)
        console.log(videos.items[0].id);
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