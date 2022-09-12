import React, { useContext } from 'react'
import { Steps } from 'antd';
import { Store } from '../../App';

const { Step } = Steps;

export default function Stepper(props) {
    const store = useContext(Store);
    const cta = document.createElement('a');

    return (
        <>
            <Steps data-aos="fade-up" data-aos-duration="1000">
                {
                    props.data ?
                        props.data.map((item) => (
                            <Step key={item.id} title={item.title} icon={item.icon} status={props.index === item.id ? 'process' : props.index > item.id ? 'finish' : 'wait'} />
                        )) : null
                }
            </Steps>
        </>
    )
}
