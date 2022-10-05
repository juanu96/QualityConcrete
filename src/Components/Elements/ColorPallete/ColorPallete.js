import React, { useState, useContext } from 'react'
import { Store } from '../../../App';
import "./ColorPallete.css"

export default function ColorPallete(props) {
  const [ItemActiveColor, setItemActiveColor] = useState('')
  const [ItemActiveColorIndex, setItemActiveColorIndex] = useState('')
  const [Name, setName] = useState('')
  const [Color, setColor] = useState('')
  const store = useContext(Store);
  
  const setDataColor = (item, name) => {
    if (store.CurrentService === 'PATIO') {
      store.setPcolorPallete({ type: name, color: item })
    } else if (store.CurrentService === 'RETAINING WALLS') {
      store.setRcolorPallete({ type: name, color: item })
    }
  }

  return (
    <div className='containerCollorPallete'>
      <div className='itemSelectShape' data-aos="fade-up" data-aos-duration={1000} >

        {
          props.data ?
            props.data.map((item, index) => {
              if (index === 0 && ItemActiveColorIndex === '') {
                setItemActiveColorIndex(index)
                setItemActiveColor(item.item)
                setName(item.name)
              }
              return (
                <div key={index} className={ItemActiveColorIndex === index ? 'activeItemColorShape itemColorShape' : 'itemColorShape'}>
                  <div className='itemTextColorShape'>
                    {item.name}
                  </div>
                  <div onClick={() => { setItemActiveColorIndex(index); setItemActiveColor(item.item); setName(item.name) }} className='itemButtonColorShape'>
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
            ItemActiveColor ?
              ItemActiveColor.map((item, index) => {
                if (index === 0 && Color === '') {
                  setColor(item)
                  setDataColor(item, Name)
                  //console.log(Name)
                }
                return (
                  <div className='singleItemPalletColor' onClick={() => { setColor(item); setDataColor(item, Name) }}>
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
