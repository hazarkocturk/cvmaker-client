import React from 'react';
import { useNavigate } from 'react-router-dom';
import { UserAuth } from '../context/UserContext';

function Home() {

  const { user } = UserAuth();
  const Navigate = useNavigate();
  if(!user) {
    return <Navigate to="/login" replace={true}  />}
  return(
    <div>
      <h1>Welcome to Home Page, <span>{user.username}</span></h1>
      

    </div>

  )
}

export default Home;
