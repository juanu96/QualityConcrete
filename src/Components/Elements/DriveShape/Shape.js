import React, { useState, useContext } from 'react'
import { Store } from '../../../App';
import './Shape.css'

export default function Shape(props) {
  const store = useContext(Store);
  const [cardActive, setcardActive] = useState('')
  const [image, setImage] = useState('')

  const setData = (item, index) => {
    setImage(item.image.mediaItemUrl)
    setcardActive(index)
    store.setDshapes(item)
  }

  return (
    <div className='contentDriveShape'>
      <div className='listDriveShape'>
        {
          props.data ? props.data.map((item, index) => {
            if (index === 0 && cardActive === '') {
              setData(item, index)
            }
            return (
              <div onClick={() => setData(item, index)} className={`${cardActive === index ? 'ActiveDriveShape' : null} itemDriveShape`} key={index}>
                <div className='imageDriveShape'>
                  <img src={item.image.mediaItemUrl} alt={item.name} />
                </div>
                <div className='titleDriveShape'>
                  {item.name}
                </div>
              </div>
            )
          }) : null
        }
      </div>
      <div className='itemSelectedDriveShape'>
        {
          image ? <img src={image} alt={props.data[cardActive].name} /> : null
        }
        {
          image ? <h5 className='itemSelectedDriveShapeText'>{props.data[cardActive].name}</h5> : null
        }
      </div>
    </div>
  )
}
