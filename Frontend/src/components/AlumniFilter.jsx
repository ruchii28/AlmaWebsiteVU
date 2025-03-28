import React, { useState } from "react";
import axios from "axios";

const AlumniFilter = () => {
  const [filters, setFilters] = useState({
    registrationNumber: "",
    batch: "",
    department: "",
    birthday: "",
    fullName: "",
    email: "",
    contact: "",
  });

  const [results, setResults] = useState([]);

  // Handle input changes
  const handleChange = (e) => {
    setFilters({ ...filters, [e.target.name]: e.target.value });
  };

  // Fetch filtered alumni data
  const fetchFilteredData = async () => {
    try {
      const queryParams = new URLSearchParams();
      Object.keys(filters).forEach((key) => {
        if (filters[key].trim()) {
          queryParams.append(key, filters[key].trim());
        }
      });

      const response = await axios.get(`http://localhost:5000/api/faculty/filter?${queryParams}`);
      setResults(response.data);
    } catch (error) {
      console.error("Error fetching data", error);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center p-6">
      <h2 className="text-3xl font-bold text-gray-800 mb-6">Filter Alumni</h2>

      <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-md">
        <div className="grid grid-cols-1 gap-4">
          <input type="text" name="registrationNumber" placeholder="Registration Number" onChange={handleChange}
            className="border rounded-lg p-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-400" />
          <input type="text" name="batch" placeholder="Batch" onChange={handleChange}
            className="border rounded-lg p-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-400" />
          <input type="text" name="department" placeholder="Department" onChange={handleChange}
            className="border rounded-lg p-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-400" />
          <input type="date" name="birthday" onChange={handleChange}
            className="border rounded-lg p-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-400" />
          <input type="text" name="fullName" placeholder="Full Name" onChange={handleChange}
            className="border rounded-lg p-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-400" />
          <input type="email" name="email" placeholder="Email" onChange={handleChange}
            className="border rounded-lg p-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-400" />
          <input type="text" name="contact" placeholder="Contact" onChange={handleChange}
            className="border rounded-lg p-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-400" />
        </div>

        <button onClick={fetchFilteredData}
          className="mt-4 bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition duration-300 w-full">
          Filter
        </button>
      </div>

      {/* Results Section */}
      <h3 className="text-2xl font-semibold text-gray-800 mt-6">Results:</h3>

      {results.length === 0 ? (
        <p className="text-gray-600 mt-4">No results found</p>
      ) : (
        <div className="w-full overflow-x-auto mt-4">
          <table className="min-w-full bg-white shadow-md rounded-lg overflow-hidden">
            <thead className="bg-blue-500 text-white">
              <tr>
                <th className="py-3 px-6 text-left">Registration No.</th>
                <th className="py-3 px-6 text-left">Full Name</th>
                <th className="py-3 px-6 text-left">Batch</th>
                <th className="py-3 px-6 text-left">Department</th>
                <th className="py-3 px-6 text-left">Email</th>
                <th className="py-3 px-6 text-left">Contact</th>
              </tr>
            </thead>
            <tbody>
              {results.map((alumni, index) => (
                <tr key={index} className="border-b hover:bg-gray-100 transition duration-200">
                  <td className="py-2 px-6">{alumni.registrationNumber}</td>
                  <td className="py-2 px-6">{alumni.fullName}</td>
                  <td className="py-2 px-6">{alumni.batch}</td>
                  <td className="py-2 px-6">{alumni.department}</td>
                  <td className="py-2 px-6">{alumni.email}</td>
                  <td className="py-2 px-6">{alumni.contact}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default AlumniFilter;
