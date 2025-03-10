import React, { useContext, useEffect } from 'react'
import { mycontext } from '../../context/GlobalContext'
import { NavLink } from 'react-router-dom'
import SingleBootCampDetails from './SingleBootCampDetails'
import BootcampDetails from './BootCampDetails'

const AllBootCamp = () => {
  let {allbootcamps,setAllbootcamps}=useContext(mycontext)

  let getAllbootcamps=async()=>{
    let data = await fetch("http://localhost:5000/api/v1/bootcamps")
    let result=await data.json()
    setAllbootcamps(result?.data)
  }
  useEffect(()=>{
    getAllbootcamps();
  },[])
  return (
    <>
      <section className='w-full bg-[#efefef]'>
        <aside className='w-[80%] mx-auto flex justify-end mt-5 p-5'>
          <NavLink  to="/createbootcamp">
            <button className='cursor-pointer px-4 py-3 bg-[#1B7AFF] rounded-[12px] text-white'>Create Bootcamp</button>
          </NavLink>
        </aside>
        <aside className='w-[80%] flex mx-auto gap-x-10 flex-wrap'>
          {
            allbootcamps?.map((bootcamp)=>{
              return <BootcampDetails data={bootcamp}></BootcampDetails>
            })
          }
        </aside>
      </section>
    </>
  )
}

export default AllBootCamp
