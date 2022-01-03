import React, { useEffect, useState } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import BreweryDetail from "./pages/BreweryDetail";

function App() {
  const [input, setInput] = useState("");
  const [breweriesDefault, setBreweriesDefault] = useState();
  const [breweries, setBreweries] = useState([]);

  //Fetch data
  useEffect(() => {
    fetch("https://api.openbrewerydb.org/breweries")
      .then((response) => response.json())
      .then((resData) => {
        setBreweriesDefault(resData);
        setBreweries(resData);
      });
  }, []);

  //Get the input from the search bar
  const setKeyword = (event) => {
    const result = event.target.value.toLowerCase();
    setInput(result);
    //console.log(result)
    return result;
  };

  //From the input, update the fetch data and show it on the page
  const updateInput = () => {
    breweriesDefault.forEach(function (object) {
      Object.keys(object).forEach(function (key) {
        if (object[key] === null) object[key] = " ";
      });
    });
    const filtered = breweriesDefault.filter((brewery) => {
      return (
        brewery.id.toLowerCase().includes(input.toLowerCase()) ||
        brewery.name.toLowerCase().includes(input.toLowerCase()) ||
        brewery.brewery_type.toLowerCase().includes(input.toLowerCase()) ||
        brewery.street.toLowerCase().includes(input.toLowerCase()) ||
        brewery.address_2.toLowerCase().includes(input.toLowerCase()) ||
        brewery.address_3.toLowerCase().includes(input.toLowerCase()) ||
        brewery.city.toLowerCase().includes(input.toLowerCase()) ||
        brewery.state.toLowerCase().includes(input.toLowerCase()) ||
        brewery.county_province.toLowerCase().includes(input.toLowerCase()) ||
        brewery.postal_code.toLowerCase().includes(input.toLowerCase()) ||
        brewery.country.toLowerCase().includes(input.toLowerCase()) ||
        brewery.longitude.toLowerCase().includes(input.toLowerCase()) ||
        brewery.latitude.toLowerCase().includes(input.toLowerCase()) ||
        brewery.phone.toLowerCase().includes(input.toLowerCase()) ||
        brewery.website_url.toLowerCase().includes(input.toLowerCase()) ||
        brewery.updated_at.toLowerCase().includes(input.toLowerCase()) ||
        brewery.created_at.toLowerCase().includes(input.toLowerCase())
      );
    });
    setBreweries(filtered);
  };

  //Prevent the enter button from re-render the page
  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route
            exact
            path="/"
            element={
              <Home
                breweries={breweries}
                breweriesDefault={breweriesDefault}
                input={input}
                setKeyword={setKeyword}
                updateInput={updateInput}
                handleSubmit={handleSubmit}
              />
            }
          />

          <Route
            path="/page/:id"
            element={<BreweryDetail breweries={breweries} />}
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
