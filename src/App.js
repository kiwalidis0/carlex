import logo from './logo.svg';
import './App.css';
import ActParent from './Act1Parent';
import ActChild1 from './ActChild1';
import ActChild2 from './ActChild2';
import ActChild3 from './ActChild3';
import LoginForm from './LoginForm/loginForm';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import LogAdmin from './Dashboard/LogAdmin';
import AuthError from './Dashboard/AuthError';

function App() {
  return (
   <Router>
    <Routes>
      <Route path="/" element = {<LogAdmin/>}/>
      <Route path="/auth-error" element={<AuthError/>}/>

    </Routes>
   </Router>
  );
}

export default App;