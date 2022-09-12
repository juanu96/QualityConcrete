import React, { useState } from 'react'
import './Advantages.css'

export default function Advantages(props) {
  const [itemActiveAdvantage, setItemActiveAdvantage] = useState('')
  return (
    <div className='AdvantagesContent'>
      {
        props.data ? props.data.map((item, index) => {
          if (index === 0 && itemActiveAdvantage === '') {
            setItemActiveAdvantage(index)
          }
          return (
            <div key={index} onClick={() => setItemActiveAdvantage(index)} className={`${itemActiveAdvantage === index ? 'AdvantagesItemActive' : null} AdvantagesItem`}>
              <div className='AdvantagesItemTitle'>{item.title}</div>
              <div className='AdvantagesItemText'>{item.content}</div>
            </div>
          )
        }) : null
      }
    </div>
  )
}
