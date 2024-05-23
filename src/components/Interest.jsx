import { useState } from 'react';  
import { Link } from 'react-router-dom';
import { UserAuth } from '../context/UserContext';

const Interest = () => {
  const { user } = UserAuth();
  const id = user?.id;
  const [skill_name, setSkill_name] = useState('');
  const [message, setMessage] = useState('');

  const submitSkills = async (e) => {
    e.preventDefault();
    if (!skill_name) {
      setMessage('Please fill in all fields.');
      return;
    }
    
    try {
      const res = await fetch(`http://localhost:3000/api/interest/${id}`, {
        method: 'POST',
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          skill_name,
        })
      });

      if (!res.ok) {
        throw new Error('Failed to add skill');
      }

      const data = await res.json();
      console.log(data);
      setMessage('Interest added successfully!');
      setSkill_name('');
    } catch (err) {
      console.log(err);
      setMessage('An error occurred while adding the insterest.');
    }
  }

  return (
    <div className='w-3/4 min-h-[80vh] mx-auto my-24 pb-4 flex flex-col justify-center items-center shadow-xl rounded-2xl'>
      <h2 className='text-3xl font-bold mb-10'>Add Interest</h2>
      <form onSubmit={submitSkills} className='flex flex-col w-[300px] space-y-2'>
        <div className='flex flex-col'>
          <label className='mb-1'>
            Interests:
          </label>
          <input 
            className='border-2 border-gray-300 rounded-md p-1'
            type="text"
            name="skill_name"
            value={skill_name}
            onChange={(e) => setSkill_name(e.target.value)}
          />
        </div>
        
        <button className='bg-blue-500 text-white p-2 rounded-md'>Add Interest</button>
      </form>
      {message && <p className='mt-4'>{message}</p>}
      <Link to='/home' className='text-blue-500 mt-5'>Back to Home</Link>
    </div>
  );
}

export default Interest;
