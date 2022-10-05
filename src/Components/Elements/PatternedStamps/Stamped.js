import React, { useState, useContext } from 'react'
import { Store } from '../../../App';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleCheck, faRulerCombined } from '@fortawesome/free-solid-svg-icons';

export default function Stamped(props) {
    const store = useContext(Store);
    const [Active, setActive] = useState('');
    const [Minimum, setMinimum] = useState('');
    const [Maximum, setMaximum] = useState('');
    const [Cost, setCost] = useState('');
    const [Exeed, setExeed] = useState('');
    const [ExeedCost, setExeedCost] = useState('');
    const setData = (item, index) => {
        setActive(index);
        setMinimum(item.stampedData.minimum);
        setMaximum(item.stampedData.maximum);
        setCost(item.stampedData.cost);
        setExeed(item.ifYouExceed.exceed);
        setExeedCost(item.ifYouExceed.cost);

        if(props.type === 'stamped'){
            store.setPpatterndStampsstamped(item)
        }
        else if(props.type === 'finish'){
            store.setPpatterndStampsfinish(item)
        }
    }
    const convertMoney = (money) => {
        let value = (money).toLocaleString('en-US', {
            style: 'currency',
            currency: 'USD',
        }) + '/Sf'

        return value;
    }
    return (
        <div className='content-tabs-stamped'>
            <div data-aos="fade-right" data-aos-duration="1000" className='stamped-container item-tabs-stamped'>
                {
                    props.data ?
                        props.data.map((item, index) => {
                            if (index === 0 && Active === '') {
                                setData(item, index)
                            }
                            return (
                                <div onClick={() => setData(item, index)} className={`${index === Active ? 'stampedActive' : null} item-tabs-stamped-elements`}>
                                    <div className='item-tabs-stamped-elements-image'>
                                        <img src={item.image.mediaItemUrl} alt={item.name} />
                                    </div>
                                    <div className='item-tabs-stamped-elements-text'>
                                        {item.name}
                                    </div>
                                </div>
                            )
                        }) : null
                }
            </div>
            <div data-aos="fade-left" data-aos-duration="1000" className='card-info stamped-container'>
                <div className='card-item-data-info card-item-data-info-full'>
                    <div>
                        <div className='card-item-data-info-element'>
                            <FontAwesomeIcon icon={faRulerCombined} className='data-info-icon' />
                            <h5>Stamped</h5>
                        </div>
                        <div className='card-item-data-info-element'>
                            <FontAwesomeIcon icon={faCircleCheck} className='data-info-icon' />
                            <div>
                                <div className='two-card-items-flex'>
                                    <div className='card-item-element'>
                                        <div>
                                            <h6>Minimum</h6>
                                            <h5><i>{Minimum + ' - ' + Maximum + 'Sf'}</i></h5>
                                        </div>
                                    </div>
                                    <div className='card-item-element'>
                                        <div>
                                            <h6>Cost</h6>
                                            <h5><i>{convertMoney(Cost)}</i></h5>
                                        </div>
                                    </div>
                                </div>
                                <div className='card-item-element-text-stamped'>
                                    <div className='two-card-items-flex'>
                                        <div className='card-item-element'>
                                            <div>
                                                <h5><i>{'If you exceed ' + Exeed + ' Sf'}</i></h5>
                                            </div>
                                        </div>
                                        <div className='card-item-element'>
                                            <div>
                                                <h5><i>{convertMoney(ExeedCost)}</i></h5>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
