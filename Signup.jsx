import React, { useState } from 'react';
import { FaUserPlus } from "react-icons/fa";
import { MdOutlineMailOutline } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";
import { RxAvatar } from "react-icons/rx";
import { NavLink, useNavigate } from 'react-router-dom';

const SignUp = () => {

    let navigate=useNavigate();

    let [formdata, setdata] = useState({
        name: "",
        email: "",
        password: "",
        role: "user",
        avatar: ""
    });

    const handleChange = (e) => {
        let { name, value } = e.target;
        setdata({ ...formdata, [name]: value });
    };

    const handleSubmit = async(e) => {
        e.preventDefault();
        let result=await fetch("http://localhost:5000/api/v1/auth/register",{
            method:"POST",
            headers:{
                "Content-Type":"application/json"

            },
            body:JSON.stringify(formdata)
        })
        navigate("/login")
        // console.log(formdata);
    };

    return (
        <div className="flex flex-col justify-center items-center min-h-screen bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 p-6 animate-fadeIn">
            <h2 className="text-4xl font-bold text-black mb-8 drop-shadow-lg">Sign Up</h2>
            <form onSubmit={handleSubmit} className="bg-gray-900 p-10 rounded-2xl shadow-2xl w-[500px] space-y-6 animate-slideUp">
                <div>
                    <label className="block text-white font-medium mb-2">Enter Name</label>
                    <div className='flex items-center bg-gray-800 rounded-lg px-4 py-3'>
                        <FaUserPlus className='text-gray-400 mr-3' />
                        <input type="text" name="name" value={formdata.name} onChange={handleChange} className='w-full bg-transparent outline-none text-gray-200 placeholder-gray-400' placeholder="Enter your name" />
                    </div>
                </div>

                <div>
                    <label className="block text-white font-medium mb-2">Email</label>
                    <div className='flex items-center bg-gray-800 rounded-lg px-4 py-3'>
                        <MdOutlineMailOutline className='text-gray-400 mr-3' />
                        <input type="email" name="email" value={formdata.email} onChange={handleChange} className='w-full bg-transparent outline-none text-gray-200 placeholder-gray-400' placeholder="Enter email" />
                    </div>
                </div>

                <div>
                    <label className="block text-white font-medium mb-2">Password</label>
                    <div className='flex items-center bg-gray-800 rounded-lg px-4 py-3'>
                        <RiLockPasswordFill className='text-gray-400 mr-3' />
                        <input type="password" name="password" value={formdata.password} onChange={handleChange} className='w-full bg-transparent outline-none text-gray-200 placeholder-gray-400' placeholder="Enter password" />
                    </div>
                </div>

                <div>
                    <label className="block text-white font-medium mb-2">Select Role</label>
                    <select name="role" value={formdata.role} onChange={handleChange} className='w-full border rounded-lg px-4 py-3 bg-gray-800 text-gray-200 outline-none'>
                        <option value="user">User</option>
                        <option value="publisher">Publisher</option>
                    </select>
                </div>

                <div>
                    <label className="block text-white font-medium mb-2">Avatar URL</label>
                    <div className='flex items-center bg-gray-800 rounded-lg px-4 py-3'>
                        <RxAvatar className='text-gray-400 mr-3' />
                        <input type="url" name="avatar" value={formdata.avatar} onChange={handleChange} className='w-full bg-transparent outline-none text-gray-200 placeholder-gray-400' placeholder="Enter avatar URL" />
                    </div>
                </div>

                <button type="submit" className='w-full bg-yellow-400 text-black py-3 rounded-lg hover:bg-yellow-500 transition-transform transform hover:scale-105 font-semibold'>Sign Up</button>

                <p className="text-center text-white mt-4">Already have an account? <span className="text-yellow-400 font-bold cursor-pointer hover:underline"><NavLink to="/login">Login</NavLink></span></p>
            </form>
        </div>
    );
};

export default SignUp;