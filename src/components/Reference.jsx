import { useState } from 'react';  
import { Link } from 'react-router-dom';
import { UserAuth } from '../context/UserContext';

const Reference = () => {
  const { user } = UserAuth();
  const id = user?.id;
  const [company_name, setCompany_name] = useState('');
  const [contact_name, setContact_name] = useState('');
  const [ph_num, setPh_num] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!company_name || !contact_name || !ph_num || !email) {
      setMessage('Please fill in all fields.');
      return;
    }

    try {
      const res = await fetch(`http://localhost:3000/api/reference/${id}`, {
        method: 'POST',
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          company_name,
          contact_name,
          ph_num,
          email
        })
      });

      if (!res.ok) {
        throw new Error('Failed to add reference');
      }

      const data = await res.json();
      console.log(data);
      setMessage('Reference added successfully!');
      setCompany_name('');
      setContact_name('');
      setPh_num('');
      setEmail('');
    } catch (err) {
      console.log(err);
      setMessage('An error occurred while adding the reference.');
    }
  }
  return (
   
        <div className='w-full mx-auto my-20 flex flex-col justify-center items-center'>
      <h2 className='text-3xl font-bold mb-10'>Add References</h2>
      <form onSubmit={handleSubmit} className='flex flex-col w-[300px] space-y-2'>
        <div className='flex flex-col'>
          <label className='mb-1'>
            Company Name:
          </label>
          <input 
            className='border-2 border-gray-300 rounded-md p-1'
            type="text"
            value={company_name}
            onChange={(e) => setCompany_name(e.target.value)}
          />
        </div>
        <div className='flex flex-col'>
          <label className='mb-1'>
            Contact Name:
          </label>
          <input 
            className='border-2 border-gray-300 rounded-md p-1'
            type="text"
            value={contact_name}
            onChange={(e) => setContact_name(e.target.value)}
          />
        </div>
        <div className='flex flex-col'>
          <label className='mb-1'>
            Conatct Email:
          </label>
          <input 
            className='border-2 border-gray-300 rounded-md p-1'
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className='flex flex-col'>
          <label className='mb-1'>
            Contact Phone Number:
          </label>
          <input 
            className='border-2 border-gray-300 rounded-md p-1'
            type="text"
            value={ph_num}
            onChange={(e) => setPh_num(e.target.value)}
          />
        </div>
        <button className='bg-blue-500 text-white p-2 rounded-md'>Add References</button>
      </form>
      {message && <p className='mt-4'>{message}</p>}
      <Link to='/home' className='text-blue-500 mt-5'>Back to Home</Link>
    </div>
   
  )
}

export default Reference