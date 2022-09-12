import React, { useContext, useState } from 'react';
import { Store } from '../../App';
import './Welcome.css'

export default function Welcome() {
    const store = useContext(Store);
    const linkPatio = 'https://qualityconcreteconstructionllc.com/wp-content/uploads/2022/06/Patio.png'
    const linkDriveways = 'https://qualityconcreteconstructionllc.com/wp-content/uploads/2022/06/Driveways.png'
    const linkRetainig = 'https://qualityconcreteconstructionllc.com/wp-content/uploads/2022/06/Retaining-Wall.png'
    const [CurrentService, setCurrentService] = useState('RETAINING WALLS');
    const [ImgServiceActive, setImgServiceActive] = useState(linkRetainig);

    return (
        <div className='content-welcome'>
            <div className='logo'>
                <div data-aos="fade-right" data-aos-duration="1000" className='img-content'>
                    <img src='https://qualityconcreteconstructionllc.com/wp-content/uploads/2022/06/QUALITY-CONCRETE-CONSTRUCTION.png' alt='logo' />
                </div>
                <div>
                    <div>
                        <img data-aos="fade-right" data-aos-duration="2000" onClick={() => setCurrentService('PATIO')} className='img-services' src={ImgServiceActive === linkRetainig ? linkPatio : ImgServiceActive === linkDriveways ? linkPatio : linkRetainig} alt='logo' />
                    </div>
                    <div>
                        <img data-aos="fade-right" data-aos-duration="2000" onClick={() => setCurrentService('RETAINING WALLS')} className='img-active' src={ImgServiceActive} alt='logo' />
                    </div>
                    <div>
                        <img data-aos="fade-right" data-aos-duration="2000" onClick={() => setCurrentService('DRIVEWAYS')} className='img-services' src={ImgServiceActive === linkRetainig ?  linkDriveways : ImgServiceActive === linkPatio ? linkDriveways : linkRetainig} alt='logo' />
                    </div>
                </div>
            </div>

            <div className='content-welcome content-welcome-selected content-mobile-welcome'>
                <div>
                    <div data-aos="fade-up" data-aos-duration="1000" className='img-content-mobile'>
                        <img src='https://qualityconcreteconstructionllc.com/wp-content/uploads/2022/06/QUALITY-CONCRETE-CONSTRUCTION.png' alt='logo' />
                    </div>
                    <div data-aos="fade-up" data-aos-duration="1000">
                        <h2 className='title-text'><span className='text-welcome'>Welcome to</span><br />
                            <b>Quality Concrete Construction LLC </b></h2>
                        <p className='text-content'>Quoting Wizard, we will guide you through the steps of requesting a custom quote for us to build your dreamed Construction.</p>
                    </div>

                    <div className='services-select'>
                        <h3 data-aos="fade-up" data-aos-duration="1000">CHOOSE SERVICE</h3>

                        <ul data-aos="fade-up" data-aos-duration="1000">
                            <li onClick={() => { setCurrentService('PATIO'); setImgServiceActive(linkPatio) }} className={CurrentService === 'PATIO' ? 'item-service active' : 'item-service'}>PATIO</li>
                            <li onClick={() => {setCurrentService('RETAINING WALLS'); setImgServiceActive(linkRetainig) }} className={CurrentService === 'RETAINING WALLS' ? 'item-service active' : 'item-service'}>RETAINING WALLS</li>
                            <li onClick={() => { setCurrentService('DRIVEWAYS'); setImgServiceActive(linkDriveways) }} className={CurrentService === 'DRIVEWAYS' ? 'item-service active' : 'item-service'}>DRIVEWAYS</li>
                        </ul>
                    </div>
                    <div data-aos="fade-up" data-aos-duration="3000">
                        <h3 className='button' onClick={() => store.setCurrentService(CurrentService)}>
                            GET ME STARTED
                        </h3>
                    </div>
                </div>
            </div>
        </div>
    )
}
