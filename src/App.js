import React, { useEffect, useState } from 'react';
import './App.css';
import Card from '@mui/material/Card';
import Grid from '@mui/material/Grid';

import MyCardActions from './components/CardActions';
import MyCardContent from './components/CardContent';

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(resData => setUsers(resData))
  }, []);

  return (
    <div className="App">

      <Grid container>
        {
          users.map((user, index) =>
            <Grid item xs={12} md={3} sm={6} key={index} sx={{ padding: '50px' }} >
              <Card>
                
                <MyCardContent name={user.name} username={user.username}  website={user.website}  />
                <MyCardActions />

              </Card>
            </Grid>
          )
        }
            
      </Grid>

    </div>
  );
}

export default App;
