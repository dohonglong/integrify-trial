import React from "react";
import "../App.css";
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";

import SearchBar from "../components/SearchBar";
import MyCardContent from "../components/CardContent";
import MyCardActions from "../components/CardActions";

const Home = ({ input, breweries, setKeyword, updateInput, handleSubmit }) => {
  return (
    <div className="App" style={{ minHeight: "100vh" }}>
      <SearchBar
        input={input}
        onChange={setKeyword}
        onClick={updateInput}
        onSubmit={handleSubmit}
      />
      <Grid container>
        {breweries.map((brewery, index) => (
          <Grid item xs={12} md={4} sm={6} key={index} sx={{ padding: "30px" }}>
            <Card key={brewery.id}>
              <MyCardContent
                name={brewery.name}
                brewery_type={brewery.brewery_type}
                city={brewery.city}
              />
              <MyCardActions id={brewery.id} />
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default Home;
