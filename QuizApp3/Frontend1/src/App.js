//import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import Login from './Components/Login';
import Admin from './Components/Admin';
import Quiz from './Components/Quiz';
import Welcome from './Components/Welcome';
import AdminLogin from './Components/AdminLogin';

function App() {
  return (
    <div className="Login">
     <Router>
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/Admin" element={<Admin />} />
        <Route path="/Candidate" element={<Quiz/>} />
        <Route path="/CandidateLogin" element={<Login/>} />
        <Route path="/AdminLogin" element={<AdminLogin/>} />
       </Routes>
     </Router>
    </div>
  );
}

export default App;