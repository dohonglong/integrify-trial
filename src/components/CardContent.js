import React from 'react';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

function MyCardContent(props) {
    return (
        <CardContent sx={{ paddingTop: '30px' }} >
            <Typography variant="h6" sx={{ fontWeight: 'bold' }}>{props.name}</Typography>
            <Typography variant="h6">{props.brewery_type}</Typography>
            <Typography variant="h6">{props.city}</Typography>
        </CardContent>
    )
}

export default MyCardContent;