import React, { useState, useEffect } from 'react';
import ChatInterface from './chatBot';

//import { API_BASE_URL } from './config';
//fetch(`${API_BASE_URL}/handbooks`)
const WelcomePage = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <div className="flex-grow-1">
      <div className="card mt-3 text-center rounded shadow">
          <h1 className="card-title-bg mt-3">Welcome to handyBook</h1>
      </div>

      <div>
        <ChatInterface />
      </div>
    </div>
  );
};

export default WelcomePage;
