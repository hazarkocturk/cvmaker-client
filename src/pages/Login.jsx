import React, { useState } from 'react';
import { UserAuth } from '../context/UserContext';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const { setUser } = UserAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:3000/api/user/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await response.json();

      localStorage.setItem('user', JSON.stringify(data));
      localStorage.setItem('token', data.accessToken);

      setUser(data);
      setMessage('Login successful!');
    } catch (error) {
      setMessage('Login failed. Please try again.');
    }
  };

  return (
    <div className='w-full mx-auto my-9 flex flex-col justify-center items-center'>
      <h2 className='text-3xl font-bold mb-10'>Login</h2>
      <form onSubmit={handleSubmit} className='flex flex-col w-[300px] space-y-2'>
        <div className='flex flex-col'>
          <label className='mb-1'>Email:</label>
          <input
            className='border-2 border-gray-300 rounded-md p-1'
            type="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className='flex flex-col'>
          <label className='mb-1'>Password:</label>
          <input
            className='border-2 border-gray-300 rounded-md p-1'
            type="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button className='bg-blue-500 text-white rounded-md p-2' type="submit">Login</button>
      </form>
      {message && <p className='mt-4'>{message}</p>}
    </div>
  );
}

export default Login;
