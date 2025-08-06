import React, { useState } from 'react';
import './App.css';
import CurrencyConvertor from './CurrencyConvertor';

function App() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(prev => prev + 1);
    sayHello();
  };

  const decrement = () => {
    setCount(prev => prev - 1);
  };

  const sayHello = () => {
    alert('Hello from Increment!');
  };

  const sayWelcome = (message) => {
    alert(message);
  };

  const handleClick = () => {
    alert('I was clicked');
  };

  return (
    <div className="App">
      <h1>{count}</h1>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <button onClick={() => sayWelcome('welcome')}>Say welcome</button>
      <button onClick={handleClick}>Click on me</button>

      <CurrencyConvertor />
    </div>
  );
}

export default App;
