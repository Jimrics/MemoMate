import React from 'react'; // Import React (needed for JSX)
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import Amplify from 'aws-amplify';
import awsconfig from '../aws-exports.js'; // Ensure this path is correct

// Configure Amplify
Amplify.configure(awsconfig);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>
);
