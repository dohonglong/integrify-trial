import React from 'react';
import Button from '@mui/material/Button';
import CardActions from '@mui/material/CardActions';
import Box from '@mui/material/Box';
import { Link } from "react-router-dom";

function MyCardActions() {
    return (

        <Box sx={{ display: 'flex', justifyContent: 'center' }}>
            <CardActions>
                <Link to={`/page/${1+3}`}>
                    <Button variant="contained">MORE DETAILS</Button>
                </Link>

                
            </CardActions>
        </Box>
    )
}

export default MyCardActions;