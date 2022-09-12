import React, { useContext, useLayoutEffect, useState } from 'react'
import RetainingWalls from '../RetainingWalls/RetainingWalls';
import Patio from '../Patio/Patio';
import Driveways from '../Driveways/Driveways';
import Calculator from '../Calculator/Calculator';
import Desktop from '../Menu/Desktop';
import Mobile from '../Menu/Mobile';
import { Store } from '../../App';
import './Panel.css'

export default function Panel() {
    const store = useContext(Store);
    const [size, setSize] = useState(null);
    const [currentCommercial, setCurrentCommercial] = useState('RESIDENTIAL')

    useLayoutEffect(() => {
        function updateSize() {
            setSize(window.innerWidth);
        }
        window.addEventListener('resize', updateSize);
        updateSize();
        return () => window.removeEventListener('resize', updateSize);
    }, []);

    const getContent = (service) => {
        switch (service) {
            case 'RETAINING WALLS':
                return (<RetainingWalls />)
            case 'PATIO':
                return (<Patio />)
            case 'DRIVEWAYS':
                return (<Driveways />)
            case 'CALCULATOR':
                return (<Calculator />)
            default:
                return (<RetainingWalls />)
        }
    }

    return (
        <div className='panel'>
            <div className='sidebar'>
                {
                    size > 1024 ? <Desktop />
                        : <Mobile />
                }
            </div>
            <div className='content'>
                <div className='panel-header'>
                </div>
                <div className='panel-body'>
                    <div className={store.CurrentService === 'CALCULATOR' ? 'calculate-milimeters' : null}>
                        <div>
                            <h2 className='text-xl md:text-4xl lg:text-6xl font-extrabold'>{store.CurrentService}</h2>
                            {store.CurrentService === 'CALCULATOR' ? <p className='calculate-text-subtitle'>Calculate how much your project needs</p> : null}
                        </div>
                        {store.CurrentService === 'CALCULATOR' ?
                            <div className='calculate-items-milimeters'>
                                <div onClick={() => {setCurrentCommercial('RESIDENTIAL'); store.setCalculateCommercial(0.10)}} className={`${currentCommercial === 'RESIDENTIAL' ? 'activeMilimeters' : ''} calculate-items-milimeters-card`}>
                                    <img src='https://qualityconcreteconstructionllc.com/wp-content/uploads/2022/09/RESIDENTIAL.svg' />
                                    <p>RESIDENTIAL</p>
                                    <p>0.10m</p>                                    
                                </div>
                                <div onClick={() => {setCurrentCommercial('ROWCOMMERCIAL'); store.setCalculateCommercial(0.15)}} className={`${currentCommercial === 'ROWCOMMERCIAL' ? 'activeMilimeters' : ''} calculate-items-milimeters-card`}>
                                    <img src='https://qualityconcreteconstructionllc.com/wp-content/uploads/2022/09/ROWCOMMERCIAL.svg' />
                                    <p>ROW COMMERCIAL</p>
                                    <p>0.15m</p>                                    
                                </div>
                                <div onClick={() => {setCurrentCommercial('COMMERCIAL'); store.setCalculateCommercial(0.20)}} className={`${currentCommercial === 'COMMERCIAL' ? 'activeMilimeters' : ''} calculate-items-milimeters-card`}>
                                    <img src='https://qualityconcreteconstructionllc.com/wp-content/uploads/2022/09/COMMERCIAL.svg' />
                                    <p>COMMERCIAL</p>
                                    <p>0.20m</p>                                    
                                </div>
                            </div>
                            : null}
                    </div>
                    {
                        getContent(store.CurrentService)
                    }
                </div>
            </div>
        </div>
    )
}
