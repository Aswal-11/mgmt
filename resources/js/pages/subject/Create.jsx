import { useState } from 'react';
import { router, usePage } from '@inertiajs/react';

export default function Create() {
    const { errors } = usePage().props;

    const [values, setValues] = useState({
        subject_name: '',
        subject_code: ''
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
        router.post('/subject_store', values);
    };
    return <>
        <div className="container mx-auto p-4 max-w-6xl">
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">

                {/* Header  */}
                <div className="bg-blue-600 py-4 px-6">
                    <h1 className="text-2xl font-bold text-white">Create Subject</h1>
                </div>

                <form onSubmit={handleSubmit} className="space-y-8 p-6">
                    {/*Subject name */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Subject Name *</label>
                        <input
                            type="text"
                            name="subject_name"
                            value={values.subject_name}
                            onChange={handleChange}
                            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-150"
                            required
                        />
                        {errors.subject_name && <p className="mt-1 text-red-500 text-sm">{errors.subject_name}</p>}
                    </div>

                    {/* Subject code */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Subject code *</label>
                        <input
                            type="number"
                            name="subject_code"
                            value={values.subject_code}
                            onChange={handleChange}
                            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-150"
                            required
                        />
                        {errors.subject_code && <p className="mt-1 text-red-500 text-sm">{errors.subject_code}</p>}
                    </div>

                    <div className="flex justify-end space-x-4 pt-4 border-t border-gray-200">
                        <button
                            type="submit"
                            className="px-6 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition duration-150"
                        >
                            Submit
                        </button>
                    </div>
                </form>
            </div>
        </div>
    </>
}