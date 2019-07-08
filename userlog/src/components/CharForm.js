import React, { useState } from "react";
import axios from "axios";

const baseUrl = `http://localhost:3000/api/users`;

const CharForm = () => {
  const [newChar, setNewChar] = useState({
    name: "",
    bio: ""
  });

  const addChar = event => {
    let CharDeet = {
      name: newChar.name,
      bio: newChar.bio
    };
    axios
      .post(`${baseUrl}`, CharDeet)
      .then(res => {})
      .catch(err => console.log(err));
    setNewChar({
      name: "",
      bio: ""
    });
  };

  const handleInputChange = e => {
    const target = e.target;
    const value = target.value;
    const name = target.name;
    setNewChar(newChar => ({ ...newChar, [name]: value }));
  };

  return (
    <form onSubmit={addChar}>
      <input
        type="text"
        value={newChar.name}
        onChange={handleInputChange}
        name="name"
      />
      <textarea
        type="text"
        value={newChar.bio}
        onChange={handleInputChange}
        name="bio"
      />
    </form>
  );
};

export default CharForm;
