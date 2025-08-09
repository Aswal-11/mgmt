import { useState } from 'react';
import { router, usePage } from '@inertiajs/react';

export default function Home() {
  const { errors } = usePage().props;

  const [values, setValues] = useState({
    name: '',
    email: '',
    gender: 0,
    phone_no: '',
    state: '',
    city: '',
    address: '',
    dob: '',
    aadhar_number: '',
    subject: '',
    graduation_degree_name: '',
    graduation_year: '',
    post_graduation_degree_name: '',
    post_graduation_year: '',
    highest_qualification: '',
    certificates: '',
    date_of_joining: '',
    date_of_leaving: '',
    status: 1
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    router.post('/teachers_store', values);
  };

  return (
    <div className="container mx-auto p-4 max-w-6xl">
      <div className="bg-white rounded-xl shadow-lg overflow-hidden">
        {/* Header */}
        <div className="bg-blue-600 py-4 px-6">
          <h1 className="text-2xl font-bold text-white">Employee Registration</h1>
          <p className="text-blue-100">Fill in the details below to register a new employee</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-8 p-6">
          {/* Personal Information */}
          <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
            <h2 className="text-xl font-semibold mb-4 text-gray-800 border-b pb-2 flex items-center">
              <svg className="w-5 h-5 mr-2 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
              Personal Information
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              
              {/* Name */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Full Name *</label>
                <input
                  type="text"
                  name="name"
                  value={values.name}
                  onChange={handleChange}
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-150"
                  required
                />
                {errors.name && <p className="mt-1 text-red-500 text-sm">{errors.name}</p>}
              </div>

              {/* Email */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Email *</label>
                <input
                  type="email"
                  name="email"
                  value={values.email}
                  onChange={handleChange}
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-150"
                  required
                />
                {errors.email && <p className="mt-1 text-red-500 text-sm">{errors.email}</p>}
              </div>

              {/* Gender */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Gender *</label>
                <select
                  name="gender"
                  value={values.gender}
                  onChange={handleChange}
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-150"
                  required
                >
                  <option value={0}>Male</option>
                  <option value={1}>Female</option>
                  <option value={2}>Other</option>
                </select>
                {errors.gender && <p className="mt-1 text-red-500 text-sm">{errors.gender}</p>}
              </div>

              {/* Phone */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number *</label>
                <input
                  type="tel"
                  name="phone_no"
                  value={values.phone_no}
                  onChange={handleChange}
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-150"
                  required
                />
                {errors.phone_no && <p className="mt-1 text-red-500 text-sm">{errors.phone_no}</p>}
              </div>

              {/* DOB */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Date of Birth *</label>
                <input
                  type="date"
                  name="dob"
                  value={values.dob}
                  onChange={handleChange}
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-150"
                  required
                />
                {errors.dob && <p className="mt-1 text-red-500 text-sm">{errors.dob}</p>}
              </div>

              {/* Aadhar */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Aadhar Number *</label>
                <input
                  type="text"
                  name="aadhar_number"
                  value={values.aadhar_number}
                  onChange={handleChange}
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-150"
                  required
                />
                {errors.aadhar_number && <p className="mt-1 text-red-500 text-sm">{errors.aadhar_number}</p>}
              </div>
            </div>
          </div>

          {/* Address */}
          <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
            <h2 className="text-xl font-semibold mb-4 text-gray-800 border-b pb-2 flex items-center">
              <svg className="w-5 h-5 mr-2 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              Address Information
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">State *</label>
                <input
                  type="text"
                  name="state"
                  value={values.state}
                  onChange={handleChange}
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-150"
                  required
                />
                {errors.state && <p className="mt-1 text-red-500 text-sm">{errors.state}</p>}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">City *</label>
                <input
                  type="text"
                  name="city"
                  value={values.city}
                  onChange={handleChange}
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-150"
                  required
                />
                {errors.city && <p className="mt-1 text-red-500 text-sm">{errors.city}</p>}
              </div>

              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-1">Full Address *</label>
                <textarea
                  name="address"
                  value={values.address}
                  onChange={handleChange}
                  rows={3}
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-150"
                  required
                />
                {errors.address && <p className="mt-1 text-red-500 text-sm">{errors.address}</p>}
              </div>
            </div>
          </div>

          {/* Education */}
          <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
            <h2 className="text-xl font-semibold mb-4 text-gray-800 border-b pb-2 flex items-center">
              <svg className="w-5 h-5 mr-2 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 14l9-5-9-5-9 5 9 5z" />
                <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
              </svg>
              Education Information
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Subject *</label>
                <input
                  type="text"
                  name="subject"
                  value={values.subject}
                  onChange={handleChange}
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-150"
                  required
                />
                {errors.subject && <p className="mt-1 text-red-500 text-sm">{errors.subject}</p>}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Graduation Degree *</label>
                <input
                  type="text"
                  name="graduation_degree_name"
                  value={values.graduation_degree_name}
                  onChange={handleChange}
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-150"
                  required
                />
                {errors.graduation_degree_name && <p className="mt-1 text-red-500 text-sm">{errors.graduation_degree_name}</p>}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Graduation Year *</label>
                <input
                  type="date"
                  name="graduation_year"
                  value={values.graduation_year}
                  onChange={handleChange}
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-150"
                  required
                />
                {errors.graduation_year && <p className="mt-1 text-red-500 text-sm">{errors.graduation_year}</p>}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Post Graduation Degree</label>
                <input
                  type="text"
                  name="post_graduation_degree_name"
                  value={values.post_graduation_degree_name}
                  onChange={handleChange}
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-150"
                />
                {errors.post_graduation_degree_name && <p className="mt-1 text-red-500 text-sm">{errors.post_graduation_degree_name}</p>}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Post Graduation Year</label>
                <input
                  type="date"
                  name="post_graduation_year"
                  value={values.post_graduation_year}
                  onChange={handleChange}
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-150"
                />
                {errors.post_graduation_year && <p className="mt-1 text-red-500 text-sm">{errors.post_graduation_year}</p>}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Highest Qualification *</label>
                <input
                  type="text"
                  name="highest_qualification"
                  value={values.highest_qualification}
                  onChange={handleChange}
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-150"
                  required
                />
                {errors.highest_qualification && <p className="mt-1 text-red-500 text-sm">{errors.highest_qualification}</p>}
              </div>

              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-1">Certificates (comma separated)</label>
                <textarea
                  name="certificates"
                  value={values.certificates}
                  onChange={handleChange}
                  rows={2}
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-150"
                  placeholder="e.g., TEFL Certificate, Teaching License, etc."
                />
                {errors.certificates && <p className="mt-1 text-red-500 text-sm">{errors.certificates}</p>}
              </div>
            </div>
          </div>

          {/* Employment */}
          <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
            <h2 className="text-xl font-semibold mb-4 text-gray-800 border-b pb-2 flex items-center">
              <svg className="w-5 h-5 mr-2 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              Employment Information
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Date of Joining *</label>
                <input
                  type="date"
                  name="date_of_joining"
                  value={values.date_of_joining}
                  onChange={handleChange}
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-150"
                  required
                />
                {errors.date_of_joining && <p className="mt-1 text-red-500 text-sm">{errors.date_of_joining}</p>}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Date of Leaving</label>
                <input
                  type="date"
                  name="date_of_leaving"
                  value={values.date_of_leaving}
                  onChange={handleChange}
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-150"
                />
                {errors.date_of_leaving && <p className="mt-1 text-red-500 text-sm">{errors.date_of_leaving}</p>}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Status *</label>
                <select
                  name="status"
                  value={values.status}
                  onChange={handleChange}
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-150"
                  required
                >
                  <option value={1}>Active</option>
                  <option value={0}>Inactive</option>
                  <option value={2}>On Leave</option>
                </select>
                {errors.status && <p className="mt-1 text-red-500 text-sm">{errors.status}</p>}
              </div>
            </div>
          </div>

          <div className="flex justify-end space-x-4 pt-4 border-t border-gray-200">
            <button
              type="button"
              className="px-6 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition duration-150"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-6 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition duration-150"
            >
              Register Employee
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}