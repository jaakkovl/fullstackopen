import React, { useState } from 'react'
import PersonForm from './components/Forms';
import Persons from './components/Persons';

const App = () => {
  const [ persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456' },
    { name: 'Ada Lovelace', number: '39-44-5323523' },
    { name: 'Dan Abramov', number: '12-43-234345' },
    { name: 'Mary Poppendieck', number: '39-23-6423122' }
  ])
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState('')
  const [ newSearch, setNewSearch ] = useState('')


  const addContact = (event) => {
    event.preventDefault()

    const contactObject = {
      name: newName,
      number: newNumber
    }
    
    const nameExists = persons.findIndex(person => person.name === newName) > -1

      if(nameExists) { 
        alert(`${newName} is already added to phonebook`) 
     } else {
      setPersons(persons.concat(contactObject))
      setNewName('')
      setNewNumber('')
    }
  }

  const handleNameChange = (event) => {
    setNewName(event.target.value) 
  }

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value) 
  }

  const handleSearch = (event) => {
    setNewSearch(event.target.value)
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form >
        <div> search: <input value={newSearch} onChange={handleSearch}/></div>
      </form>
      <h2>Add new person</h2>
      <PersonForm onSubmit={addContact} name={newName} nameChange={handleNameChange} number={newNumber} numberChange={handleNumberChange}/>
      <h2>Numbers</h2>
      <Persons persons={persons} search={newSearch}/>
    </div>
  )

}

export default App
