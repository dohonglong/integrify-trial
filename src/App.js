import React, { useEffect, useState } from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from './components/Home';
import BreweryDetail from './components/BreweryDetail';

function App() {
  
  const [breweries, setBreweries] = useState([]);

  useEffect(() => {
    fetch('https://api.openbrewerydb.org/breweries')
      .then(response => response.json())
      .then(resData => setBreweries(resData))
  }, []);

  return (
    <BrowserRouter>
      <div>

        <Routes>
          
          <Route exact path="/" element={ <Home breweries={breweries} /> } />

          <Route path="/page/:id" element={ <BreweryDetail props={breweries} /> } />

        </Routes>
      </div>
    </BrowserRouter>

  );
}

export default App;
