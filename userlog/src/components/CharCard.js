import React from "react";

const CharCard = props => {
  console.log("========", props);
  const { users, DeleteUser } = props;
  return (
    <div>
      {users.map(char => {
        return (
          <div key={char.id}>
            <p>{char.name}</p>
            <p>{char.bio}</p>
            <span>
              <button>Edit</button>
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
