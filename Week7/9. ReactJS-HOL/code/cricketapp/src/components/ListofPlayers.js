import React from 'react';

const ListofPlayers = ({ players }) => {
  return (
    <>
      {players.map((item, index) => (
        <div key={index}>
          <li>
            Mr. {item.name} <span> {item.score} </span>
          </li>
        </div>
      ))}
    </>
  );
};

export default ListofPlayers;
