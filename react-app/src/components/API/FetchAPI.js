import React, { useState } from 'react'
import { useEffect } from 'react'
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';

// YOUTUBE IMPORTS
import "./styles.css";
import YoutubeEmbed from "./YoutubeEmbed";

// // GOOGLE API LINES
// import google from 'googlethis'; 
// MENTION CORS CHROME EXTENSION
// END OF GOOGLE API LINES


// const youtubesearchapi = require("youtube-search-api");
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

    // useEffect(() => {
    //     if (videos.items.length > 0) {
    //         console.log('VIDEOS useEffect called')
    //         console.log(videos)
    //         // YoutubeEmbed(videos.items[0].id)
    //     }
    // }, [videos]); 
    // // const url = 'https://vpic.nhtsa.dot.gov/api/vehicles/DecodeVinValuesExtended/1FTFW1ET7CFC19542?format=json'

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
        // const searchString = `${data[0].Make} ${data[0].Model} ${data[0].ModelYear} ${data[0].BodyClass}`
        const searchString = `${data[0].Make} ${data[0].Model} ${data[0].ModelYear} ${data[0].BodyClass}&origin=https://localhost:3000`
        const videos = await youtubesearchapi.GetListByKeyword(searchString,false,3,[{type:"video"}])
        setVideos(videos)
        setHasInfo(true)
        console.log('youtube result')
        console.log(videos.items)
        console.log(videos.items[0].id);
        // YoutubeEmbed(videos.items[0].id)
        // <YoutubeEmbed embedId={videos.items[0].id} />
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
                        // <li key={info.Make}>{info.Make}</li>
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


    // useEffect( () => {
    //   async function fetchInfo(){
    //       const response = await fetch(url)
    //       const responseJson = await response.json();
    //       setData(responseJson.Results);
    //   }
    //   fetchInfo();
    // }, []);


    // Info is basically data.Results[0]//
    // Need to do button function, this just displays the data.
    // to use button, I think you have to do button onClick={example}>text...</button>
    
//     const getInfo = data.map((info) => {
//       return(
//         <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
//         <ListItem>
//             <ListItemText primary="Year" secondary={info.ModelYear}> </ListItemText>
//         </ListItem>
//         <ListItem>
//             { <ListItemText primary="Make" secondary={info.Make}> </ListItemText> }
//         </ListItem>
//         <ListItem>
//             {<ListItemText primary="Model" secondary={info.Model}> </ListItemText> }
//         </ListItem>
//         <ListItem>
//             { <ListItemText primary="Body Style" secondary={info.BodyClass}> </ListItemText> }
//         </ListItem>
//         <ListItem>
//             { <ListItemText primary="Vehicle Type" secondary={info.VehicleType}> </ListItemText> }
//         </ListItem>
//         <ListItem>
//             { <ListItemText primary="Primary Fuel Type" secondary={info.FuelTypePrimary}> </ListItemText> }
//         </ListItem>
//         <ListItem>
//             { <ListItemText primary="Fuel Injection Type" secondary={info.FuelInjectionType}> </ListItemText> }
//         </ListItem>
//         <ListItem>
//             {<ListItemText primary="Brake System Type" secondary={info.BrakeSystemType}> </ListItemText> }
//         </ListItem>
//         <ListItem>
//             { <ListItemText primary="Drive Type" secondary={info.DriveType}> </ListItemText> }
//         </ListItem>
//         <ListItem>
//             { <ListItemText primary="Maximum Weight Rating" secondary={info.GVWR}> </ListItemText> }
//         </ListItem>
//     </List> 
//       )
//     })

//     return(
//       <>
//       <div>
//         {getInfo}
//         {/* My API <br />
//         <button onClick={getInfo}>Fetch API</button>
//         <br /> */}
//       </div>
//       </>
      

//       // )}
//       // {data.map(info => <div>{info.Make}</div>)}
//       // {data.map(info => <div>{info.Model}</div>)}
//       // {data.map(info => <div>{info.BodyClass}</div>)}
//       // {data.map(info => <div>{info.VehicleType}</div>)}
//       // {data.map(info => <div>{info.FuelTypePrimary}</div>)}
//       // {data.map(info => <div>{info.FuelInjectionType}</div>)}
//       // {data.map(info => <div>{info.BrakeSystemType}</div>)}
//       // {data.map(info => <div>{info.DriveType}</div>)}
//       // {data.map(info => <div>{info.GVWR}</div>)}
//       // </div>
//     )

 
// }

export default FetchAPI;