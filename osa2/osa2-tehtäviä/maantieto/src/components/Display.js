import React from 'react'
import CountryList from './CountryList'
import CountryExpanded from './CountryExpanded'

const Display = ({maxRows, search, countries, onClick, weather, loadWeather}) => {
    const filteredCountries = countries.filter(country => country.name
      .toLowerCase()
      .includes(search.toLowerCase()))

    console.log("Filtered results: ", filteredCountries.length)
  
    return search === '' ? null
          : filteredCountries.length === 0 ? (<p>No matches.</p>)
          : filteredCountries.length === 1 ? <CountryExpanded country={filteredCountries.shift()} weather={weather} loadWeather={loadWeather}/>
          : filteredCountries.length <= maxRows ? <CountryList countries={filteredCountries} onClick={onClick}/>
          : (<p>Too many matches, specify another filter.</p>)  
}

export default Display