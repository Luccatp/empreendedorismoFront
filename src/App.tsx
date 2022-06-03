import './App.css';
import { Route, Routes } from 'react-router-dom';
import { HomePage } from './Routes/home/home.component';
import { YourShopPage } from './Routes/yourShop/yourShop.component';

function App() {
  return (
    <Routes>
    <Route path="/" element={<HomePage/>}/>
    <Route path="/yourShop"  element={<YourShopPage/>}/>
  </Routes>
  );
}

export default App;
