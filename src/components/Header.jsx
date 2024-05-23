import React, { useEffect, useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { UserAuth } from '../context/UserContext';

const Header = () => {
  const { user, setUser } = UserAuth();
  const navigate = useNavigate();
  const [dropdownOpen, setDropdownOpen] = useState(false);

  useEffect(() => {
    setDropdownOpen(false);
  },[user]);

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

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  }

  return (
    <div>
      <nav className='w-full h-16 flex justify-between bg-slate-100 items-center px-4 fixed z-20 top-0 shadow'>
        <h1 className='text-xl font-bold'>LOGO</h1>
        <div>
          {user ? (
            <div className='flex items-center gap-4'>
              <h2>{user.username}</h2>
              <div className='relative'>
                <button onClick={toggleDropdown} className='bg-gray-300 p-2 rounded hover:bg-gray-500'>Menu</button>
                {dropdownOpen && (
                  <ul className='absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded shadow-lg'>
                    <li><Link to='/qualifications' className='block px-4 py-2 hover:bg-gray-100'>Qualifications</Link></li>
                    <li><Link to='/skills' className='block px-4 py-2 hover:bg-gray-100'>Skills</Link></li>
                    <li><Link to='/languages' className='block px-4 py-2 hover:bg-gray-100'>Languages</Link></li>
                    <li><Link to='/interests' className='block px-4 py-2 hover:bg-gray-100'>Interests</Link></li>
                    <li><Link to='/user-info' className='block px-4 py-2 hover:bg-gray-100'>User Info</Link></li>
                    <li><Link to='/reference' className='block px-4 py-2 hover:bg-gray-100'>Reference</Link></li>
                    <li><Link to='/experience' className='block px-4 py-2 hover:bg-gray-100'>Experience</Link></li>
                    <li><button onClick={handleLogout} className='block w-full text-left px-4 py-2 hover:bg-gray-100'>Log Out</button></li>
                  </ul>
                )}
              </div>
            </div>
          ) : (
            <div className='flex items-center gap-4'>
              <button onClick={handleLogin} className='bg-blue-400 p-2 rounded'>Log In</button>
              <button onClick={handleSignup} className='bg-red-400 p-2 rounded'>Sign Up</button>
            </div>
          )}
        </div>
      </nav>
    </div>
  );
}

export default Header;
