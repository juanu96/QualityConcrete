import React, { useState, useContext } from 'react'
import { Store } from '../../../App';
import './TypeOfBrick.css'

export default function TypeOfBrick(props) {
  const store = useContext(Store);
  const [activeBrick, setActiveBrick] = useState('')
  const setData = (item, index) => {
    store.setRtypebrick(item)
    setActiveBrick(index)
  }

  return (
    <div className='TypeOfBrick-content' data-aos="fade-up" data-aos-duration={1000} >
      {
        props.data ? props.data.map((item, index) => {
          if (index === 0 && activeBrick === '') {
            setData(item, index)
          }
          return (
            <div key={index} onClick={() => setData(item, index)} className={activeBrick === index ? 'activeTypeOfBrick TypeOfBrick-item' : 'TypeOfBrick-item'}>
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
