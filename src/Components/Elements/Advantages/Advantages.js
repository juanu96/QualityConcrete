import React, { useState, useContext } from 'react'
import { Store } from '../../../App';
import './Advantages.css'

export default function Advantages(props) {
  const store = useContext(Store);
  const [itemActiveAdvantage, setItemActiveAdvantage] = useState('')
  const setData = (item, index) => {
    setItemActiveAdvantage(index)
    store.setDadvantages(item)
  }
  return (
    <div className='AdvantagesContent'>
      {
        props.data ? props.data.map((item, index) => {
          if (index === 0 && itemActiveAdvantage === '') {
            setData(item, index)
          }
          return (
            <div key={index} onClick={() => setData(item, index)} className={`${itemActiveAdvantage === index ? 'AdvantagesItemActive' : null} AdvantagesItem`}>
              <div className='AdvantagesItemTitle'>{item.title}</div>
              <div className='AdvantagesItemText'>{item.content}</div>
            </div>
          )
        }) : null
      }
    </div>
  )
}
