import React, { useState, useEffect } from 'react'
import Display from './components/Display'
import axios from 'axios'

const App = () => {
  const [search, setSearch] = useState('')
  const [countries, setCountries] = useState([])
  const [weather, setWeather] = useState('')

  useEffect(() => {
    axios
      .get('https://restcountries.eu/rest/v2/all')
      .then(response => {
        setCountries(response.data)
        console.log(response)
      })
  }, [])

  const handleSearchChange = (event) => {
     console.log("Search value: " ,event.target.value)
     setSearch(event.target.value)
  }

  const handleButtonFilter = (event) => {
        console.log("handleSetCountries event:", event.target.attributes.country.value)
        setSearch(event.target.attributes.country.value)
 }

 const handleWeatherLoad = (event) => {
       console.log("Loading weather", event)
       setWeather(event)

 }

  return (
    <div>
        <div>Find countries: <input value={search} onChange={handleSearchChange}/></div>
        <Display maxRows={10}
                 search={search} 
                 countries={countries} 
                 onClick={handleButtonFilter} 
                 weather={weather}
                 loadWeather={handleWeatherLoad}/>
    </div>
  )
}

export default App 
