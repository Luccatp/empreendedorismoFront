import './App.css';
import { Route, Routes } from 'react-router-dom';
import { MeasurementPage } from './Routes/measurement/measurement.component';
import { YourShopPage } from './Routes/yourShop/yourShop.component';
import { HomePage } from './Routes/home/home.component';
import { TutorialPage } from './Routes/tutorial/tutorial.component';
import { useSelector } from 'react-redux';
import { selectMeasurements } from './store/measurements/measurements.selector';
import { ConfirmationPage } from './Routes/confirmation/confirmation.component';

function App() {
  const measurementSelector = useSelector(selectMeasurements)

  const ConfirmationBoolean = () => (
    measurementSelector !== undefined ?  true :  false
)

  return (
    <Routes>
    <Route path="/" element={<HomePage/>}/>
    <Route path='/tutorial' element={<TutorialPage/>}/>
    <Route path='/measurements' element={<MeasurementPage/>}/>
    <Route path="/yourShop"  element={<YourShopPage/>}/>
    <Route path="/confirmation" element={ConfirmationBoolean() ? <ConfirmationPage/> : <p>Error</p>}/>
  </Routes>
  );
}

export default App;
