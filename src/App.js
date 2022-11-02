import React, { createContext, useState } from "react"
import './App.css'
import Panel from './Components/Panel/Panel'
import Welcome from './Components/Welcome/Welcome'
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init({
  once: true,
});

export const Store = createContext(null);

function App() {
  let today = new Date()
  const [CurrentService, setCurrentService] = useState('')
  const [RetainingWallsStep, setRetainingWallsStep] = useState(1)
  const [PatioStep, setPatioStep] = useState(1)
  const [DrivewaysStep, setDrivewaysStep] = useState(1)
  const [PatioCompleted, setPatioCompleted] = useState(false)
  const [DrivewaysCompleted, setDrivewaysCompleted] = useState(false)
  const [RetainingWallsCompleted, setRetainingWallsCompleted] = useState(false)
  const [calculateWidth, setCalculateWidth] = useState()
  const [calculateHeight, setCalculateHeight] = useState()
  const [calculateCommercial, setCalculateCommercial] = useState(0.10)
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [address, setAddress] = useState('')
  const [date, setDate] = useState()
  const [Rstyle, setRstyle] = useState(null)
  const [Rtypebrick, setRtypebrick] = useState(null)
  const [RcustomDesign, setRcustomDesign] = useState(null)
  const [RcolorPallete, setRcolorPallete] = useState({type: null, color: null})
  const [Ppergolas, setPpergolas] = useState(null)
  const [Pshapes, setPshapes] = useState(null)
  const [PpatterndStampsstamped, setPpatterndStampsstamped] = useState(null)
  const [PpatterndStampsfinish, setPpatterndStampsfinish] = useState(null)
  const [PcolorPallete, setPcolorPallete] = useState({type: null, color: null})
  const [Dstyles, setDstyles] = useState(null)
  const [Dadvantages, setDadvantages] = useState(null)
  const [Dshapes, setDshapes] = useState(null)
  const [Doptions, setDoptions] = useState(null)

  return (
    <Store.Provider
      value={{
        CurrentService,
        setCurrentService,
        RetainingWallsStep,
        setRetainingWallsStep,
        PatioStep,
        setPatioStep,
        DrivewaysStep,
        setDrivewaysStep,
        PatioCompleted,
        setPatioCompleted,
        DrivewaysCompleted,
        setDrivewaysCompleted,
        RetainingWallsCompleted,
        setRetainingWallsCompleted,
        calculateWidth,
        setCalculateWidth,
        calculateHeight,
        setCalculateHeight,
        calculateCommercial,
        setCalculateCommercial,
        name,
        setName,
        email,
        setEmail,
        phone,
        setPhone,
        address,
        setAddress,
        date,
        setDate,
        Ppergolas, setPpergolas,
        Pshapes, setPshapes,
        PpatterndStampsstamped, setPpatterndStampsstamped,
        PpatterndStampsfinish, setPpatterndStampsfinish,
        PcolorPallete, setPcolorPallete,
        Rstyle, setRstyle,
        Rtypebrick, setRtypebrick,
        RcustomDesign, setRcustomDesign,
        RcolorPallete, setRcolorPallete,
        Dstyles, setDstyles,
        Dadvantages, setDadvantages,
        Dshapes, setDshapes,
        Doptions, setDoptions,
      }}>
      <div className='App'>
        {
          CurrentService ? <Panel /> : <Welcome />
        }
      </div>
    </Store.Provider>

  )
}

export default App
