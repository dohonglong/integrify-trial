import React from 'react';
import '../App.css';
import Card from '@mui/material/Card';
import Grid from '@mui/material/Grid';

import MyCardContent from '../components/CardContent';
import SearchBar from '../components/SearchBar';
import MyCardActions from '../components/CardActions';

const Home = (props) => {
    const input = props.input;
    const breweries = props.breweries;
    
    /*
    const setKeyword = (event) => {
        //console.log(breweries)
        const results = _.filter(breweries, 
            { 'brewery_type': event.target.value }
        );
        console.log(results);
    } */

    return (
        <div className="App">

            <SearchBar input={input} onChange={props.updateInput} />

            <Grid container>
                {
                breweries.map((brewery, index) =>
                    <Grid item xs={12} md={4} sm={6} key={index} sx={{ padding: '50px' }} >
                        <Card>
                            
                            <MyCardContent name={brewery.name} brewery_type={brewery.brewery_type} city={brewery.city}  />
                            
                            <MyCardActions id={brewery.id} />

                        </Card>
                    </Grid>
                  )
                }
                    
            </Grid>

        </div>
  );
}

export default Home;
