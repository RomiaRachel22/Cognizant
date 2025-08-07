import React, { useState } from 'react';

function LoginButton(props) {
  return (
    <button onClick={props.onClick}>
      Login
    </button>
  );
}

function LogoutButton(props) {
  return (
    <button onClick={props.onClick}>
      Logout
    </button>
  );
}

function GuestPage() {
  return (
    <div>
      <h2>Available Flights</h2>
      <ul>
        <li>✈️ Chennai to Delhi - 10:00 AM</li>
        <li>✈️ Mumbai to Bangalore - 1:00 PM</li>
        <li>✈️ Hyderabad to Kolkata - 5:00 PM</li>
      </ul>
      <p>Please login to book your tickets.</p>
    </div>
  );
}

function UserPage() {
  return (
    <div>
      <h2>Book Your Flight</h2>
      <p>Welcome! You can now book your flights.</p>
      <button>Book Chennai to Delhi</button>
      <button>Book Mumbai to Bangalore</button>
    </div>
  );
}

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLoginClick = () => {
    setIsLoggedIn(true);
  };

  const handleLogoutClick = () => {
    setIsLoggedIn(false);
  };

  let button;
  let page;

  if (isLoggedIn) {
    button = <LogoutButton onClick={handleLogoutClick} />;
    page = <UserPage />;
  } else {
    button = <LoginButton onClick={handleLoginClick} />;
    page = <GuestPage />;
  }

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>✈️ Ticket Booking App</h1>
      {button}
      {page}
    </div>
  );
}

export default App;
