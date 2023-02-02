import React, { useState } from 'react'
// import { useEffect } from 'react'
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';

// // GOOGLE API LINES
// import google from 'googlethis'; 

// const options = {
//     page: 0, 
//     safe: false, // Safe Search
//     parse_ads: false, // If set to true sponsored results will be parsed
//     additional_params: { 
//       // add additional parameters here, see https://moz.com/blog/the-ultimate-guide-to-the-google-search-parameters and https://www.seoquake.com/blog/google-search-param/
//       hl: 'en' 
//     }
//   }
// END OF GOOGLE API LINES



const FetchAPI = () => {
    const [data, setData] = useState([])
    // const url = 'https://vpic.nhtsa.dot.gov/api/vehicles/DecodeVinValuesExtended/1FTFW1ET7CFC19542?format=json'

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
    // async function searchGoogle(data) {
    //     const searchString = data.Make.toString() + '+' + data.Model.toString() + '+' + data.ModelYear.toString() + '+' + data.BodyClass.toString()
    //     const googleResult = await google.search(searchString, options);
    //     console.log(googleResult);
    // }

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