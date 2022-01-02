import React, { useEffect, useState } from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from './pages/Home';
import BreweryDetail from './pages/BreweryDetail';

function App() {
  const [input, setInput] = useState('');
  const [breweriesDefault, setBreweriesDefault] = useState();
  const [breweries, setBreweries] = useState([]);

  useEffect(() => {
    fetch('https://api.openbrewerydb.org/breweries')
      .then(response => response.json())
      .then(resData => {
        setBreweriesDefault(resData)
        setBreweries(resData)
    })
  }, []);

  const updateInput = (input) => {
    const filtered = breweriesDefault.filter(brewery => {
      return brewery.brewery_type.toLowerCase().includes(input.toLowerCase())
    })
    setInput(input)
    setBreweries(filtered);
  }

  return (
    <BrowserRouter>
      <div>

        <Routes>
          
          <Route exact path="/" element={ 
            <Home 
              breweries={breweries} 
              breweriesDefault={breweriesDefault} 
              input={input} 
              updateInput={updateInput} 
            /> 
          } />

          <Route path="/page/:id" element={ 
            <BreweryDetail
              props={breweries}
            /> 
          } />

        </Routes>
      </div>
    </BrowserRouter>

  );
}

export default App;
