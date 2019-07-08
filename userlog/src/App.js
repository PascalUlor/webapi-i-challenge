import React, { useState, useEffect } from "react";
import axios from "axios";

const baseUrl = `http://localhost:3000/api/users`;

function App() {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState([]);

  const FetchUsers = () => {
    axios
      .get(`${baseUrl}`)
      .then(res => {
        setUsers(res.data);
      })
      .catch(err => {
        setError(err.statusText);
      });
  };

  useEffect(() => {
    FetchUsers();
  }, []);

  return (
    <div className="App">
      {users.map(user => {
        return (
          <div>
            <p>{user.name}</p>
            <p>{user.bio}</p>
          </div>
        );
      })}
    </div>
  );
}

export default App;
