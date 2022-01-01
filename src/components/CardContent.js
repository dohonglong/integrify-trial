import React from 'react';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

function MyCardContent(props) {

    return (
        <CardContent>
            <Typography variant="h6">{props.name}</Typography>
            <Typography variant="h6">{props.brewery_type}</Typography>
            <Typography variant="h6">{props.city}</Typography>
        </CardContent>
    )
}

export default MyCardContent;