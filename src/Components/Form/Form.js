import React, { useContext, useState } from 'react'
import './Form.css'
import { Input, DatePicker, Checkbox, Button } from 'antd';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faEnvelope, faPhone, faMap, faCalendar } from '@fortawesome/free-solid-svg-icons'
import { Store } from '../../App';
import PDF from "../pdf/pdf";
import { PDFDownloadLink } from "@react-pdf/renderer";
import { Player, Controls } from "@lottiefiles/react-lottie-player";
import moment from "moment";

export default function Form(props) {
    const store = useContext(Store);
    const [Completed, setCompleted] = useState(false)
    const [finalBlob, setFinalBlob] = useState(null);
    const [loading, setLoading] = useState(false);
    const [finalloading, setFinalloading] = useState(false);
    const [Message, setMessage] = useState(null);
    const [cont, setcont] = useState(null);
    const [Send, setSend] = useState(null);
    const [ModalSend, setModalSend] = useState(null);

    const sendMessage = async () => {
        setLoading(true);
        const contactFormId = "1112";
        const contactFormUrl = `https://qualityconcreteconstructionllc.com/wp-json/contact-form-7/v1/contact-forms/${contactFormId}/feedback`;
        const formData = new FormData();

        formData.append("Name", store.name);
        formData.append("Phone", store.phone);
        formData.append("Email", store.email);
        formData.append("Address", store.address);
        formData.append("Date", store.date);
        formData.append("Filepdf", finalBlob, `Advance-Disposal-Inc-Quote.pdf`);
        formData.append("subject", `New message sent from ${window.location.href}`);



        var requestOptions = {
            method: "POST",
            body: formData,
            redirect: "follow",
        };

        fetch(contactFormUrl, requestOptions)
            .then((response) => response.text())
            .then((result) => {
                const data = JSON.parse(result);
                console.log(data)
                setMessage(data.message);
                setModalSend(false)
                setFinalloading(true)
            })
            .catch((error) => console.log("error", error));
    };

    const disabled = () => {
        if(store.name && store.email && store.phone && store.address && store.date){
            console.log(store.date)
            return false
        }else{
            return true
        }        
    }

    return (
        <div>
            {!Send ? (
                <PDFDownloadLink
                    document={<PDF store={store} />}
                    fileName="Request-Dumpster-Quote.pdf"
                >
                    {({ blob, url, loading, error }) =>
                        blob ? setFinalBlob(blob) : null
                    }
                </PDFDownloadLink>
            ) : null}

            {
                Completed ? <h4 className='title-form processCompleted'>PROCESS COMPLETED</h4> : <h4 className='title-form'>Fill Out <span className='text-primary'>The Form</span></h4>
            }
            {
                !Completed ?
                    <div>
                        <div className='formflex'>
                            <div>
                                <label>Name</label>
                                <Input onChange={(e) => store.setName(e.target.value)} value={store.name} suffix={<FontAwesomeIcon icon={faUser} />} />
                            </div>
                            <div>
                                <label>Phone Number</label>
                                <Input onChange={(e) => store.setPhone(e.target.value)} value={store.phone} suffix={<FontAwesomeIcon icon={faPhone} />} />
                            </div>
                        </div>


                        <div className='formflex'>
                            <div>
                                <label>Email</label>
                                <Input onChange={(e) => store.setEmail(e.target.value)} value={store.email} suffix={<FontAwesomeIcon icon={faEnvelope} />} />
                            </div>

                            <div>
                                <label>Address</label>
                                <Input onChange={(e) => store.setAddress(e.target.value)} value={store.address} suffix={<FontAwesomeIcon icon={faMap} />} />
                            </div>
                        </div>

                        <div className='formflex'>
                            <div>
                                <label>Date</label>
                                <DatePicker onChange={(e) => store.setDate(e._d)} /* defaultValue={store.date} */ suffix={<FontAwesomeIcon icon={faCalendar} />} />
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
                                <Button disabled={disabled()} onClick={() => {setCompleted(true); sendMessage()}} type="primary" className='btn-submit'>SUBMIT</Button>
                            </div>
                        </div>
                    </div>
                    :
                    <div className='process-Completed'>
                        <div className='process-Completed-Text'>
                            <h5>Thanks for submitting your contact info!</h5>
                            <p className='text-center'>Your request has been sent successfully, We appreciated your preference and trust to work with us</p>
                        </div>
                        <div className='process-Completed-btn'>
                            <h6 onClick={() => window.location.reload()} className='btn-submit back-to-service'>BACK TO SERVICES</h6>
                            <h6 onClick={() => window.location.href = '/'} className='btn-submit'>DONE</h6>
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
