import React, { useState } from 'react'

export const AddCategory = (props) => {
  const [inputValue, setinputValue] = useState('')
  const onInputChange = (e) => {
    setinputValue(e.target.value)
  }

  const onSubmit = (e) => {
    e.preventDefault()
    if (inputValue.trim().length <= 1) return // si tenemos mas de un caracter no hacemos nada
    // props.setCategories((state) => [inputValue, ...state])
    props.onNewCategory(inputValue.trim())
    setinputValue('')
  }
  return (
    <React.Fragment>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          placeholder="Buscar gifs"
          value={inputValue}
          onChange={onInputChange}
        />
      </form>
    </React.Fragment>
  )
}
