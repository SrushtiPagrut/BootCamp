import React, { useEffect, useState } from 'react'
import { NavLink, useLoaderData, useLocation, useNavigate } from 'react-router-dom'

export default function Allcourses() {

    let location = useLocation()
    console.log(location);
    let navigate = useNavigate()
    let bootcamp = location.state
    console.log(bootcamp._id);
    let [course, setCourse] = useState()
    let deleteCourse = async (id) => {
      await fetch(`http://localhost:5000/api/v1/bootcamps/${bootcamp._id}/courses/${id}`,{method : "DELETE"})
      navigate("/allbootcamps")
    }
    let getCourses = async () => {
        let result = await fetch(`http://localhost:5000/api/v1/bootcamps/${bootcamp._id}/courses`,{method : "GET"}) 
        result = await result.json()
        let data = result.data
        setCourse(data)
        
        
    }
    useEffect(()=>{
        getCourses()
        console.log(course);
        
        
    },[])
  return (
    <>
      <h1 className='text-center'>{bootcamp.name}</h1>
    <section className='flex flex-wrap gap-10 mt-[50px]'>
        {course !== undefined&&course.map((x)=>{
            return <article className='h-[40vh] w-[25vw] border-1 flex flex-col justify-evenly'>
            <div className='pl-[35px]'><b className='float-left'>Course: </b><h1>{x.title}</h1></div>
            <div className='pl-[35px]'><b className='float-left'>Description: </b><p>{x.description}</p></div>
            <div className='pl-[35px]'><b className='float-left'>Duration: </b><h3>{x.duration}</h3></div>
            <div className='pl-[35px]'><b className='float-left'>Experience: </b><h2>{x.minimumSkill}</h2></div>
            <div className='pl-[35px]'><b className='float-left'>Scholorship: </b><h1>{x.scholarshipAvailable?<h2>Available</h2>:<h2>Not Available</h2>}</h1></div>
            <div className='pl-[35px]'><span>{x.price}</span></div>
            <div className='flex justify-center gap-x-5'>
          <NavLink to="/allbootcamps" ><button className='py-[10px] cursor-pointer px-[32px] bg-[skyblue] text-white font-bold rounded-[10px]  cursor-pointer'>Back</button></NavLink>  
          {localStorage.getItem('role')=='publisher'  &&    
          <> 
          <NavLink to={`/editcourses/${bootcamp._id}`} state={x} ><button className='py-[10px]  px-[32px] bg-[skyblue] text-white font-bold rounded-[10px] cursor-pointer'>Edit</button></NavLink>
        <button onClick = {()=>{deleteCourse(x._id)}} className='py-[10px] px-[32px] bg-[skyblue] text-white font-bold rounded-[10px] cursor-pointer'>Delete</button> </> 
          }  
               </div>
        </article>
        })}
    </section>
    </>
  )
    
}
