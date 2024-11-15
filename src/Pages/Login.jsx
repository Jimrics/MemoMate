import React, { useState } from 'react';
import { Auth } from 'aws-amplify';
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const user = await Auth.signIn(email, password);
      console.log('Login successful:', user);
      navigate('/menu'); // Redirect to the /menu route on successful login
    } catch (error) {
      alert(error.message || 'Login failed. Please try again.'); // Show an alert with the error message
    }
  };

  return (
    <div>
      <p>This is the login page</p>
      <input
        type="email"
        placeholder="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleLogin}>Login</button>
      <p>Got no account? Signup</p>
      <Link to="/signup">
        <button>Signup</button>
      </Link>
    </div>
  );
};

export default Login;
