import React from 'react';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';

function MyCardContent(props) {

    return (
        <CardContent>
            <Stack direction="row" justifyContent="center">
                <Avatar sx={{ width: 70, height: 70 }}>N</Avatar>
            </Stack>
            <Typography variant="h5">{props.name}</Typography>
            <Typography variant="subtitle1">@{props.username}</Typography>
            <Typography>http://{props.website}</Typography>
        </CardContent>
    )
}

export default MyCardContent;