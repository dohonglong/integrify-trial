import React, { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(resData => setUsers(resData))
  }, []);

  return (
    <div className="App">
      <table>
        <tbody>
          {
            users.map((user, index) => 
              <tr key={index}>
                <td>{user.name}</td>
                <td>{user.username}</td>
                <td>http://{user.website}</td>
              </tr>
            )
          }
        </tbody>
      </table>
    </div>
  );
}

export default App;
