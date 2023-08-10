import { useState, useEffect } from 'react';
import "./Weather.css";


export default function Weather() {

    const [error, setError] = useState("")

    let input;
    const [zipCode, setZipCode] = useState("63109");
    useEffect(() => {
            input = document.getElementById("userInput");
    })

    const [city, setCity] = useState("Unknown");
    const [region, setRegion] = useState("Unknown");
    const [country, setCountry] = useState("Unknown");

    const [temperature, setTemperature] = useState("Unknown");
    const [condition, setCondition] = useState("Unknown");
    const [icon, setIcon] = useState("Unknown");

    function displayCity(api) {
        const cityName = api.location.name;
        const regionName = api.location.region;
        const countryName = api.location.country;
        setCity(cityName);
        setRegion(regionName);
        setCountry(countryName);
    };

    function displayWeather(api) {
        const temp = api.current.temp_f;
        const conditionType = api.current.condition.text;
        const weatherIcon = api.current.condition.icon;
        setTemperature(temp);
        setCondition(conditionType);
        setIcon(weatherIcon);
    };


    fetch(`http://api.weatherapi.com/v1/current.json?key=1dd34d02c3a94e5285903838230408&q=${zipCode}&aqi=no`).then(response => {
        if(response.ok) return response.json()
        else { throw new Error;}
    }).then(response => {
        setError("")
        displayCity(response)
        displayWeather(response)
    }).catch(() => {
        setError("That is not a valid location.")
    });

    return(
        <div className="weatherApp">
            <input type="text" maxlenght="5" id="userInput"></input>
            <button onClick={() => setZipCode(input.value)}>Submit</button>
            <div id="error">{error}</div>
            <div className="location">
                <div id="city">{city}</div>
                <div id="region">{region}</div>
                <div id="country">{country}</div>
            </div>
            <div className="weather">
                <div id="temperature">{temperature} <span>&#8457;</span></div>
                <div id="condition">{condition}</div>
                <img src={icon}/>
            </div>
        </div>
    )
};