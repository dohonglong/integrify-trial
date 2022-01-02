import React from 'react';
import Button from '@mui/material/Button';
import CardActions from '@mui/material/CardActions';
import Box from '@mui/material/Box';
import { Link } from "react-router-dom";

const MyCardActions = (props) => {

    return (

        <Box sx={{ display: 'flex', justifyContent: 'center' }}>
            <CardActions>
                <Link to={`/page/${props.id}`}>
                    <Button variant="contained">MORE DETAILS</Button>
                </Link>
            </CardActions>
        </Box>
    )
}

export default MyCardActions;