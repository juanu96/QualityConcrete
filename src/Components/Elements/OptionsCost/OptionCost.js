import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRulerCombined } from '@fortawesome/free-solid-svg-icons';
import './OptionCost.css'

export default function OptionCost(props) {
    const [ActiveOptionCost, setActiveOptionCost] = useState('')
    const [ActiveOptionCostImage, setActiveOptionCostImage] = useState('')
    const [ActiveOptionCostName, setActiveOptionCostName] = useState('')
    const [ActiveOptionCostMin, setActiveOptionCostMin] = useState('')
    const [ActiveOptionCostMax, setActiveOptionCostMax] = useState('')

    const setData = (data, index) => {
        setActiveOptionCost(index)
        setActiveOptionCostImage(data.image.mediaItemUrl)
        setActiveOptionCostName(data.name)
        setActiveOptionCostMin(data.min)
        setActiveOptionCostMax(data.max)
    }
    const convertMoney = (money) => {
        let value = (money).toLocaleString('en-US', {
            style: 'currency',
            currency: 'USD',
        })

        return value;
    }
    return (
        <div className='ContentOptionCost'>
            <div className='ItemsOptionsCost'>
                {
                    props.data ? props.data.map((data, index) => {
                        if (index === 0 && ActiveOptionCost === '') {
                            setData(data, index)
                        }
                        return (
                            <div className={`${ActiveOptionCost === index ? 'ActiveItemOptionCost' : null} ItemOptionCost`} key={index} onClick={() => setData(data, index)}>
                                <div className='ImageOptionCost'>
                                    <img src={data.image.mediaItemUrl} alt={data.name} />
                                </div>
                                <div className='NameOptionCost'>
                                    {data.name}
                                </div>
                            </div>
                        )
                    }) : null
                }
            </div>
            <div className='SelectedOptionCost'>
                <div className='SelectedOptionCostTitle'>{ActiveOptionCostName}</div>
                <img className='SelectedOptionCostImage' src={ActiveOptionCostImage} alt={ActiveOptionCostName} />
                <div className='SelectedOptionCostInfo'>
                    <div className='SelectedOptionCostInfoTitle'>
                        <FontAwesomeIcon icon={faRulerCombined} className='data-info-icon' />
                        <h5>Range</h5>
                    </div>
                    <div className='SelectedOptionCostMin'>{convertMoney(ActiveOptionCostMin)}</div>
                    <div className='SelectedOptionCostMax'>{convertMoney(ActiveOptionCostMax)}</div>
                </div>


            </div>
        </div>
    )
}
