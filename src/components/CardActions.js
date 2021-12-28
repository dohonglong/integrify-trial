import React from 'react';
import Button from '@mui/material/Button';
import CardActions from '@mui/material/CardActions';
import Box from '@mui/material/Box';

function MyCardActions() {
    return (

        <Box sx={{ display: 'flex', justifyContent: 'center' }}>
            <CardActions>
                <Button variant="contained">MORE DETAILS</Button>
            </CardActions>
        </Box>
    )
}

export default MyCardActions;