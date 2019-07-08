import React from "react";

const CharCard = props => {
  const { chars, DeleteUser, GetCharsById } = props;
  return (
    <div>
      {chars.map(char => {
        return (
          <div key={char.id}>
            <p>{char.name}</p>
            <p>{char.bio}</p>
            <span>
              <button onClick={() => GetCharsById(char.id)}>Edit</button>
            </span>
            <span>
              <button onClick={() => DeleteUser(char.id)}>Delete</button>
            </span>
          </div>
        );
      })}
    </div>
  );
};

export default CharCard;
