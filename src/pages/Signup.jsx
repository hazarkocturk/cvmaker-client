import React, { useState } from 'react';

function Signup() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('username:', username);
    console.log('email:', email);
    console.log('password:', password);
    try {
      const response = await fetch('http://localhost:3000/api/user/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username: username,
          email: email,
          password: password,
        }),
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await response.json();
      console.log('Success:', data);
      setMessage('Signup successful!');
    } catch (error) {
      console.error('Error:', error);
      setMessage('Signup failed. Please try again.');
    }
  };

  return (
    <>
     <div className='w-3/4 min-h-[80vh] mx-auto my-24 pb-4 flex flex-col justify-center items-center shadow-xl rounded-2xl'>
        <h2 className='text-3xl font-bold mb-10'>Sign Up</h2>
        <form onSubmit={handleSubmit} className='flex flex-col w-[300px] space-y-2'>
          <div className='flex flex-col'>
            <label className='mb-1'>
              Username:
            </label>
            <input className='border-2 border-gray-300 rounded-md p-1'
              type="text"
              name="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className='flex flex-col'>
            <label className='mb-1'>
              Email:
            </label>
            <input className='border-2 border-gray-300 rounded-md p-1'
              type="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className='flex flex-col'>
            <label className='mb-1'>
              Password:
            </label>
            <input className='border-2 border-gray-300 rounded-md p-1'
              type="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button className='bg-blue-500 text-white rounded-md p-2' type="submit">Signup</button>
        </form>
        {message && <p className='mt-4'>{message}</p>}
      </div>
    </>
  );
}

export default Signup;
