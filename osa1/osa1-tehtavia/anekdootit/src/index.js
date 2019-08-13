import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Button = ({ onClick, text }) => (
    <button onClick={onClick}>
      {text}
    </button>
  )

const Header = (props) => <div><h2>{props.text}</h2></div>

const Display = (props) => <div><p>{props.text}</p></div>

const Votes = (props) => <div><p>has {props.text} votes</p></div>

const App = (props) => {
  const [selected, setSelected] = useState(0)
  const [points, setPoints] = useState([0, 0, 0, 0, 0, 0])

  console.log('selected ', selected)
  console.log('poinst ', points)

  const handlePoints = () => {
    console.log('voting for ', selected)
    const copy = [...points]
    copy[selected] += 1
    setPoints(copy)
    console.log('copy ', copy)
  }

  return (
    <div>
      <Header text="Anecdote of random"/>
      <Display text={props.anecdotes[selected]}/>
      <Votes text={points[selected]}/>
      <Button onClick={handlePoints} text="vote"/>
      <Button onClick={() => setSelected(Math.floor(Math.random() * anecdotes.length))} text="random anecdote"/>
      <Header text="Anecdote with the most votes"/>
      <Display text={anecdotes[points.indexOf(Math.max.apply(Math, points))]}/>
      <Votes text={points[points.indexOf(Math.max.apply(Math, points))]}/>
    </div>
  )
}

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

ReactDOM.render(
  <App anecdotes={anecdotes} />,
  document.getElementById('root')
)