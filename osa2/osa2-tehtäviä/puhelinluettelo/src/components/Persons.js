import React from 'react';

const Persons = ({ persons, search }) => {
  
    const searchResults = search===''
          ? persons
          : persons.filter(person => person.name.toLowerCase().includes(search.toLowerCase()))
    
    const returnedPersons = () => (
      searchResults.map(person => <tr key={person.name}>
                                    <td>{person.name}</td>
                                    <td>{person.number}</td>
                                  </tr>
                    )
    )
    
    return (
      <table>
        <tbody>
          {returnedPersons()}
        </tbody>
      </table>
      )
}

export default Persons