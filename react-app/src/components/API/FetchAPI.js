import React, { useState} from 'react'
// import {useEffect} from 'react'
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';

function FetchAPI() {

    const [data, setData] = useState([])
    const url = 'https://vpic.nhtsa.dot.gov/api/vehicles/DecodeVinValuesExtended/1FTFW1ET7CFC19542?format=json'
    const apiGet = () => {
    // file might already be json
        fetch(url)
            .then((response) => response.json())
            .then((json) => {
                console.log(json);
                setData(json);
                // setData({data: data.Results});
            });
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

            <pre>{JSON.stringify(data.Results[0].Make,null,2)}</pre>

            <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
                <ListItem>
                    <ListItemText primary="Year" secondary={JSON.stringify(data.Results[0].ModelYear,null,2)}> </ListItemText>
                </ListItem>
                <ListItem>
                    <ListItemText primary="Make" secondary={JSON.stringify(data.Results[0].Make,null,2)}> </ListItemText>
                </ListItem>
            </List>
            {/* <pre>{JSON.stringify(data.Results[0].Make,null,2)}</pre> */}
            
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