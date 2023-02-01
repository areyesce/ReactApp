import React, { useState} from 'react'
// import {useEffect} from 'react'
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';

// GOOGLE API LINES

// END OF GOOGLE API LINES


async function FetchAPI() {

    const [data, setData] = useState([])
    const url = 'https://vpic.nhtsa.dot.gov/api/vehicles/DecodeVinValuesExtended/1FTFW1ET7CFC19542?format=json'
    const apiGet = async () => {
        const response = await fetch(url)
        setData(response.json())
        console.log(response)
        return await response.json()
    // file might already be json
        // await fetch(url)
        //     .then((response) => response.json())
        //     .then((json) => {
        //         console.log(json);
        //         setData(json);
        //         // setData({data: data.Results});
        //     });
    };
    // AUTOMATICALY CLICKS FETCH API BUTTON
    // useEffect(() => {
    //     apiGet();
    // }, []);

    return (
        
        <div>
            My API <br />
            <button onClick={apiGet}>Fetch API</button>
            <br />
        
            <pre>{JSON.stringify(data.Results[0],null,2)}</pre>
            {/* CONSIDER MAKING THIS A TABLE */}
            <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
                <ListItem>
                    <ListItemText primary="Year" secondary={JSON.stringify(data.Results[0].ModelYear,null,2)}> </ListItemText>
                </ListItem>
                <ListItem>
                    {/* <ListItemText primary="Make" secondary={JSON.stringify(data.Results[0].Make,null,2)}> </ListItemText> */}
                </ListItem>
                <ListItem>
                    {/* <ListItemText primary="Model" secondary={JSON.stringify(data.Results[0].Model,null,2)}> </ListItemText> */}
                </ListItem>
                <ListItem>
                    {/* <ListItemText primary="Body Style" secondary={JSON.stringify(data.Results[0].BodyClass,null,2)}> </ListItemText> */}
                </ListItem>
                {/* SIX OTHER VEHICLE FEATURES */}
                <ListItem>
                    {/* <ListItemText primary="Vehicle Type" secondary={JSON.stringify(data.Results[0].VehicleType,null,2)}> </ListItemText> */}
                </ListItem>
                <ListItem>
                    {/* <ListItemText primary="Primary Fuel Type" secondary={JSON.stringify(data.Results[0].FuelTypePrimary,null,2)}> </ListItemText> */}
                </ListItem>
                <ListItem>
                    {/* <ListItemText primary="Fuel Injection Type" secondary={JSON.stringify(data.Results[0].FuelInjectionType,null,2)}> </ListItemText> */}
                </ListItem>
                <ListItem>
                    {/* <ListItemText primary="Brake System Type" secondary={JSON.stringify(data.Results[0].BrakeSystemType,null,2)}> </ListItemText> */}
                </ListItem>
                <ListItem>
                    {/* <ListItemText primary="Drive Type" secondary={JSON.stringify(data.Results[0].DriveType,null,2)}> </ListItemText> */}
                </ListItem>
                <ListItem>
                    {/* <ListItemText primary="Maximum Weight Rating" secondary={JSON.stringify(data.Results[0].GVWR,null,2)}> </ListItemText> */}
                </ListItem>
                
                
            </List> 

            {/* <pre>{JSON.stringify(data.Results[0].Make,null,2)}</pre>
            
            {/* <div>
                <ul>
                    {data.Results.map(item =>
                        <li>{item}</li>
                        )}
                </ul>
            </div> */}
        </div>
    );
}

export default FetchAPI;