import logo from './logo.svg';
import './App.css';
import FalconImage from './FalconImage/falconImage';
import Fuel from './Fuel/Fuel';
import CountDown from './CountDown/CountDown';
import {useState} from 'react'
function App() {
  const [fuelStatus,setFuelStatus]=useState({hydrogen:0,oxygen:0})
  return (
    <div className="App">
      <div className="controlroom">
        <h1>Mission Control Room</h1>
        <h2>Count down</h2>
        <Fuel fuelStatus={fuelStatus} setFuelStatus={setFuelStatus}></Fuel>
        <CountDown></CountDown>
      </div>
      <div>
        <FalconImage></FalconImage>
      </div>
    </div>
  );
}

export default App;
