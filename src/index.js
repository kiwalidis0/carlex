import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Registration from './Registration';  // Import the Registration component
import reportWebVitals from './reportWebVitals';
import Expressionjsx from './Expressionjsx';
import GreetHello from './Greetings/GreetHello';
import UserGreetings from './Conditionals/UserGreetings';
import Homepage from './Conditionals/Homepage';
import AdminPanel from './Dashboard/AdminPanel';
import LogAdmin from './Dashboard/LogAdmin';
import LoginForm from './LoginForm/loginForm';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();