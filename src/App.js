import './App.css';
import React from 'react';
import { Route } from 'react-router-dom';
import Home from './pages/Home/Index';
import Blog from './pages/Blog/Index';
import { BrowserRouter, Routes } from 'react-router-dom';
import  {Login} from './pages/Login/Index';
import { Register } from './pages/Register/Index';
import Contact from './pages/Contact/Index';
function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/home' Component={Home} />
          <Route path='/blog/:id' Component={Blog} />
          <Route path='/login' Component={Login} />
          <Route path='/login' Component={Login} />
          <Route path='/register' Component={Register} />
          <Route path='/contact' Component={Contact} />
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
