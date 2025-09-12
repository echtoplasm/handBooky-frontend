import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const updateUserProfile = async () => {
  const updateUserModal = (
    <div>
      <form>
        <h1>Update profile</h1>
        <div>
          <div className="form-floating mb-3">
            <input className="form-control" type="text" placeholder="Username" />
            <label for="floatingInput">Username</label>
          </div>
          <div className="form-floating mb-3">
            <input className="form-control" type="text" placeholder="First Name" />
            <label for="floatingInput">First Name</label>
          </div>
          <div className="form-floating mb-3">
            <input className="form-control" type="text" placeholder="Last Name" />
            <label for="floatingInput">Last Name</label>
          </div>
          <div className="form-floating mb-3">
            <input className="form-control" type="text" placeholder="Email" />
            <label for="floatingInput">Email</label>
          </div>
        </div>
      </form>
    </div>
  );
};

const deleteUserProfile = () => {};

const LoggedInProfile = () => {
  const [userData, setUserData] = null;

  const fetchData = async () => {
    try {
      const response = await fetch('/users/:id', {
            });
    } catch (err) {
      console.error('Unable to fetch user data from the endpoint', err.mesage);
    }
  };

  return (
    <div>
      <h1>Logged in profile component</h1>
    </div>
  );
};

const NotLoggedInProfile = () => {
  const navigate = useNavigate();

  const handleSignUpRedirect = () => {
    navigate('users/new');
  };

  return (
    <div className="card p-5 text-center">
      <h1>If you have an account please sign in</h1>
      <div className="card rounded shadow-sm p-5">
        <h2>Sign in</h2>
        <div className="form-floating mb-3">
          <input className="form-control" type="text" placeholder="Username" />
          <label for="floatingInput">Username</label>
        </div>
        <div className="form-floating mb-3">
          <input className="form-control" type="text" placeholder="Password" />
          <label for="floatingInput">Password</label>
        </div>
      </div>
      <div>
        <button className="btn btn-primary rounded" onClick={handleSignUpRedirect}>
          Sign up
        </button>
      </div>
    </div>
  );
};

export { LoggedInProfile, NotLoggedInProfile };
