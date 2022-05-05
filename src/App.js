import './App.css';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';

import Tienda from './components/tienda';
import Nosotros from './components/nosotros';
import Home from './components/home';
import NavBarExample from './layouts/navbar';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<NavBarExample/>}>
        <Route index element={ <Home/>} />
          <Route path='tienda' element={ <Tienda/>} />
          <Route path='nosotros' element={ <Nosotros/>} />

          <Route path='*' element={<Navigate replace to="/"/>}/>

        </Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
