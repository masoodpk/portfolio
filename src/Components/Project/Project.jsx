import React, { useEffect } from 'react'
import cardPic from '../../assets/netflix.jpg'
import Cards from '../Card/Cards'
import e_commerce from '../../assets/e-commerce.jpg'
import bookmyShow from '../../assets/b-my-show.webp'
import spotify from '../../assets/spotify.jpg'
import portfolio from '../../assets/port.jpg'
import { IoFileTrayStacked } from "react-icons/io5";
import AOS from 'aos'
import 'aos/dist/aos.css'

function Project() {
  useEffect(()=>{
    AOS.init({duration: 800})
  },[])
  return (
    <div className='project-container flex flex-col justify-center align-middle text-center mt-[20px] ' id='Project'>

        <div className="project-heading mt-10 flex justify-center ">
        <h1 className='text-[50px] font-bold   text-neutral-500 bg-neutral-200  w-[420px] shadow-md flex shadow-neutral-200 rounded-full px-[50px] justify-around mb-[20px]'data-aos='fade-right' >PROJECTS <IoFileTrayStacked  size={30}  className='ml-[30px] mt-[25px] animate-bounce' /></h1>
        
        </div>
           
        <div className="project-cards flex  justify-center  align-bottom flex-wrap sm:flex sm:flex-row">
        <Cards cardPic={cardPic} text={"Netflix Clone"} dtxt={"It is a clone website of Netflix"}/>
        <Cards cardPic={e_commerce} text={"E commerce"}  dtxt={"Website which allow to buy and sell goods"}  />
        <Cards cardPic={bookmyShow} text={"Book My Show "} dtxt={"It is a clone website of book my show"}  />
        <Cards cardPic={spotify} text={"Spotify Clone"}   dtxt={"It is a clone website of Spotify"}   />
        <Cards cardPic={portfolio} text={"Portfolio"} dtxt={"This is my personal porfolio website"}   />
        
        </div>
        
     </div>
  )
}

export default Project