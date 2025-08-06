import React, { useState } from 'react';

function CurrencyConvertor() {
  const [amount, setAmount] = useState('');
  const [currency, setCurrency] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (currency.toLowerCase() === 'euro') {
      const convertedAmount = parseFloat(amount) * 80;
      alert(`Converting to Euro Amount is ${convertedAmount}`);
    } else {
      alert('Please enter "Euro" as the currency');
    }
  };

  return (
    <div>
      <h2 style={{ color: 'green' }}>Currency Convertor!!!</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Amount: <input type="text" value={amount} onChange={(e) => setAmount(e.target.value)} />
        </label><br /><br />
        <label>
          Currency: <input type="text" value={currency} onChange={(e) => setCurrency(e.target.value)} />
        </label><br /><br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default CurrencyConvertor;
