import { useState } from 'react';  
import { Link } from 'react-router-dom';
import { UserAuth } from '../context/UserContext';

const Qualifications = () => {
  const { user } = UserAuth();
  const id = user?.id;
  const [city, setCity] = useState('');
  const [school_name, setSchool_name] = useState('');
  const [start_date, setStart_date] = useState('');
  const [end_date, setEnd_date] = useState('');
  const [description, setDescription] = useState('');
  const [degree_name, setDegree_name] = useState('');
  const [message, setMessage] = useState('');

  const submitUserInfo = async (e) => {
    e.preventDefault();
    if (!city || !school_name || !start_date || !end_date || !description || !degree_name) {
      setMessage('Please fill in all fields.');
      return;
    }
    
    try {
      const res = await fetch(`http://localhost:3000/api/qualifications/${id}`, {
        method: 'POST',
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          city,
          school_name,
          start_date,
          end_date,
          description,
          degree_name
        })
      });

      if (!res.ok) {
        throw new Error('Failed to add qualification');
      }

      const data = await res.json();
      console.log(data);
      setMessage('Qualification added successfully!');
      setCity('');
      setSchool_name('');
      setStart_date('');
      setEnd_date('');
      setDescription('');
      setDegree_name('');
      
    } catch (err) {
      console.log(err);
      setMessage('An error occurred while adding the qualification.');
    }
  }

  return (
    <div className='w-3/4 min-h-[80vh] mx-auto my-24 pb-4 flex flex-col justify-center items-center shadow-xl rounded-2xl '>
      <h2 className='text-3xl font-bold mb-10'>Add Qualification</h2>
      <form onSubmit={submitUserInfo} className='flex flex-col w-[300px] space-y-2'>
        <div className='flex flex-col'>
          <label className='mb-1'>
            City:
          </label>
          <input 
            className='border-2 border-gray-300 rounded-md p-1'
            type="text"
            value={city}
            onChange={(e) => setCity(e.target.value)}
          />
        </div>
        <div className='flex flex-col'>
          <label className='mb-1'>
            School Name:
          </label>
          <input 
            className='border-2 border-gray-300 rounded-md p-1'
            type="text"
            value={school_name}
            onChange={(e) => setSchool_name(e.target.value)}
          />
        </div>
        <div className='flex flex-col'>
          <label className='mb-1'>
            Start Date:
          </label>
          <input 
            className='border-2 border-gray-300 rounded-md p-1'
            type='date'
            value={start_date}
            onChange={(e) => setStart_date(e.target.value)}
          />
        </div>
        <div className='flex flex-col'>
          <label className='mb-1'>
            End Date:
          </label>
          <input 
            className='border-2 border-gray-300 rounded-md p-1'
            type='date'
            value={end_date}
            onChange={(e) => setEnd_date(e.target.value)}
          />
        </div>
        <div className='flex flex-col'>
          <label className='mb-1'>
            Description:
          </label>
          <input 
            className='border-2 border-gray-300 rounded-md p-1'
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <div className='flex flex-col'>
          <label className='mb-1'>
            Degree Name:
          </label>
          <input 
            className='border-2 border-gray-300 rounded-md p-1'
            type="text"
            value={degree_name}
            onChange={(e) => setDegree_name(e.target.value)}
          />
        </div>
        <button className='bg-blue-500 text-white p-2 rounded-md'>Add Qualification</button>
      </form>
      {message && <p className='mt-4'>{message}</p>}
      <Link to='/home' className='text-blue-500 mt-5'>Back to Home</Link>
    </div>
  );
}

export default Qualifications;
