import React, { useEffect, useState } from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs.js'
import { GifGridItem } from './GifGridItem.jsx'
export const GifGrid = (props) => {
  const { images, isLoading } = useFetchGifs(props.category)

  return (
    <React.Fragment>
      <h3>{props.category}</h3>

      {isLoading && <h2>Cargando...</h2>}

      <div className="card-grid">
        {images.map((img) => (
          <GifGridItem key={img.id} {...img} />
        ))}
      </div>
    </React.Fragment>
  )
}
