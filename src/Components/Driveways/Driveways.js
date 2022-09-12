import React, { useContext } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleCheck, faPhoneAlt } from '@fortawesome/free-solid-svg-icons';
import { Steps, Button } from 'antd'
import { Store } from '../../App';
import Stepper from '../Stepper/Stepper';
import Styles from './Styles';
import Advantages from './Advantages';
import OptionsCosts from './OptionsCosts';
import Shapes from './Shapes';
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
        title: '02 Advantages',
        icon: <FontAwesomeIcon icon={faCircleCheck} className='stepIcon' />
    },
    {
        id: 3,
        title: '03 Shapes',
        icon: <FontAwesomeIcon icon={faCircleCheck} className='stepIcon' />
    },
    {
        id: 4,
        title: '04 Options & Costs',
        icon: <FontAwesomeIcon icon={faCircleCheck} className='stepIcon' />
    },
    {
        id: 5,
        title: '',
        icon: <FontAwesomeIcon icon={faPhoneAlt} className='stepIconPhone' />
    }
]

export default function Driveways() {
    const store = useContext(Store);
    const getContent = (id) => {
        switch (id) {
            case 1:
                return (<Styles id={id} />)
            case 2:
                return (<Advantages id={id} />)
            case 3:
                return (<Shapes id={id} />)
            case 4:
                return (<OptionsCosts id={id} />)
            case 5:
                return (<Summary id={id} />)
            default:
                return (<Styles id={id} />)
        }
    }
    return (
        <>
            {
                !store.DrivewaysCompleted
                ? <Stepper data={steps} index={store.DrivewaysStep} /> : null
            }
            <div className='steps-content mb-5 mt-5'>
                <div className='innerPanel'>
                    {
                        store.DrivewaysCompleted
                        ? <Form service={'RETAINING WALLS'} /> : getContent(store.DrivewaysStep)
                    }
                </div>
            </div>

            {
                !store.DrivewaysCompleted
                ? <div className='buttonStep'>
                    {
                        store.DrivewaysStep > 1 ?
                            <Button
                                className='btn-prev'
                                type='primary'
                                //disabled={disabled()}
                                onClick={() => store.setDrivewaysStep(store.DrivewaysStep - 1)}
                            >
                                PREVIOUS STEP
                            </Button> : null
                    }


                    <Button
                        className='btn-next'
                        type='primary'
                        //disabled={disabled()}
                        onClick={() => { store.DrivewaysStep < 5 ? store.setDrivewaysStep(store.DrivewaysStep + 1) : store.setDrivewaysCompleted(true) }}
                    >
                        NEXT STEP
                    </Button>
                </div> : null
            }

        </>
    )
}
