import React from 'react'

const CountryList = ({countries, onClick}) => {
    console.log('Countrylist onclick: ', onClick)
    console.log("CountryList: ", countries.map(country => country.name))
  
    const countriesToRender = () =>  countries.map(country => <tr key={country.name}>
                                                                  <td>{country.name} 
                                                                    <button country={country.name} onClick={onClick}>show</button>
                                                                  </td>
                                                              </tr>)
    console.log("Countries to table: ", countriesToRender())
  
    return (
      <table>
        <tbody>
            {countriesToRender()}
        </tbody>
      </table>
    )
  }

  export default CountryList