import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home'; 
import Login from './pages/Login';
import Signup from './pages/Signup'; 
import { UserProvider } from './context/UserContext';
import ProtectedRoute from './components/ProtectedRoute';


function App() {
  return (
    <>
      <UserProvider>
      <Routes>
        
        <Route path="/home" element={<ProtectedRoute>
        <Home />
        </ProtectedRoute>} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      
      </Routes>
      </UserProvider>
    </>
  );
}

export default App;
