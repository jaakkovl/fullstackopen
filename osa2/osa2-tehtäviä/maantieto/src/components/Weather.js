import React, { useEffect} from 'react'
import axios from 'axios'

const Weather = ({country, weather, loadWeather}) => {

    useEffect(() => {
         axios
           .get(`http://api.apixu.com/v1/current.json?key=e49c81603a8e451e837204202192308&q=${country}`)
           .then(response => {
             loadWeather(response.data)
           })
       }, [])
      console.log("Weather saa: ", weather)

    if(weather === '') {
        return ( console.log("saa not loaded yet to weather") ||
            <div>
                <p>Loading...</p>
            </div>
        )
    } else {
       return ( console.log("setting saa") ||
            <div>
                <h3>Weather in {weather.location.name}</h3>
                <p><b>temperature:</b> {weather.current.temp_c} {'\u00B0'}C</p>
                 <div><img src={weather.current.condition.icon}/></div>
                <p><b>wind:</b> {weather.current.wind_kph} kph direction {weather.current.wind_dir}</p>
            </div>
        )
    }
}

export default Weather