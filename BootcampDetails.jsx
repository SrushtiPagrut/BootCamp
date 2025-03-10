import { useContext } from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
// import {tokenContext} from '../../context/GlobalContext';

export default function BootcampDetails() {
  let {token}=useContext(tokenContext)
  console.log(token);

  let navigate =useNavigate()
  let location = useLocation({})
  console.log(location);
  let data = location.state
  let deleteBootCamp=async ()=>{
    await fetch(`http://localhost:5000/api/v1/bootcamps/${data.id}`,{
      method : "delete",
      headers: {"Authorization":`Bearer ${token}`},
    })
    await navigate("/allbootcamps")
  }
  return (
    <article className='h-[55vh] w-[65vw] border-1 mx-auto mt-[150px] flex gap-x-[55px]'>
      <div className='mt-[25px] '>
        <img src={data.photo} alt=""  className='h-[250px] float-left ml-[30px]'/>
      </div>
      <div  className=' w-[70%] flex flex-col justify-center'>
        <aside className=' flex flex-col gap-2'>
          <div className=' border-b-1'><h1>{data.name}</h1></div>
          <div className=' border-b-1'><h3>{data.email}</h3></div>
          <div className=' border-b-1'><p>{data.description}</p></div>
          <div className=' border-b-1'><h1>{data.careers[0]}</h1></div>
          <div className=' border-b-1'><h1>{data.address}</h1></div>
        </aside>

        <div className='flex justify-start gap-x-10 items-center h-[10vh]'>
          <NavLink to="/allbootcamps">
          <button className='py-[10px] cursor-pointer px-[32px] bg-[skyblue] text-white font-bold rounded-[10px]'>
            Back
          </button>
          </NavLink>
          {localStorage.getItem('role')=='publisher' && <>
          
          <NavLink to={`/editbootcamp`} state={location.state}>
            <button className='py-[10px]  px-[32px] bg-[orange] text-white cursor-pointer font-bold rounded-[10px]'>Edit</button>
          </NavLink>

          <NavLink>
            <button className='py-[10px]  px-[32px] bg-[red] text-white font-bold cursor-pointer rounded-[10px]'>
              Delete
            </button>
          </NavLink>
          </>}

          <NavLink to="/allcourses" state={data}>
            <button className='  px-[30px] bg-[lightgreen] text-white font-bold cursor-pointer rounded-[10px]'>View Course</button>
          </NavLink>
        </div>
      </div>
    </article>
  )
}