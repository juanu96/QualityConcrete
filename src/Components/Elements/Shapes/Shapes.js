import React, { useState } from 'react'
import './Shapes.css'

export default function Shapes(props) {
  const [activeShapes, setActiveShapes] = useState('')
  return (
    <div className='itemsshape'>
      {
        props.data ?
          props.data.map((item, index) => {
            if (index === 0 && activeShapes === '') {
              setActiveShapes(index)
            }
            return (
              <div key={index} onClick={() => setActiveShapes(index)} className={activeShapes === index ? 'activeshape carditemshape' : 'carditemshape'}>
                <div className='imageitemshape'>
                  <img src={item.image.mediaItemUrl} alt={item.name} />
                </div>
                <div className='textitemshape'><h4>{item.name}</h4></div>
              </div>
            )
          }
          ) : null
      }
    </div>
  )
}
