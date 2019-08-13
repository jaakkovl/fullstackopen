/* import React from 'react'
import ReactDOM from 'react-dom' */

import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Display = ({ counter }) => <div>{counter}</div>

const Button = ({ onClick, text }) => (
  <button onClick={Click}>
    {text}
  </button>
)

const App = (props) => {
  const [ counter, setCounter] = useState(0)
  const setToValue = (value) => setCounter(value)

  return (
    <div>
      <Display counter={counter}/>
      <Button onClick={() => setToValue(counter + 1)} text="plus"/>
      <Button onClick={() => setToValue(0)} text="zero"/>
      <Button onClick={() => setToValue(counter - 1)} text="minus"/>
    </div>
  )
}

ReactDOM.render(
  <App />, 
  document.getElementById('root')
)

/* const Hello = (props) => {
    return (
      <div>
        <p>Hello {props.name}, you are {props.age} years old.</p>
      </div>
    )
  }
  
  const App = () => {
      const nimi = 'Pekka'
      const ika = 20
    return (
      <div>
        <h1>Greetings</h1>
        <Hello name={nimi} age={ika}/>
        <Hello name="Jake" age={20 + 9}/>
      </div>
    )
  } */ 

 
  

/* ReactDOM.render(<App />, document.getElementById('root')) */