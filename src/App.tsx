import './App.css';
import { Route, Routes } from 'react-router-dom';
import { HomePage } from './Routes/home/home.component';
import { MeasurementPage } from './Routes/measurement/measurement.component';

function App() {
  return (
    <Routes>
    <Route path="/" element={<HomePage/>}/>
    <Route path="/Measurements"  element={<MeasurementPage/>}/>
  </Routes>
  );
}

export default App;
