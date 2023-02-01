import React, { useState} from 'react'
// import {useEffect} from 'react'

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