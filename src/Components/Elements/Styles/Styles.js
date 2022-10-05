import React, { useState, useContext } from 'react'
import { Store } from '../../../App';
import './Style.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleCheck, faRulerCombined } from '@fortawesome/free-solid-svg-icons';
import { Skeleton } from 'antd';

export default function Styles(props) {
  const [basicMeasure, setBasicMeasure] = useState('')
  const [basicCost, setBasicCost] = useState('')
  const [height, setHeight] = useState(0)
  const [lenght, setLenght] = useState(0)
  const [wide, setWide] = useState(0)
  const [cardActive, setcardActive] = useState('')
  const store = useContext(Store);
  

  const setData = (item, index) => {
    setBasicMeasure(item.measure.basicMeasure)
    setBasicCost(item.measure.basicCost)
    setcardActive(index)
    
    if (store.CurrentService === 'PATIO') {
      store.setPpergolas(item)
    } else if (store.CurrentService === 'RETAINING WALLS') {
      store.setRstyle(item)
    } else if (store.CurrentService === 'DRIVEWAYS') {
      store.setDstyles(item)
    }
  }

  return (
    <div data-aos="fade-up" data-aos-duration="2000" className='data-styles'>
      <div className='all-items-card'>
        {
          props.data ?
            props.data.map((item, index) => {
              if (index === 0 && cardActive === '') {
                setData(item, index)
              }
              return (
                <div key={index} className={index === 0 && cardActive === '' ?
                  'activecard card-info card-item-style'
                  : index === cardActive ?
                    'activecard card-info card-item-style'
                    : 'card-info card-item-style'
                } onClick={() => setData(item, index)}>
                  <div className='card-item-element card-item-element-image'>
                    <img src={item.image.mediaItemUrl} />
                  </div>
                  <div className='card-item-element'>
                    <h4>{item.name}</h4>
                  </div>
                </div>
              )
            })
            : null
        }
      </div>

      <div className='card-info'>
        <div className='card-item-data-info'>
          <Skeleton loading={props.load} active={true}>
            <div>
              <div className='card-item-data-info-element'>
                <FontAwesomeIcon icon={faRulerCombined} className='data-info-icon' />
                <h5>Measure</h5>
              </div>
              <div className='card-item-data-info-element'>
                <FontAwesomeIcon icon={faCircleCheck} className='data-info-icon' />
                <div>
                  <div className='two-card-items-flex'>
                    <div className='card-item-element'>
                      <div>
                        <h6>Basic Measure</h6>
                        <h5><i>{`${store.CurrentService === "RETAINING WALLS" ? "Minimum " + basicMeasure + "’ Linear" : basicMeasure}`}</i></h5>
                      </div>
                    </div>
                    <div className='card-item-element'>
                      <div>
                        <h6>Basic Cost</h6>
                        <h5><i>{basicCost}</i></h5>
                      </div>
                    </div>
                  </div>
                  <div className='card-item-element-text'>
                    <h6>All Pergolas include treated wood exterior. Do you need more colors?</h6>
                  </div>
                </div>
              </div>
            </div>
            <div className='card-item-data-info-element'>
              <FontAwesomeIcon icon={faRulerCombined} className='data-info-icon' />
              <div>
                <h5>Custom Creation</h5>
                <div className='card-item-element-text'>
                  <div className='custom-creation-items'>
                    <p>Height</p>
                    <input className='custom-creation-input' onChange={(e) => setHeight(e.target.value)} placeholder={height} />
                  </div>
                  <div className='custom-creation-items'>
                    <p>Lenght</p>
                    <input className='custom-creation-input' onChange={(e) => setLenght(e.target.value)} placeholder={lenght} />
                  </div>
                  <div className='custom-creation-items'>
                    <p>Wide</p>
                    <input className='custom-creation-input' onChange={(e) => setWide(e.target.value)} placeholder={wide} />
                  </div>
                </div>
              </div>
              {/* <div className='smallCalculator'>
                <div>
                  <p>This is how much concrete you will need for your project</p>
                  <h6>{lenght && height && wide ? concrete.toFixed(2) : 0}</h6>
                </div>
                <div>
                  This is how many truck loads you may need
                  <h6>{lenght && height && wide ? Math.ceil(concrete / 8.3) : 0}</h6>
                </div>
              </div> */}
            </div>
          </Skeleton>
        </div>
      </div>
      {
        props.id === 1 ?
          <style>{`
                    .buttonStep{
                      justify-content: flex-end !important;}`}
          </style> : null
      }
      {
        store.CurrentService === "RETAINING WALLS" ?
          <style>{`
                  .card-item-element img{
                    max-wide: 120px !important;
                    margin-top: -50px;
                  }

                  .card-item-style{
                    margin-bottom: 30px;
                  }

                  .card-item-element-image{
                    background-color: #F2F2F2;
                    paddign: 20px;
                    margin: 20px;
                    border-radius: 1rem;
                  }
                `}
          </style> : null
      }
    </div>
  )
}
