import React, { useState, useEffect } from 'react'
import { useAppContext } from '../../../context/AppContext'
import toast from 'react-hot-toast'
import { Link, useLocation, useParams, useNavigate } from 'react-router-dom'

const EditUser = () => {
    const { userId } = useParams()
    const { state } = useLocation()
    const { axios, users, fetchUsers } = useAppContext()
    const navigate = useNavigate()

    // Initialize form state with book data from location state or find in users list
    const userData = state?.userData || users.find(p => p._id === userId)
    
    const [name, setName] = useState(userData?.name || '')
    const [email, setEmail] = useState(userData?.email || '')
    const [loading, setLoading] = useState(!userData)

    const onSubmitHandler = async (event) => {
        try {
            event.preventDefault()

            const updateduserData = {
                name,email,
                password:"Password@123"
            }

            // Use PUT for updating existing book
            const { data } = await axios.put(`/api/user/update/${userId}`, updateduserData)

            if (data.success) {
                toast.success(data.message)
                fetchUsers() // Refresh book list
                navigate('/seller/user-list') // Redirect after successful update
            } else {
                toast.error(data.message)
            }
        } catch (error) {
            toast.error(error.message)
        }
    }

    if (loading) {
        return <div className="flex justify-center items-center min-h-[80vh]">Loading...</div>
    }

    return (
        <div className="flex-1 min-h-[95vh] overflow-y-auto">
            <div className="container mx-auto px-4">
                {/* Heading and View All in the same row OUTSIDE the form card */}
                <div className="flex flex-col md:flex-row justify-between items-center mb-6">
                    <h2 className="text-2xl font-bold text-primary">Edit User - {name || userId}</h2>
                    <Link
                        to="/seller/user-list"
                        className="px-6 py-2 bg-primary hover:bg-primary-dull text-white font-medium rounded-md shadow-sm transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
                    >
                        View List
                    </Link>
                </div>

                {/* Form Card */}
                <div className="max-w-5xl mx-auto bg-white rounded-lg shadow-md p-6">
                    <form onSubmit={onSubmitHandler} className="space-y-6">

                        {/* Inputs */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                                <label htmlFor="user-name" className="block text-sm font-medium text-gray-700 mb-1">User Name</label>
                                <input
                                    onChange={(e) => setName(e.target.value)}
                                    value={name}
                                    id="user-name"
                                    type="text"
                                    placeholder="Enter user name"
                                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition"
                                    required
                                />
                            </div>
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                                <input
                                    onChange={(e) => setEmail(e.target.value)}
                                    value={email}
                                    id="email"
                                    type="email"
                                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition"
                                    required
                                />
                            </div>
                        </div>

                        <div className="flex justify-end">
                            <button
                                type="submit"
                                className="px-6 py-2 bg-primary hover:bg-primary-dull text-white font-medium rounded-md shadow-sm transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary cursor-pointer"
                            >
                                Update 
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default EditUser