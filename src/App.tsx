import React, {useState, useEffect} from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from './components/Login';
import Users from './components/Users';


function App() {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);

  return (
    <div >
      <Router>
        <Routes>
          <Route path='/login' element={!isLoggedIn ? <Login /> : <Navigate replace to='/'/>}/>
          <Route path='/login' element={!isLoggedIn ? <Users /> : <Navigate replace to='/login'/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
