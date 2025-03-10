import React, { useContext, useState } from "react";
import { mycontext } from "../../context/GlobalContext";

const CreateBootcamp = () => {

  let {token}=useContext(mycontext);
  console.log(token);
  

  let [data, setData] = useState({
    name: "",
    email: "",
    description: "",
    website: "",
    address: "",
    careers: "Web Development",
    photo: "",
  });

  let handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleSubmit = async(e) => {
    e.preventDefault();
    let formdata=JSON.stringify(data)
    let result= await fetch("http://localhost:5000/api/v1/bootcamps",{
      method:"POST",
      headers:{
        "Content-Type":"application/json",
        "Authorization":`Bearer ${token}`
      },
     
      body:formdata
    })
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-900">
      <div className="bg-gray-100 p-8 rounded-lg shadow-lg w-96">
        <h2 className="text-xl text-center text-teal-600 mb-4 font-bold">Create BootCamp</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input type="text" name="name" placeholder="Enter name here" value={data.name} onChange={handleChange} className="w-full p-2 border rounded" required />
          <input type="email" name="email" placeholder="Enter email" value={data.email} onChange={handleChange} className="w-full p-2 border rounded" required />
          <textarea name="description" placeholder="Write some description" value={data.description} onChange={handleChange} className="w-full p-2 border rounded" required />
          <input type="url" name="website" placeholder="Enter a website" value={data.website} onChange={handleChange} className="w-full p-2 border rounded" required />
          <textarea name="address" placeholder="Enter your address" value={data.address} onChange={handleChange} className="w-full p-2 border rounded" required />
          <select name="careers" value={data.careers} onChange={handleChange} className="w-full p-2 border rounded">
            <option value="web development">Web Development</option>
            <option value="react development">React Development</option>
            <option value="fullstack development">FullStack Development</option>
            <option value="java development">Java Development</option>
            <option value="python development">Python Development</option>
            <option value="android development">Android Development</option>
            <option value="ux/ui development">UI/UX Development</option>
            <option value="business">Business</option>
            <option value="others">Others</option>
          </select>
          <input type="url" name="photo" placeholder="Image URL" value={data.photo} onChange={handleChange} className="w-full p-2 border rounded" />
          <button type="submit" className="w-full bg-teal-500 text-white p-2 rounded hover:bg-teal-600">Create BootCamp</button>
        </form>
      </div>
    </div>
  );
};

export default CreateBootcamp;
