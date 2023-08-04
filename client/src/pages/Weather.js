import { useState } from 'react';


export default function Weather() {

    const [city, setCity] = useState("Unknown")

    function displayData(api) {
        const cityName = api.location.name;
        setCity(cityName);

    }

    fetch("http://api.weatherapi.com/v1/current.json?key=1dd34d02c3a94e5285903838230408&q=63109&aqi=no").then(function(response) {
        return response.json();
    }).then(function(response) {
        console.log(response)
        displayData(response)
    });


    return(
        <div className="weatherApp">
            <div id="city">{city}</div>
        </div>
    )
};