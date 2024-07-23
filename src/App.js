import './App.css';
import React from 'react';
import { Route } from 'react-router-dom';
import Home from './pages/Home/Index';
import Blog from './pages/Blog/Index';
import { BrowserRouter, Routes } from 'react-router-dom';
function App() {
  return (
    <div className='container' >
      <BrowserRouter>
        <Routes>
          <Route path='/home' Component={Home} />
          <Route path='/blog/:id' Component={Blog} />
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
