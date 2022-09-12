import React, { useContext } from 'react'
import { Store } from '../../App';
import './Desktop.css'

export default function Desktop() {
    const store = useContext(Store);
    return (
        <>
            <div data-aos="fade-right" data-aos-duration="1000" className='sidebar-logo'>
                <a href='/'>
                    <img src='https://qualityconcreteconstructionllc.com/wp-content/uploads/2022/06/Logo.svg' />
                </a>
            </div>
            <div data-aos="fade-right" data-aos-duration="1000" className='sidebar-menu'>
                <h3 className='title'>SERVICES</h3>
                <ul className='menu-items'>
                    <li onClick={() => store.setCurrentService('PATIO')} className={store.CurrentService === 'PATIO' ? 'item-menu menu-active' : 'item-menu'}><p>PATIO</p></li>
                    <li onClick={() => store.setCurrentService('RETAINING WALLS')} className={store.CurrentService === 'RETAINING WALLS' ? 'item-menu menu-active' : 'item-menu'}><p>RETAINING WALLS</p></li>
                    <li onClick={() => store.setCurrentService('DRIVEWAYS')} className={store.CurrentService === 'DRIVEWAYS' ? 'item-menu menu-active' : 'item-menu'}><p>DRIVEWAYS</p></li>
                    <li onClick={() => store.setCurrentService('CALCULATOR')} className={store.CurrentService === 'CALCULATOR' ? 'item-menu menu-active' : 'item-menu'}><p>CALCULATOR</p></li>
                </ul>
            </div>
            <div data-aos="fade-right" data-aos-duration="1000" className='text-menu'>
                An Indianapolis, IN
                Concrete Contractor
            </div>
        </>
    )
}
