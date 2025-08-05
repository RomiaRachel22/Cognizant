import React from 'react';

const Scorebelow70 = ({ players }) => {
  const players70 = players.filter((item) => item.score <= 70);

  return (
    <>
      {players70.map((item, index) => (
        <li key={index}>
          Mr. {item.name} - {item.score}
        </li>
      ))}
    </>
  );
};

export default Scorebelow70;
