import React from 'react';
import {
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom";

import './App.css';
import Home from "./scenes/Home";
import AppBar from "./components/AppBar";
import Abilities from "./scenes/Abilities";
import Types from "./scenes/Types";



function App() {
  return (
      <BrowserRouter>
    <div className="App">
      <AppBar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/abilities' element={<Abilities />} />
          <Route path='/types' element={<Types />} />
        </Routes>
    </div>
      </BrowserRouter>
  );
}

export default App;
