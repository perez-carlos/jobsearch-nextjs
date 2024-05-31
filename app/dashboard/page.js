"use client"; 
import { useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/navigation';

const Dashboard = () => {
  const router = useRouter();

  const [jobTitle, setJobTitle] = useState('');
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      router.push('/'); 
    }
  }, [router]);

  const handleSearch = async () => {
    try {
      const token = localStorage.getItem('token');
      const response = await axios.get(`http://localhost:8000/jobs?title=${jobTitle}`, {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });
      setJobs(response.data);
    } catch (error) {
      console.error(error);
      alert('Failed to fetch jobs!');
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('token'); 
    router.push('/'); 
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center text-gray-900"> 
    <div className="w-full max-w-lg p-4 bg-white shadow-md rounded-lg">
      <h1 className="text-xl font-bold text-center mb-4">Dashboard</h1>
      <div className="mb-4">
        <input 
          type="text" 
          placeholder="Job Title" 
          value={jobTitle} 
          onChange={(e) => setJobTitle(e.target.value)}
          className="form-input w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
        />
      </div>
      <div className="text-center mb-4">
        <button 
          onClick={handleSearch} 
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Search
        </button>
      </div>
      <div className="overflow-x-auto">
        <table className="table-auto w-full">
          <thead className="bg-gray-200">
            <tr>
              <th className="px-4 py-2 text-left">Job Name</th>
              <th className="px-4 py-2 text-left">Company Name</th>
            </tr>
          </thead>
          <tbody>
            {jobs.map((job, index) => (
              <tr key={index} className="bg-white border-b">
                <td className="px-4 py-2">{job.job_name}</td>
                <td className="px-4 py-2">{job.company_name}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="text-center">
          <button
            onClick={handleLogout}
            className="bg-red-500 m-2 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Log Out
          </button>
        </div>
    </div>
  </div>
  );
};

export default Dashboard;
