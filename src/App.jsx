import React, { useState } from 'react'
import { AddCategory, GifGrid } from './components'

export const App = () => {
  const [categories, setCategories] = useState(['One punch man'])

  const onAddCategory = (newCategorie) => {
    if (categories.includes(newCategorie)) return

    setCategories([newCategorie, ...categories])
  }
  return (
    <React.Fragment>
      {/* titulo */}
      <h1>GifExperApp</h1>
      {/* input */}
      {/* <AddCategory setCategories={setCategories} /> */}
      <AddCategory onNewCategory={onAddCategory} />
      {/* <button onClick={onAddCategory}>Agregar</button> */}

      {/* listado de gifs */}
      <ol>
        {categories.map((category) => (
          <GifGrid key={category} category={category} />
        ))}
      </ol>
    </React.Fragment>
  )
}
