import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Home from './pages/Home'; 
import Login from './pages/Login';
import Signup from './pages/Signup'; 
import Skills from './components/Skills';
import { UserAuth } from './context/UserContext';
import ProtectedRoute from './components/ProtectedRoute';
import Header from './components/Header';

const AppRoutes = () => {
  const { loading } = UserAuth();

  if (loading) {
    return <div>Loading...</div>; 
  }

  return (

    <>
    <Header />
    <Routes>
      <Route path="/" element={<Navigate to="/home" />} />
      <Route path="/home" element={<ProtectedRoute><Home /></ProtectedRoute>} />
      <Route path="/skills" element={<ProtectedRoute><Skills /></ProtectedRoute>} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
    </Routes>
    </>
  );
};

export default AppRoutes;
