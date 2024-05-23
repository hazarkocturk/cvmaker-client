import React from 'react';
import { useNavigate } from 'react-router-dom';
import { UserAuth } from '../context/UserContext';

function Home() {

  const { user } = UserAuth();
  const Navigate = useNavigate();
  if(!user) {
    return <Navigate to="/login" replace={true}  />}
  return(
    <div className='w-3/4 min-h-[80vh] mx-auto my-24 pb-4 flex flex-col justify-center items-center shadow-xl rounded-2xl'>
      <h1>Welcome to Home Page</h1>
      

    </div>

  )
}

export default Home;
