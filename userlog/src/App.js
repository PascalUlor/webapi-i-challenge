import React, { useState, useEffect } from "react";
import axios from "axios";
import CharCard from "./components/CharCard";
import CharForm from "./components/CharForm";

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
        return error;
      });
  };
  const DeleteUser = id => {
    axios
      .delete(`${baseUrl}/${id}`)
      .then(res => {
        console.log("-----Working", res.data);
        FetchUsers();
      })
      .catch(err => {
        console.log("---------", err);
      });
  };

  useEffect(FetchUsers, []);

  return (
    <div className="App">
      <CharCard users={users} DeleteUser={DeleteUser} />
      <CharForm />
    </div>
  );
}

export default App;
