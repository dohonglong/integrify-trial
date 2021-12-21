import React, { useEffect, useState } from 'react';
import './App.css';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import Grid from '@mui/material/Grid';

import MyCardContent from './components/CardContent';
import MyButton from './components/Button';

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(resData => setUsers(resData))
  }, []);

  return (
    <div className="App">

      <Grid container spacing={5}>
        {
          users.map((user, index) =>
            <Grid item xs={3} key={index}>
              <Card>

                <MyCardContent 
                  name={user.name}
                  username={user.username}
                  website={user.website}
                />

                <CardActions class="justify-center">
                  <MyButton />
                </CardActions>

              </Card>
            </Grid>
          )
        }
            
      </Grid>

    </div>
  );
}

export default App;
