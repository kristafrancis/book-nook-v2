import logo from './logo.svg';
// import './index.css';
import Index from './pages/index';
import Login from '../src/pages/Login';
import Signup from '../src/components/SignupForm';
import Search from '../src/pages/Search';
import Profile from '../src/pages/Profile';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div>
       <Router>
        <div className="flex-column justify-flex-start min-100-vh">
          
          <div className="container">
            <Routes>
            <Route
                path="/"
                element={<Index />}
              />
              <Route
                path="/login"
                element={<Login />}
              />
              <Route
                path="/signup"
                element={<Signup />}
              />
              <Route
                path="/search"
                element={<Search />}
              />
              <Route
              path="/profile"
              elemnt={<Profile />} />
            </Routes>
          </div>
        </div>
      </Router>
    </div>
  );
}

export default App;
