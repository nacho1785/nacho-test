import React, {useState} from 'react';

const Forecast = () => {

    let [responseObj, setResponseObj] = useState({});
    function getForecast() {
        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': '644b67287emshc62c3b6f2e0c2e1p1a8861jsna45eab90fdca',
                'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
            }
        };
        
        fetch('https://weatherapi-com.p.rapidapi.com/search.json?q=auto%3Aip', options)
            .then(response => response.json())
            .then(response => {
                setResponseObj (response)
            })
    }

    return (
        <div>
            <h2>Find Current Weather Conditions</h2>
            <div>
                {JSON.stringify(responseObj)}
            </div>
            <button onClick={getForecast}>Get Forecast</button>
        </div>
    )
}

export default Forecast;