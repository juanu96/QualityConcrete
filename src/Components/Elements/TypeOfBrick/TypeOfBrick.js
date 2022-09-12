import React, { useState } from 'react'
import './TypeOfBrick.css'

export default function TypeOfBrick(props) {
  const [activeBrick, setActiveBrick] = useState('')
  return (
    <div className='TypeOfBrick-content' data-aos="fade-up" data-aos-duration={1000} >
      {
        props.data ? props.data.map((item, index) => {
          if (index === 0 && activeBrick === '') {
            setActiveBrick(index)
          }
          return (
            <div key={index} onClick={() => setActiveBrick(index)} className={activeBrick === index ? 'activeTypeOfBrick TypeOfBrick-item' : 'TypeOfBrick-item'}>
              <div className='TypeOfBrick-item-image'>
                <img src={item.image.mediaItemUrl} alt={item.name} />
              </div>
              <div className='TypeOfBrick-item-name'>{item.name}</div>
            </div>
          )
        }) : null
      }
    </div>
  )
}
