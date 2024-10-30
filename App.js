import LogAdmin from './Dashboard/LogAdmin';
import UserProfilePage from './Profile/UserProfile';
import AdminPanel from './Dashboard/AdminPanel';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import MyHome from './components/MyHome';
import MyProfile from './components/MyProfile';
import ContactUs from './components/ContactUs';
import Nav from './components/Nav';

function App() {
  return (
    <Router>
      <Nav/>
      <div className="container">
        <Routes>
          <Route path="/" element={<MyHome/>}/>
          <Route path="/profile" element={<MyProfile/>}/>
          <Route path="/contact" element={<ContactUs/>}/>
          <Route path="*" element={<h2>404 Not Found</h2>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;