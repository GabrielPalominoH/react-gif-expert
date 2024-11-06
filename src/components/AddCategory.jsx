import React, { useState } from 'react'

export const AddCategory = ({onNewCategory}) => {

  const [inputValue, setinputValue] = useState('')

  const onInputValue = ({target}) =>{
    setinputValue(target.value);
  }

  const onSubmit = (event) =>{
    event.preventDefault();
    if(inputValue.trim().length <= 1) return;
    onNewCategory(inputValue.trim())
  }

  return (
    <form onSubmit={onSubmit}>
      <input
      type='text'
      placeholder='Buscar Gif'
      value={inputValue}
      onChange={onInputValue}/>
    </form>
  )
}
