import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const EmailVerification = () => {
  const [status, setStatus] = useState('verifying');
  const [message, setMessage] = useState('');
  const { userId, token } = useParams();

  useEffect(() => {
    const verifyEmail = async () => {
      try {
        const response = await fetch(`http://localhost:5000/verify-email/${userId}/${token}`);
        const data = await response.json();

        if (response.ok) {
          setStatus('success');
          setMessage(data.message);
        } else {
          setStatus('error');
          setMessage(data.message);
        }
      } catch (err) {
        setStatus('error');
        setMessage('Network error. Please try again.');
      }
    };

    verifyEmail();
  }, [userId, token]);

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className={`alert ${status === 'success' ? 'alert-success' : 
                                   status === 'error' ? 'alert-danger' : 'alert-info'}`}>
            {status === 'verifying' && 'Verifying your email...'}
            {status !== 'verifying' && message}
          </div>
          
          {status === 'success' && (
            <a href="/login" className="btn btn-primary">
              Continue to Login
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default EmailVerification;
