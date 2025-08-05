import React from 'react';

const EvenPlayers = ({ IndianTeam }) => {
  return (
    <div>
      <li>Second : {IndianTeam[1]}</li>
      <li>Fourth : {IndianTeam[3]}</li>
    </div>
  );
};

export default EvenPlayers;
