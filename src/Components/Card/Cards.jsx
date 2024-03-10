import React, { useEffect } from 'react'
import { DiGithubBadge } from "react-icons/di";
import AOS from 'aos'
import 'aos/dist/aos.css'
function Card(props) {
  useEffect(()=>{
    AOS.init({duration: 800})
  },[])
  return (
    <div className='card-container duration-300  flex  shadow-lg shadow-black ml-[25px] mt-[50px] mb-[20px] rounded-2xl  ' data-aos = 'fade-right'>

      
      <div className="card-body relative   group  bg-slate-100 w-[360px]  h-60 rounded-xl shadow-xl shadow-neutral-300 flex flex-col overflow-hidden duration-500  ">
        <img src={props.cardPic} alt="" className='h-60 object-cover rounded-xl shadow-lg  shadow-neutral-500 sm:group-hover:scale-105 duration-300  md:opacity-100  md:blur-none sm:group-hover:blur-sm'/>
          <div className="demo max-sm:hidden flex text-center inset-0 sm:group-hover:flex flex-col  justify-center align-middle sm:group-hover:translate-y-[0%]   absolute  sm:translate-y-[60%] text-white  md:bg-gradient-to-b from-transparent via-black bg-gradient-to-b   w-[360px] rounded-2xl h-[240px] transition-all  duration-500  " >
            <h1 className='text-2xl  font-bold '>{props.text}</h1>
            <p className='font-bold mt-[10px] '>{props.dtxt}</p>
            <h1 className='text-3xl cursor-pointer ml-[140px] mt-[15px] '> <a href={props.githubLink}><DiGithubBadge size={50} className='hover:scale-110 duration-300'/></a></h1>
            
          </div>
        <div className="card-text flex justify-center sm:hidden align-middle p-4 ">
          <h1 className='text-3xl cursor-pointer'> <a href="https://github.com/Binyam888/masood-protfolio/tree/master"><DiGithubBadge/></a></h1>
          <h1 className=' mt-1 ml-3'>{props.text}</h1>
        </div>
      </div>
    
    
    </div>
  )
}

export default Card
