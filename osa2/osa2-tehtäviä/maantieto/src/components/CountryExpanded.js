import React from 'react'
import Weather from './Weather'

const Languages = ({header, country}) => {
    const lines = () => country.languages.map(language => <li key={language.name}>{language.name}</li>)
  
    return(
        <div>
          <h3>{header}</h3>
            <ul>
              {lines()}
            </ul>
        </div>
    )
  }
  
  
  const CountryExpanded = ({country, weather, loadWeather}) => {
    console.log("CountryExpanded: ", country)
    //console.log("CountryExpanded: ", country.map(country => country))
    return (
      <div>
          <h2>{country.name}</h2>
          <table>
            <tbody>
              <tr><td>capital</td><td>{country.capital}</td></tr>
              <tr><td>population</td><td>{country.population}</td></tr>
            </tbody>
          </table>
          {/* <p>local time {weather.location.localtime}</p> */}
          <Languages header={'languages '} country={country}/>
          <div>
            <img src={country.flag} alt={country.name} height={"100"}></img>
          </div>
          <Weather country={country.name} weather={weather} loadWeather={loadWeather} />
      </div>
    )
  }

  export default CountryExpanded