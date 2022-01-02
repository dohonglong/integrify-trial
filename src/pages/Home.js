import React from 'react';
import '../App.css';
import Card from '@mui/material/Card';
import Grid from '@mui/material/Grid';

import SearchBar from '../components/SearchBar';
import MyCardContent from '../components/CardContent';
import MyCardActions from '../components/CardActions';

const Home = (props) => {
    const input = props.input;
    const breweries = props.breweries;
    
    return (
        <div className="App">

            <SearchBar input={input} onChange={props.setKeyword} onClick={props.updateInput} />

            <Grid container>
                {
                breweries.map((brewery, index) =>
                    <Grid item xs={12} md={4} sm={6} key={index} sx={{ padding: '50px' }} >
                        <Card key={brewery.id}>
                            
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
