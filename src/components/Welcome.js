import React, { useState, useEffect } from 'react';
import ChatInterface from './chatBot';

//import { API_BASE_URL } from './config';
//fetch(`${API_BASE_URL}/handbooks`)
const WelcomePage = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <div className="flex-grow-1">
      <div className="card text-center rounded shadow-md my-3">
          <h1 className="card-title-bg mt-3">Hello! Welcome to Blazer</h1>
          <span className="subText">I am an AI assitant that can help answer any of your questions about AB tech</span>
          <span className="subText">I have been trained on over 3000 webpages from the AB tech website and the student handbook</span>
      </div>

      <div>
        <ChatInterface />
      </div>
    </div>
  );
};

export default WelcomePage;
