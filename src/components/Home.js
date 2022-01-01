import React from 'react';
import '../App.css';
import Card from '@mui/material/Card';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import CardActions from '@mui/material/CardActions';
import Box from '@mui/material/Box';
import { Link } from "react-router-dom";


import MyCardContent from './CardContent';
import SearchBar from './SearchBar';

function Home(props) {
    const breweries = props.breweries;

    return (
        <div className="App">

            <SearchBar />

            <Grid container>
                {
                breweries.map((brewery, index) =>
                    <Grid item xs={12} md={4} sm={6} key={index} sx={{ padding: '50px' }} >
                        <Card>
                            
                            <MyCardContent name={brewery.name} brewery_type={brewery.brewery_type} city={brewery.city}  />
                            
                            <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                                <CardActions>
                                    <Link to={`/page/${brewery.id}`}>
                                        <Button variant="contained">MORE DETAILS</Button>
                                    </Link>   
                                </CardActions>
                            </Box>

                        </Card>
                    </Grid>
                  )
                }
                    
            </Grid>

        </div>
  );
}

export default Home;
