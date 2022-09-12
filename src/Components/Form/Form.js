import React, { useContext, useState } from 'react'
import './Form.css'
import { Input, DatePicker, Checkbox, Button } from 'antd';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faEnvelope, faPhone, faMap, faCalendar } from '@fortawesome/free-solid-svg-icons'
import { Store } from '../../App';

export default function Form(props) {
    const store = useContext(Store);
    const [Completed, setCompleted] = useState(false)
    return (
        <div>

            {
                Completed ? <h4 className='title-form processCompleted'>PROCESS COMPLETED</h4> : <h4 className='title-form'>Fill Out <span className='text-primary'>The Form</span></h4>
            }
            {
                !Completed ?
                    <div>
                        <div className='formflex'>
                            <div>
                                <label>Name</label>
                                <Input suffix={<FontAwesomeIcon icon={faUser} />} />
                            </div>
                            <div>
                                <label>Phone Number</label>
                                <Input suffix={<FontAwesomeIcon icon={faPhone} />} />
                            </div>
                        </div>


                        <div className='formflex'>
                            <div>
                                <label>Email</label>
                                <Input suffix={<FontAwesomeIcon icon={faEnvelope} />} />
                            </div>

                            <div>
                                <label>Address</label>
                                <Input suffix={<FontAwesomeIcon icon={faMap} />} />
                            </div>
                        </div>

                        <div className='formflex'>
                            <div>
                                <label>Date</label>
                                <DatePicker suffix={<FontAwesomeIcon icon={faCalendar} />} />
                            </div>

                            <div className='check-apply-financing'>
                                <Checkbox></Checkbox>
                                <img src='https://qualityconcreteconstructionllc.com/wp-content/uploads/2022/06/Heart.svg' /> | Apply for financing
                            </div>
                        </div>

                        <div className='formflex'>
                            <div>

                            </div>

                            <div>
                                <h6 onClick={() => setCompleted(true)} className='btn-submit'>SUBMIT</h6>
                            </div>
                        </div>
                    </div>
                    :
                    <div className='process-Completed'>
                        <div className='process-Completed-Text'>
                            <h5>Lorem ipsum dolor sit</h5>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        </div>
                        <div className='process-Completed-btn'>
                            <h6 onClick={() => window.location.reload()} className='btn-submit back-to-service'>BACK TO SERVICES</h6>
                            <h6 onClick={() => window.location.href='/'} className='btn-submit'>DONE</h6>
                        </div>
                    </div>
            }
            {
                props.service === store.CurrentService ?
                    <style>{`
                    .panel-body{
                        background-color: #ffffff !important;
                        }
                        
                        .panel-body h2{
                            display:none;
                        }`}
                    </style> : null
            }
        </div>
    )
}
