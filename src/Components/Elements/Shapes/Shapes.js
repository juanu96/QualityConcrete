import React, { useState, useContext } from 'react'
import { Store } from '../../../App';
import './Shapes.css'

export default function Shapes(props) {
  const [activeShapes, setActiveShapes] = useState('')
  const store = useContext(Store);

  const setData = (item, index) => {
    setActiveShapes(index)
    if (store.CurrentService === 'PATIO') {
      store.setPshapes(item)
    }
  }

  return (
    <div className='itemsshape'>
      {
        props.data ?
          props.data.map((item, index) => {
            if (index === 0 && activeShapes === '') {
              setData(item, index)
            }
            return (
              <div key={index} onClick={() => setData(item, index)} className={activeShapes === index ? 'activeshape carditemshape' : 'carditemshape'}>
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
