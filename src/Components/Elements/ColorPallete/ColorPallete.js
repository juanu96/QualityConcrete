import React, { useState } from 'react'
import "./ColorPallete.css"

export default function ColorPallete(props) {
  const [itemActiveColor, setItemActiveColor] = useState('')
  const [itemActiveColorIndex, setItemActiveColorIndex] = useState('')
  
  let aosTime = 1000
  return (
    <div className='containerCollorPallete'>
      <div className='itemSelectShape' data-aos="fade-up" data-aos-duration={1000} >

        {
          props.data ?
            props.data.map((item, index) => {
              if (index === 0 && itemActiveColorIndex === '') {
                setItemActiveColorIndex(index)
                setItemActiveColor(item.item)

              }
              return (
                <div key={index} className={itemActiveColorIndex === index ? 'activeItemColorShape itemColorShape' : 'itemColorShape'}>
                  <div className='itemTextColorShape'>
                    {item.name}
                  </div>
                  <div onClick={() => {setItemActiveColorIndex(index); setItemActiveColor(item.item)}} className='itemButtonColorShape'>
                    SEE WATCHES
                  </div>
                </div>
              )
            }) : null
        }
      </div>
      <div className='itemColorsShapes'>
        <div className='allCollorPallets'>
          {
            itemActiveColor ?
              itemActiveColor.map((item, index) => {
                return (
                  <div className='singleItemPalletColor'>
                    <div style={{ backgroundColor: item.color }} className='singleColorPalletcolor'></div>
                    <div className='singleColorPalletName'>
                      {item.name}
                    </div>
                  </div>
                )
              }) : null
          }
        </div>
      </div>
    </div>
  )
}
