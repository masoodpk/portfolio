import React, { useEffect,useState } from 'react'
import '../Components/Navbar.css'
import {Link} from 'react-scroll';
import { motion } from "framer-motion"
import { AiOutlineClose,AiOutlineMenu } from "react-icons/ai"
function Navabar() {
const [bttn,setBttn] =useState(false)
const [scrolling ,setScrolling]=useState(false)
useEffect (()=>{
  const handleScroll =()=>{
    if (window.scrollY >50){
      setScrolling(true)
    }
    else{
      setScrolling(false)
    }
  }

  window.addEventListener('scroll',handleScroll)
//  
//  return ()=>{
//   window.removeEventListener('scroll',handleScroll)
 
},[])

const navClass =`nav-container flex justify-between z-10   px-5 py-1  rounded-[50px]    w-full md:w-[auto] md:hover:scale-x-105 duration-500 fixed text-black ${scrolling? 'md:bg-neutral-100 md:text-black md:shadow-sm md:shadow-neutral-500 mt-5 ' : " bg-transparent"}`

const navList = [
  {
  id:1,
  title:"Home"
},
{
  id:2,
  title:"About"
},
{
  id:3,
  title:"Project"
},
{
  id:4,
  title:"Skill"
},
{
  id:5,
  title:"Contact"
}
]
 

  return (
    <header className='flex justify-center align-middle mb-[100px]' >
      <div  className={navClass}> 
        
      
       <div className="nav-logo  px-3 py-1 rounded-full w-[50px] h-[50px] md:hidden">
        <h1 className='text-[26px]  md:mt-2 cursor-pointer text-white'> <Link 
        to="Home"
        smooth={true}
        offset={-20}
        
        duration={500}
        
        ></Link>     </h1>
       </div>
       <div className="nav-button fixed peer right-2 top-4 md:hidden hover:scale-110 duration-300 z-10">
           <button  onClick={()=>setBttn(!bttn)}> {bttn? <AiOutlineClose size={35}/> : <AiOutlineMenu size={35}/>}</button>
          
       </div>

     {/* For Mobile Screen */}
       { bttn && ( 
      
      <div className="nav-list-mobile  fixed top-[1px] right-0 flex justify-center align-middle w-[300px] rounded-lg shadow-md shadow-neutral-600  bg-neutral-200 md:hidden">
      <ul  className='flex flex-col text-neutral-600 text-[25px] text-center font-bold  pt-8'>




        {navList.map((nav)=>(
           <li key={nav.id} className='m-0 py-3 hover:scale-110  underline-offset-8 hover:underline duration-300 ' > <Link  onClick={()=>setBttn(!bttn)}
           to={nav.title}
           smooth={true}
           offset={-20}
           
           duration={500}
           ><span className='drop-shadow-md'>{nav.title}</span></Link>  </li>

        ))}
       
      </ul>

  </div>

       )}

       <div className={`navlist-desktop border-b-4 border-neutral-300 ${scrolling && 'border-none'}`}>
        <ul className='hidden  md:flex md:flex-wrap gap-3 mt-1 text-[20px] '>

        {navList.map((nav)=>(
           <li key={nav.id} className=' hover:scale-110 duration-300 hover:text-neutral-800 drop-shadow-md font-bold text-neutral-600' > <Link  onClick={()=>setBttn(!bttn)}
           to={nav.title}
           smooth={true}
           offset={-30}
           
           duration={500}
           ><span className='drop-shadow-md'>{nav.title}</span></Link>  </li>

        ))}
        </ul>

       </div>
       </div>
    </header>
  )
}

export default Navabar