// import { MdOutlineMailOutline } from "react-icons/md";
// import { RiLockPasswordFill } from "react-icons/ri";
// import { AiOutlineEye } from "react-icons/ai";
// import { mycontext } from '../../context/GlobalContext';
// import { useContext, useState } from "react";
// import { NavLink, useNavigate } from "react-router-dom";

// const Login = () => {
//     let {token,setToken}=useContext(mycontext)
//     let navigate=useNavigate();

//     let [formdata, setdata] = useState({
//         email: "",
//         password: ""
//     });

//     const handleChange = (e) => {
//         let { name, value } = e.target;
//         setdata({ ...formdata, [name]: value });
//     };

//     const handleSubmit = async(e) => {
//         e.preventDefault();
//         let data=JSON.stringify(formdata)
//         let result=await fetch("http://localhost:5000/api/v1/auth/login",{
//             method:"POST",
//             headers:{
//                 "Content-Type":"application/json"
//             },
//             body:data
//         })
    
//         let result1= await result.json();
        
//         setToken(result1?.token)
//         console.log(token);

//         navigate("/allbootcamps")
//     };

//     return (
//         <div className="flex flex-col justify-center items-center min-h-screen bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 p-6 animate-fadeIn">
//   <h2 className="text-3xl font-bold text-center text-black mb-6">Login</h2>
//             <form onSubmit={handleSubmit} className="bg-gray-900 p-8 rounded-2xl shadow-lg w-[500px] space-y-6">
                
                
//                 <div>
//                     <label className="block text-white font-medium mb-2">Email</label>
//                     <div className='flex items-center bg-gray-800 rounded-lg px-4 py-3'>
//                         <MdOutlineMailOutline className='text-gray-400 mr-3' />
//                         <input type="email" name="email" value={formdata.email} onChange={handleChange} className='w-full bg-transparent outline-none text-gray-200 placeholder-gray-400' placeholder="Enter email" />
//                     </div>
//                 </div>
                
//                 <div>
//                     <label className="block text-white font-medium mb-2">Password</label>
//                     <div className='flex items-center bg-gray-800 rounded-lg px-4 py-3'>
//                         <RiLockPasswordFill className='text-gray-400 mr-3'/>
//                         <input type="password" name="password" value={formdata.password} onChange={handleChange} className='w-full bg-transparent outline-none text-gray-200 placeholder-gray-400' placeholder="Enter password" />
//                         <AiOutlineEye className='text-gray-400 ml-3 cursor-pointer' />
//                     </div>
//                 </div>
                
//                 <button type="submit" className='w-full bg-yellow-400 text-black py-3 rounded-lg hover:bg-yellow-500 transition font-semibold'>Login</button>
                
//                 <p className="text-center text-white mt-4">Don't have an account? <span className="text-yellow-400 font-bold cursor-pointer hover:underline"><NavLink to="/register">Sign Up</NavLink></span></p>
//             </form>
//         </div>
//     );
// };

// export default Login;

import React, { useContext, useState } from 'react'
import { MdOutlineRemoveRedEye } from 'react-icons/md'
import { NavLink, useNavigate } from 'react-router-dom'

const Login = () => {
    let navigate = useNavigate()
    let {token, setToken, userDetails}=useContext(tokenContext)
    const [state, setState]= useState({
        email: "",
        password:"",
    });
    const [showPassword, setShowPassword]= useState(false);
    const handleChange = (e)=>{
        const {name, value}=e.target;
        setState({...state,[name]: value});
    };
    const handleSubmit=async (e)=>{
        e.preventDefault();
        console.log(state);
        let data=await JSON.stringify(state)
        let result = await fetch("http://localhost:5000/api/v1/auth/login",{
            method:"POST",
            headers:{"content-Type":"application/json"},
            body:data
        })
        let result1=await result.json()
        console.log(result1);
        await setToken(result1.token)
        await localStorage.setItem('role',result1.user.role)
        navigate("/allbootcamps")
    }
  return (
    <>
      <h1 className="text-center font-bold mb-3 ml-10">LOGIN</h1>
      <div className=" w-[400px] ml-[36%] rounded-lg h-auto bg-[#111111] p-4">
        <form onSubmit={handleSubmit}>
            <div className=" mb-2 ">
                <labe className="text-white" htmlFor="email">Email</labe>
                <article className="flex flex-row items-center bg-[#1f1f1f]  w-[95%] mx-auto">
                    <span>
                        <HiOutlineMai color="white" size={14}/>     
                    </span>

                    <span className="ml-[7px] ">
                        <input value={state.email} onChange={handleChange} className="outline-none placeholder:text-[#a1a1a1] bg-transparent text-white w-[320px]" type='text' name='email' id='email' placeholder='Enter Email'/>
                    </span>
                </article>
            </div>
            <div>
                <label className="text-white" htmlFor="password">password</label>
                <article className="flex flex-row items-center bg-[#1f1f1f] w-[95%] mx-auto ">
                    <span>
                        <CiLock color="white"/>
                    </span>
                    <span className="ml-[7px]">
                        <input value={state.password} onChange={handleChange} className="outline-none placeholder:text-[#a1a1a1] text-white" type={showPassword ? "text" : "password"}  name='password' id="" placeholder='Enter Password'/>
                    </span>

                    <span  className="ml-[35%]" onClick={()=>{
                            setShowPassword(!showPassword);
                        }}> {showPassword ? (
                            <MdOutlineRemoveRedEye color="white"/>
                        ) : (
                            <IoEyeOffOutline color="white"/>
                        )}
                    </span>
                </article>
            </div>

            <div className="bg-[yellow] w-[95%] mx-auto rounded-lg text-center p-1 mt-5">
                <button type='submit'>Login</button>
            </div>
        </form>

        <div className="text-white text-center">
            <h3>Don't have account ? <span className="text-[yellow]"><NavLink to='/signup'>Sign Up</NavLink></span></h3>
        </div>
      </div>
    </>
  )
}

export default Login
