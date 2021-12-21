import React from 'react';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

function MyCardContent(props) {

    return (
        <CardContent>
            <Typography variant="h5">{props.name}</Typography>
            <Typography variant="subtitle1">{props.username}</Typography>
            <Typography>http://{props.website}</Typography>
        </CardContent>
    )
}

export default MyCardContent;