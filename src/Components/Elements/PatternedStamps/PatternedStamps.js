import React, { useContext } from 'react'
import { Tabs } from 'antd'
import './PatternedStamps.css'
import { Store } from '../../../App';
import Stamped from './Stamped';

const { TabPane } = Tabs;

export default function PatternedStamps(props) {
    const store = useContext(Store);
    return (
        <div className='PatternedContainer'>
            <div className="card-container">
                <Tabs type="card">
                    <TabPane tab="Stamped" key="1">
                        <Stamped data={props.datastamps} type={'stamped'} />
                    </TabPane>
                    <TabPane tab="Finish" key="2">
                        <Stamped data={props.datafinish} type={'finish'} />
                    </TabPane>
                </Tabs>
            </div>
            {
                store.PatioStep === 3 && store.CurrentService === "PATIO" ?
                    <style>{`
                    .innerPanel{
                        margin-top:65px !important;
                        padding-left: 0px !important;
                        border-top-left-radius: 0 !important;}`}
                    </style> : null
            }
        </div>
    )
}
