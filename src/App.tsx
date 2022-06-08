import './App.css';
import { Route, Routes } from 'react-router-dom';
import { MeasurementPage } from './Routes/measurement/measurement.component';
import { YourShopPage } from './Routes/yourShop/yourShop.component';
import { HomePage } from './Routes/home/home.component';
import { TutorialPage } from './Routes/tutorial/tutorial.component';

function App() {
  return (
    <Routes>
    <Route path="/" element={<HomePage/>}/>
    <Route path='/tutorial' element={<TutorialPage/>}/>
    <Route path='/measurements' element={<MeasurementPage/>}/>
    <Route path="/yourShop"  element={<YourShopPage/>}/>
  </Routes>
  );
}

export default App;
