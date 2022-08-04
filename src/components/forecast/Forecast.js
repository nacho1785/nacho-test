import React, { useState } from 'react';
import Conditions from '../Conditions/Conditions';
import classes from './Forecast.module.css';

const Forecast = () => {
    let [city, setCity] = useState('');
    let [unit, setUnit] = useState('metric');
    let [responseObj, setResponseObj] = useState({});
    let [error, setError] = useState(false);
    let [loading, setLoading] = useState(false);
    const uriEncodedCity = encodeURIComponent(city);

   function getForecast(e) {
    e.preventDefault();
    if (city.length === 0) {
        return setError(true);
    }
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '644b67287emshc62c3b6f2e0c2e1p1a8861jsna45eab90fdca',
            'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
        }
    };
    
    fetch('https://weatherapi-com.p.rapidapi.com/ip.json?q=auto%3Aip', options)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));
   return (
    <div>
    <h2>Find Current Weather Conditions</h2>

    <form onSubmit={getForecast}>
                <input
                    type="text"
                    placeholder="Enter City"
                    maxLength="50"
                    className={classes.textInput}
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    />
                <label>
                    <input
                        type="radio"
                        name="units"
                        checked={unit === "imperial"}
                        value="imperial"
                        onChange={(e) => setUnit(e.target.value)}
                        className={classes.Radio}
                        />
                    Fahrenheit
                </label>
                <label>
                    <input
                        type="radio"
                        name="units"
                        checked={unit === "metric"}
                        value="metric"
                        onChange={(e) => setUnit(e.target.value)}
                        className={classes.Radio}
                        />
                    Celsius
                </label>
                <button className={classes.Button} type="submit">Get Forecast</button>
            </form>
    <Conditions
               responseObj={responseObj}
               error={error}
               loading={loading}
               />
    </div>
   )
}
export default Forecast;