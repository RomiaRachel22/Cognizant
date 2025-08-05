import React from 'react';

function App() {
  const players = [
    { name: 'Mr. Jack', score: 50 },
    { name: 'Mr. Michael', score: 70 },
    { name: 'Mr. John', score: 40 },
    { name: 'Mr. Ann', score: 61 },
    { name: 'Mr. Elisabeth', score: 61 },
    { name: 'Mr. Sachin', score: 95 },
    { name: 'Mr. Dhoni', score: 100 },
    { name: 'Mr. Virat', score: 84 },
    { name: 'Mr. Jadeja', score: 64 },
    { name: 'Mr. Raina', score: 75 },
    { name: 'Mr. Rohit', score: 80 },
  ];

  const indianPlayers = ['Sachin', 'Dhoni', 'Virat', 'Yuvraj', 'Rohit', 'Raina'];

  const flag = false;

  const lessThan70 = players.filter(p => p.score < 70);

  const oddPlayers = indianPlayers.filter((_, i) => i % 2 === 0);
  const evenPlayers = indianPlayers.filter((_, i) => i % 2 !== 0);

  const mergedPlayers = [
    'First Player',
    'Second Player',
    'Third Player',
    'Fourth Player',
    'Fifth Player',
    'Sixth Player'
  ];

  return (
    <div style={{ padding: '20px' }}>
      <h1>List of Players</h1>
      <ul>
        {players.map((p, i) => (
          <li key={i}>{p.name} {p.score}</li>
        ))}
      </ul>

      <hr />

      <h2>List of Players having Scores Less than 70</h2>
      <ul>
        {lessThan70.map((p, i) => (
          <li key={i}>{p.name} - {p.score}</li>
        ))}
      </ul>

      <hr />

      {!flag && (
        <>
          <h2>Odd Players</h2>
          <ul>
            {oddPlayers.map((name, i) => (
              <li key={i}>{`${
                ['First', 'Third', 'Fifth'][i]
              } : ${name}${i * 2 + 1}`}</li>
            ))}
          </ul>

          <h2>Even Players</h2>
          <ul>
            {evenPlayers.map((name, i) => (
              <li key={i}>{`${
                ['Second', 'Fourth', 'Sixth'][i]
              } : ${name}${i * 2 + 2}`}</li>
            ))}
          </ul>

          <h2>List of Indian Players Merged:</h2>
          <ul>
            {mergedPlayers.map((name, i) => (
              <li key={i}>Mr. {name}</li>
            ))}
          </ul>
        </>
      )}
    </div>
  );
}

export default App;
