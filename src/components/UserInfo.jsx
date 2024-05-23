import { useState } from 'react';  
import { Link } from 'react-router-dom';
import { UserAuth } from '../context/UserContext';

const Skills = () => {
  const { user } = UserAuth();
  const id = user?.id;
  const [first_name, setFirst_name] = useState('');
  const [last_name, setLast_name] = useState('');
  const [email, setEmail] = useState('');
  const [adress, setAdress] = useState('');
  const [zip_code, setZip_code] = useState('');
  const [gender, setGender] = useState('');
  const [driving_licence, setDriving_licence] = useState('');
  const [message, setMessage] = useState('');

  const submitUserInfo = async (e) => {
    e.preventDefault();
    if (!first_name || !last_name || !email || !adress || !zip_code || !gender || !driving_licence) {
      setMessage('Please fill in all fields.');
      return;
    }
    
    try {
      const res = await fetch(`http://localhost:3000/api/userinfo/${id}`, {
        method: 'POST',
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          first_name,
          last_name,
          email,
          adress,
          zip_code,
          gender,
          driving_licence

        })
      });

      if (!res.ok) {
        throw new Error('Failed to add skill');
      }

      const data = await res.json();
      console.log(data);
      setMessage('User Info added successfully!');
      setFirst_name('');
      setLast_name('');
      setEmail('');
      setAdress('');
      setZip_code('');
      setGender('');
      setDriving_licence('');
    } catch (err) {
      console.log(err);
      setMessage('An error occurred while adding the skill.');
    }
  }

  return (
    <div className='w-full mx-auto my-20 flex flex-col justify-center items-center'>
      <h2 className='text-3xl font-bold mb-10'>Add User Info</h2>
      <form onSubmit={submitUserInfo} className='flex flex-col w-[300px] space-y-2'>
        <div className='flex flex-col'>
          <label className='mb-1'>
            First Name:
          </label>
          <input 
            className='border-2 border-gray-300 rounded-md p-1'
            type="text"
            value={first_name}
            onChange={(e) => setFirst_name(e.target.value)}
          />
        </div>
        <div className='flex flex-col'>
          <label className='mb-1'>
            Last Name:
          </label>
          <input 
            className='border-2 border-gray-300 rounded-md p-1'
            type="text"
            value={last_name}
            onChange={(e) => setLast_name(e.target.value)}
          />
        </div>
        <div className='flex flex-col'>
          <label className='mb-1'>
            Email:
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
            Adress:
          </label>
          <input 
            className='border-2 border-gray-300 rounded-md p-1'
            type="text"
            value={adress}
            onChange={(e) => setAdress(e.target.value)}
          />
        </div>
        <div className='flex flex-col'>
          <label className='mb-1'>
            Zip Code:
          </label>
          <input 
            className='border-2 border-gray-300 rounded-md p-1'
            type="text"
            value={zip_code}
            onChange={(e) => setZip_code(e.target.value)}
          />
        </div>
        <div className='flex justify-start items-center gap-2'>
        <label className='mb-1'>
        Male
          </label>
        <input 
            className='border-2 border-gray-300 rounded-md p-1'
            type="radio"
            name="Gender"
            value="Male"
            onChange={(e) => setGender(e.target.value)}
          />
          <label className='mb-1'>
        Female
          </label>
        <input 
            className='border-2 border-gray-300 rounded-md p-1'
            type="radio"
            name="Gender"
            value="Female"
            onChange={(e) => setGender(e.target.value)}
          />
        </div> 
        <div className='flex flex-col'>
          <label className='mb-1'>
            Driving Licence:
          </label>
          <input 
            className='border-2 border-gray-300 rounded-md p-1'
            type="text"
            value={driving_licence}
            onChange={(e) => setDriving_licence(e.target.value)}
          />
        </div>
        <button className='bg-blue-500 text-white p-2 rounded-md'>Add User Info</button>
      </form>
      {message && <p className='mt-4'>{message}</p>}
      <Link to='/home' className='text-blue-500 mt-5'>Back to Home</Link>
    </div>
  );
}

export default Skills;
