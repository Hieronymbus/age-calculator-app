import { useState } from 'react'
import './assets/App.css'
import Form from './components/Form'
import AgeOutput from './components/AgeOutput'


function App() {

  const [birthDate, setBirthDate] = useState({});

  return (
    <div className='background-container'>
      <div className="main-container">
        <Form setBirthDate={setBirthDate} />
        <AgeOutput birthDate={birthDate}/> 
      </div>
    </div> 
  );
};

export default App;
