import React, { useState, useContext } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRulerCombined, faCircleInfo } from '@fortawesome/free-solid-svg-icons';
import { gql, useQuery } from "@apollo/client";
import { Store } from '../../App';
import '../Calculator/Calculator.css'

const CALCULATOR = gql`
{
  calculators {
    nodes {
      calculator {
        name
        image {
          mediaItemUrl
        }
      }
    }
  }
}`

export default function Calculator() {
  const { loading, data } = useQuery(CALCULATOR)
  const [cardActive, setcardActive] = useState('')
  const [Width, setWidth] = useState(0)
  const [Height, setHeight] = useState(0)
  const [Modal, setModal] = useState(false)
  const store = useContext(Store);
  let concrete = store.calculateCommercial * Width * Height

  return (
      <div className='calculatorContainer'>
        <div className='calculator-list-service'>
          {
            !loading ?
              data.calculators.nodes.map((item, index) => {
                if (index === 0 && cardActive === '') {
                  setcardActive(index)
                }
                return (
                  <div key={index} onClick={() => setcardActive(index)} className={`${cardActive === index ? 'activecard ' : ''}calculator-item-service`}>
                    <div className='calculator-item-image'>
                      <img src={item.calculator.image.mediaItemUrl} />
                    </div>
                    <div className='calculator-item-name'>
                      <h4>{item.calculator.name}</h4>
                    </div>
                  </div>
                )
              })
              : null
          }
          <p onClick={() => setModal(true)} className="cursor-pointer"><FontAwesomeIcon icon={faCircleInfo} className='' /> Block Fill Volume Guide</p>
        </div>
        <div className='calculator-data-container'>
          <div className='calculate-data-info'>
            <FontAwesomeIcon icon={faRulerCombined} className='data-info-icon' />
            <h5>Measure</h5>
          </div>
          <div className='calculate-form'>
            <div className='calculate-inputs'>
              <div><label>WIDTH</label><input onChange={(e) => setWidth(e.target.value)} type="number" /></div>
              <div className='text-primary text-3xl'>X</div>
              <div><label>LENGTH</label> <input onChange={(e) => setHeight(e.target.value)} type="number" /></div>
            </div>
            <div className='calculate-button'>

            </div>
          </div>
          <div className='calculate-card-info'>
            <div className='calculate-card-items'>
              <p>This is how much concrete
                you will need for your project</p>
              <h4>{Width && Height ? concrete.toFixed(2) : 0} m3</h4>
            </div>
            <div className='calculate-card-items'>
              <p>This is how many truck
                loads you may need</p>
              <h4>{Math.ceil(concrete / 8.3)}</h4>
            </div>
          </div>
          <div className='calculate-img'>
            <img src='https://qualityconcreteconstructionllc.com/wp-content/uploads/2022/09/Truck.png' />
          </div>
        </div>
        <div onClick={() => setModal(false)} className={`${Modal ? 'modalInfo' : 'hidden'} `}>
          <img src="https://qualityconcreteconstructionllc.com/wp-content/uploads/2022/09/table-of-information.png" />
        </div>
      </div>
  )
}
