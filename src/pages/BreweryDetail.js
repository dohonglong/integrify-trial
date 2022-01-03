import React from 'react';
import { useParams, useNavigate } from "react-router-dom";
import Card from '@mui/material/Card';
import Grid from '@mui/material/Grid';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';

const BreweryDetail = ( {props} ) => {

    const { id } = useParams();
    const navigate = useNavigate();

    function handleClick() {
        navigate("/");
    }
    
    return (
        <div style={{ backgroundColor: '#F2F3F4', minHeight:'78vh', padding: '100px' }}>
            {
                props
                    .filter((list) => list.id === id)
                    .map((list) => (
                        <Grid key={list.id} container direction="column" alignItems="center" justify="center">
                            <Card>
                                <CardContent align="center">
                                    <Typography variant="h5" sx={{padding: '30px'}} >Showing detail about each brewery</Typography>
                                    <Typography variant="body1"><b>Name</b>: {list.name}</Typography>
                                    <Typography variant="body1"><b>Brewery Type</b>: {list.brewery_type}</Typography>
                                    <Typography variant="body1"><b>Street</b>: {list.street}</Typography>
                                    <Typography variant="body1"><b>Address 2</b>: {list.address_2}</Typography>
                                    <Typography variant="body1"><b>Address 3</b>: {list.address_3}</Typography>
                                    <Typography variant="body1"><b>City</b>: {list.city}</Typography>
                                    <Typography variant="body1"><b>State</b>: {list.state}</Typography>
                                    <Typography variant="body1"><b>County Province</b>: {list.county_province}</Typography>
                                    <Typography variant="body1"><b>Postal Code</b>: {list.postal_code}</Typography>
                                </CardContent>
                                <CardActions sx={{ display: 'flex', justifyContent: 'center', padding: '30px' }}>
                                    <Button size="large" variant="contained" onClick={handleClick}>Go back</Button>
                                </CardActions>
                                
                            </Card>
                        </Grid>
                    ))
            }
        </div>
    );
    
}

export default BreweryDetail;

