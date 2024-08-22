import { useState } from 'react'
import './App.css'
import Form from './form'
import AgeOutput from './AgeOutput'


function App() {

  const [birthDate, setBirthDate] = useState({});

  return (
    <div className='background-container'>
      <div className="main-container">
        <Form setBirthDate={setBirthDate} />
        <AgeOutput birthDate={birthDate}/> 
      </div>
    </div> 
  )
}

export default App
