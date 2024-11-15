import React, { useState } from 'react';
import { Auth } from 'aws-amplify';
import { useNavigate } from 'react-router-dom';

const Signup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmationCode, setConfirmationCode] = useState('');
  const [error, setError] = useState('');
  const [needsConfirmation, setNeedsConfirmation] = useState(false);
  const navigate = useNavigate();

  // Handle signup
  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      await Auth.signUp({
        username: email,
        password: password,
      });
      alert('Signup successful! A confirmation code has been sent to your email.');
      setNeedsConfirmation(true);
    } catch (err) {
      setError(err.message || 'Something went wrong');
    }
  };

  // Handle confirmation
  const handleConfirmation = async () => {
    try {
      await Auth.confirmSignUp(email, confirmationCode);
      alert('Email confirmed! Redirecting to login...');
      navigate('/login');
    } catch (err) {
      setError(err.message || 'Failed to confirm email');
    }
  };

  return (
    <div>
      <h2>Signup Page</h2>
      {!needsConfirmation ? (
        <form onSubmit={handleSignup}>
          <div>
            <label>Email:</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div>
            <label>Password:</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit">Sign Up</button>
        </form>
      ) : (
        <div>
          <h3>Confirm Your Email</h3>
          <p>Please enter the confirmation code sent to your email:</p>
          <input
            type="text"
            placeholder="Enter confirmation code"
            value={confirmationCode}
            onChange={(e) => setConfirmationCode(e.target.value)}
          />
          <button onClick={handleConfirmation}>Confirm Email</button>
        </div>
      )}
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </div>
  );
};

export default Signup;
