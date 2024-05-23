import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Home from './pages/Home'; 
import Login from './pages/Login';
import Signup from './pages/Signup'; 
import Skills from './components/Skills';
import UserInfo from './components/UserInfo';
import Reference from './components/Reference';
import Languages from './components/Languages';
import Interest from './components/Interest';
import Qualifications from './components/Qualifications';
import Experience from './components/Experience';
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
      <Route path="/experience" element={<ProtectedRoute><Experience /></ProtectedRoute>} />
      <Route path="/reference" element={<ProtectedRoute><Reference /></ProtectedRoute>} />
      <Route path="/user-info" element={<ProtectedRoute><UserInfo /></ProtectedRoute>} />
      <Route path="/interests" element={<ProtectedRoute><Interest /></ProtectedRoute>} />
      <Route path="/languages" element={<ProtectedRoute><Languages /></ProtectedRoute>} />
      <Route path="/qualifications" element={<ProtectedRoute><Qualifications /></ProtectedRoute>} />
      <Route path="/skills" element={<ProtectedRoute><Skills /></ProtectedRoute>} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
    </Routes>
    </>
  );
};

export default AppRoutes;
