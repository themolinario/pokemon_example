import React from 'react';
import {
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom";

import './App.css';
import Home from "./scenes/Home";
import AppBar from "./components/AppBar";
import PokemonDetail from "./scenes/PokemonDetail";



function App() {
  return (
      <BrowserRouter>
    <div className="App">
      <AppBar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/:name' element={<PokemonDetail />} />
        </Routes>
    </div>
      </BrowserRouter>
  );
}

export default App;
