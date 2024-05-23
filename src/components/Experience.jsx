import { useState } from 'react';  
import { Link } from 'react-router-dom';
import { UserAuth } from '../context/UserContext';

const Experience = () => {
  const { user } = UserAuth();
  const id = user?.id;
  const [job_title, setJob_title] = useState('');
  const [city, setCity] = useState('');
  const [employer, setEmployer] = useState('');
  const [start_date, setStart_date] = useState('');
  const [end_date, setEnd_date] = useState('');
  const [job_description, setJob_description] = useState('');
 
  const [message, setMessage] = useState('');

  const submitExperience = async (e) => {
    e.preventDefault();
    if (!job_title || !city || !employer || !start_date || !end_date || !job_description) {
      setMessage('Please fill in all fields.');
      return;
    }
    
    try {
      const res = await fetch(`http://localhost:3000/api/experience/${id}`, {
        method: 'POST',
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          job_title,
          city,
          employer,
          start_date,
          end_date,
          job_description

        })
      });

      if (!res.ok) {
        throw new Error('Failed to add skill');
      }

      const data = await res.json();
      console.log(data);
      setMessage('Experience added successfully!');
      setJob_title('');
      setCity('');
      setEmployer('');
      setStart_date('');
      setEnd_date('');
      setJob_description('');
    } catch (err) {
      console.log(err);
      setMessage('An error occurred while adding the experience.');
    }
  }

  return (
    <div className='w-3/4 min-h-[80vh] mx-auto my-24 pb-4 flex flex-col justify-center items-center shadow-xl rounded-2xl'>
      <h2 className='text-3xl font-bold mb-10'>Add Experience</h2>
      <form onSubmit={submitExperience} className='flex flex-col w-[300px] space-y-2'>
        <div className='flex flex-col'>
          <label className='mb-1'>
            Job Title:
          </label>
          <input 
            className='border-2 border-gray-300 rounded-md p-1'
            type="text"
            value={job_title}
            onChange={(e) => setJob_title(e.target.value)}
          />
        </div>
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
            Employer:
          </label>
          <input 
            className='border-2 border-gray-300 rounded-md p-1'
            type="text"
            value={employer}
            onChange={(e) => setEmployer(e.target.value)}
          />
        </div>
        <div className='flex flex-col'>
          <label className='mb-1'>
            Start Date:
          </label>
          <input 
            className='border-2 border-gray-300 rounded-md p-1'
            type = 'date'
            value={start_date}
            onChange={(e) => setAdress(e.target.value)}
          />
        </div>
        <div className='flex flex-col'>
          <label className='mb-1'>
            End Date:
          </label>
          <input 
            className='border-2 border-gray-300 rounded-md p-1'
            type = 'date'
            value={end_date}
            onChange={(e) => setEnd_date(e.target.value)}
          />
        </div>
        <div className='flex flex-col'>
          <label className='mb-1'>
            Job Description:
          </label>
          <input 
            className='border-2 border-gray-300 rounded-md p-1'
            type="text"
            value={job_description}
            onChange={(e) => setJob_description(e.target.value)}
          />
        </div>
        <button className='bg-blue-500 text-white p-2 rounded-md'>Add Experience</button>
      </form>
      {message && <p className='mt-4'>{message}</p>}
      <Link to='/home' className='text-blue-500 mt-5'>Back to Home</Link>
    </div>
  );
}

export default Experience;
