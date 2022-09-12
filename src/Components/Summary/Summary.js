import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faScrewdriverWrench, faGear, faMoneyCheck, faArchway, faShapes, faSwatchbook } from '@fortawesome/free-solid-svg-icons';
import './Summary.css'

export default function Summary() {
    return (
        <div className='summary-content'>
            <div className='inner-summary-content'>
                <div className='flex-icon-content'>
                    <FontAwesomeIcon icon={faScrewdriverWrench} className='stepIcon' />
                    <div className='summary-text-content'>
                        <h3>Service</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed</p>
                    </div>
                </div>
                <div className='flex-icon-content'>
                    <FontAwesomeIcon icon={faGear} className='stepIcon' />
                    <div className='summary-text-content'>
                        <h3>Measure</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed</p>
                    </div>
                </div>
                <div className='flex-icon-content'>
                    <FontAwesomeIcon icon={faMoneyCheck} className='stepIcon' />
                    <div className='summary-text-content'>
                        <h3>Type of Price</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed</p>
                    </div>
                </div>
            </div>
            <div className='inner-summary-content'>
                <div className='flex-icon-content'>
                    <FontAwesomeIcon icon={faArchway} className='stepIcon' />
                    <div className='summary-text-content'>
                        <h3>Patterned Stamps</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed</p>
                    </div>
                </div>
                <div className='flex-icon-content'>
                    <FontAwesomeIcon icon={faShapes} className='stepIcon' />
                    <div className='summary-text-content'>
                        <h3>Shape</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed</p>
                    </div>
                </div>
                <div className='flex-icon-content'>
                    <FontAwesomeIcon icon={faSwatchbook} className='stepIcon' />
                    <div className='summary-text-content'>
                        <h3>Color Selected</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
