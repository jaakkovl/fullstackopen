import React from 'react';

const Input = ({text, value, onChange}) => {
    return (
      <div> {text} <input value={value} onChange={onChange}/></div>
      )
  }
  
  const Button = ({type, text}) => {
    return <div><button type={type}>{text}</button></div>
  }
  
  const PersonForm = ({ onSubmit, name, nameChange, number, numberChange }) => {
      return (
          <form onSubmit={onSubmit}>
            <Input text="name:" value={name} onChange={nameChange}/>
            <Input text="number:" value={number} onChange={numberChange}/>
            <Button type="submit" text="add"/>
          </form>
      )
  }

  export default PersonForm