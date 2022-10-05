import React, { useContext } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleCheck, faPhoneAlt } from '@fortawesome/free-solid-svg-icons';
import { Steps, Button } from 'antd'
import { Store } from '../../App';
import Stepper from '../Stepper/Stepper';
import Styles from './Styles';
import TypeOfBrick from './TypeOfBrick';
import ColorPallete from './ColorPallete';
import CustomDesign from './CustomDesign';
import Summary from '../Summary/Summary';
import Form from '../Form/Form';

const { Step } = Steps

const steps = [
    {
        id: 1,
        title: '01 Styles',
        icon: <FontAwesomeIcon icon={faCircleCheck} className='stepIcon' />
    },
    {
        id: 2,
        title: '02 Type Of Brick',
        icon: <FontAwesomeIcon icon={faCircleCheck} className='stepIcon' />
    },
    {
        id: 3,
        title: '03 Custom Design',
        icon: <FontAwesomeIcon icon={faCircleCheck} className='stepIcon' />
    },
    {
        id: 4,
        title: '04 Color Pallete',
        icon: <FontAwesomeIcon icon={faCircleCheck} className='stepIcon' />
    },
    {
        id: 5,
        title: '',
        icon: <FontAwesomeIcon icon={faPhoneAlt} onClick={() => window.open('tel:(317) 619-2989', '_self')} className='stepIconPhone cursor-pointer' />
    }
]

export default function RetainingWalls() {
    const store = useContext(Store);
    const getContent = (id) => {
        switch (id) {
            case 1:
                return (<Styles id={id} />)
            case 2:
                return (<TypeOfBrick id={id} />)
            case 3:
                return (<CustomDesign id={id} />)
            case 4:
                return (<ColorPallete id={id} />)
            case 5:
                return (<Summary id={id} />)
            default:
                return (<Styles id={id} />)
        }
    }
    return (
        <>
            {
                !store.RetainingWallsCompleted
                    ? <Stepper data={steps} index={store.RetainingWallsStep} /> : null
            }
            <div className='steps-content mb-5 mt-5'>
                <div className='innerPanel'>
                    {
                        store.RetainingWallsCompleted
                            ? <Form service={'RETAINING WALLS'} /> : getContent(store.RetainingWallsStep)
                    }
                </div>
            </div>

            {
                !store.RetainingWallsCompleted
                    ? <div className='buttonStep'>
                        {
                            store.RetainingWallsStep > 1 ?
                                <Button
                                    className='btn-prev'
                                    type='primary'
                                    //disabled={disabled()}
                                    onClick={() => store.setRetainingWallsStep(store.RetainingWallsStep - 1)}
                                >
                                    PREVIOUS STEP
                                </Button> : null
                        }


                        <Button
                            className='btn-next'
                            type='primary'
                            //disabled={disabled()}
                            onClick={() => { store.RetainingWallsStep < 5 ? store.setRetainingWallsStep(store.RetainingWallsStep + 1) : store.setRetainingWallsCompleted(true) }}
                        >
                            NEXT STEP
                        </Button>
                    </div> : null
            }

        </>
    )
}
