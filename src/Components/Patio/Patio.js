import React, { useContext } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleCheck, faPhoneAlt } from '@fortawesome/free-solid-svg-icons';
import { Steps, Button } from 'antd'
import { Store } from '../../App';
import Stepper from '../Stepper/Stepper';
import Pergolas from './Pergolas';
import Shapes from './Shapes';
import ColorPallete from './ColorPallete';
import PatternedStamps from './PatternedStamps';
import Summary from '../Summary/Summary';
import Form from '../Form/Form';

const { Step } = Steps

const steps = [
    {
        id: 1,
        title: '01 Pergolas',
        icon: <FontAwesomeIcon icon={faCircleCheck} className='stepIcon' />
    },
    {
        id: 2,
        title: '02 Shapes',
        icon: <FontAwesomeIcon icon={faCircleCheck} className='stepIcon' />
    },
    {
        id: 3,
        title: '03 Patterned Stamps',
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

export default function Patio() {

    const store = useContext(Store);
    const getContent = (id) => {
        switch (id) {
            case 1:
                return (<Pergolas id={id} />)
            case 2:
                return (<Shapes id={id} />)
            case 3:
                return (<PatternedStamps id={id} />)
            case 4:
                return (<ColorPallete id={id} />)
            case 5:
                return (<Summary id={id} />)
            default:
                return (<Pergolas id={id} />)
        }
    }

    return (
        <>
            {
                !store.PatioCompleted ? <Stepper data={steps} index={store.PatioStep} /> : null
            }
            <div className='steps-content mb-5 mt-5'>
                <div className='innerPanel'>
                    {
                        store.PatioCompleted ? <Form service={'PATIO'} /> : getContent(store.PatioStep)
                    }
                </div>
            </div>

            {
                !store.PatioCompleted ? <div className='buttonStep'>
                    {
                        store.PatioStep > 1 ?
                            <Button
                                className='btn-prev'
                                type='primary'
                                //disabled={disabled()}
                                onClick={() => store.setPatioStep(store.PatioStep - 1)}
                            >
                                PREVIOUS STEP
                            </Button> : null
                    }


                    <Button
                        className='btn-next'
                        type='primary'
                        //disabled={disabled()}
                        onClick={() => { store.PatioStep < 5 ? store.setPatioStep(store.PatioStep + 1) : store.setPatioCompleted(true) }}
                    >
                        NEXT STEP
                    </Button>
                </div> : null
            }

        </>
    )
}
