import React from 'react'
import { NavLink, useLocation } from 'react-router-dom'

const SingleBootCampDetails = () => {

    let location=useLocation();
   
    let {photo,name,email,careers,website,address}=location.state;
   
  return (
    <>
      <section className='w-full'>
        <article className='w-[80%] mx-auto bg-[#efefef] mt-10'>
        <header className='w-1/2 mx-auto flex gap-x-3 p-4'>
           <NavLink to="/allbootcamps"><button className='p-2 rounded-[10px] bg-[#1B7AFF] border-2 border-[#000]'>Back</button></NavLink>
           <NavLink to="/editbootcamp"><button className='p-2 rounded-[10px] bg-orange-500 border-2 border-[#000]'>Edit Bootcamp</button></NavLink>
           <NavLink>                   <button className='p-2 rounded-[10px] bg-red-500 border-2 border-[#000]'>Delete Bootcamp</button></NavLink>
        </header>
        <main className='w-1/2 mx-auto'>
            <img src={photo} alt="" />
            <h1>{careers}</h1>
            <h1>{name}</h1>
            <h1>{address}</h1>
            <h1>{email}</h1>
        </main>
        </article>
      </section>
    </>
  )
}

export default SingleBootCampDetails