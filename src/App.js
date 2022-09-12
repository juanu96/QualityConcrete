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
