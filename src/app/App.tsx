import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Ninja, Agify } from '../pages';
import './App.scss';

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Ninja/>}/>
          <Route path='/2' element={<Agify/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
