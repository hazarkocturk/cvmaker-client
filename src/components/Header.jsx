import React from 'react';
import { useNavigate } from 'react-router-dom';
import { UserAuth } from '../context/UserContext';

const Header = () => {
  const { user, setUser } = UserAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    setUser(null);
    localStorage.removeItem('user');
    localStorage.removeItem('token');
    navigate('/login');
  }

  const handleLogin = () => {
    navigate('/login');
  }

  const handleSignup = () => {
    navigate('/signup');
  }

  return (
    <div>
      <nav className='w-full h-10 flex justify-between bg-slate-200 items-center px-4'>
        <h1>Logo</h1>
        <div>
          {user ? (
            <button onClick={handleLogout}>Logout</button>
          ) : (
            <div className='flex justify-between items-center gap-2'>
            <button onClick={handleLogin} >Login</button>
            <button onClick={handleSignup} >Signup</button>
            </div>
          )}
        </div>
      </nav>
    </div>
  );
}

export default Header;
