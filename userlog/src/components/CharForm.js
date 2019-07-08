import React from "react";

const CharForm = props => {
  const { UpdateChar, addChar, handleInputChange, newChar, IsEdit } = props;
  const Method = IsEdit ? UpdateChar : addChar;
  return (
    <form onSubmit={Method}>
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
