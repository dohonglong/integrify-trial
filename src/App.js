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

  const setKeyword = (event) => {
    const result = event.target.value.toLowerCase();
    setInput(result);
    console.log(result)
    return result;
    
  }

  const updateInput = () => {
    const filtered = breweriesDefault.filter(entry => 
      Object.values(entry).some(value => typeof value === "string" && value.includes(input)));
    //setInput(input)
    setBreweries(filtered)
    //console.log(filtered)
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
              setKeyword={setKeyword}
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
