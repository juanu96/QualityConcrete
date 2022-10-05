import React, { useState, useContext } from 'react'
import { Store } from '../../../App';
import './CustomDesing.css'

export default function CustomDesing(props) {
  const store = useContext(Store);
  const [cardActive, setcardActive] = useState('')
  const [image, setImage] = useState('')

  const setData = (item, index) => {
    setImage(item.image.mediaItemUrl)
    setcardActive(index)
    store.setRcustomDesign(item)
  }

  return (
    <div className='contentCustomDesign'>
      <div className='listCustomDesign'>
        {
          props.data ? props.data.map((item, index) => {
            if (index === 0 && cardActive === '') {
              setData(item, index)
            }
            return (
              <div onClick={() => setData(item, index)} className={`${cardActive === index ? 'ActiveCustomDesign' : null} itemCustomDesign`} key={index}>
                <div className='imageCustomDesign'>
                  <img src={item.image.mediaItemUrl} alt={item.name} />
                </div>
                <div className='titleCustomDesign'>
                  {item.name}
                </div>
              </div>
            )
          }) : null
        }
      </div>
      <div className='itemSelectedCustomDesign'>
        {
          image ? <img src={image} alt={props.data[cardActive].name} /> : null
        }
        {
          image ? <h5 className='itemSelectedCustomDesignText'>{props.data[cardActive].name}</h5> : null
        }
      </div>
    </div>
  )
}
