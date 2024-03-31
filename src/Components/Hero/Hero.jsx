import React from 'react'
import pic from '../../assets/masu.jpg'
import { motion } from "framer-motion"

function Hero() {
  const downloadResume = () => {
    // Replace 'path_to_resume_file.pdf' with the actual path to your resume file
    const resumeUrl = process.env.PUBLIC_URL + '/public/My Resume.pdf';
    const link = document.createElement('a');
    link.href = resumeUrl;
    link.setAttribute('download', 'My Resume.pdf');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  return (
    <div className='hero-container flex flex-col justify-center align-middle md:flex md:flex-row  md:justify- md:align-middle bg-   md:h-[50vh] xl:h-[58vh] md:mb-5'id='Home'>
      
          <div className="left-demo flex justify-center align-middle lg:mt-[20px] xl:mt-[20px]">
          <motion.div className="hero-image rounded-full  drop-shadow-xl  shadow-lg shadow-slate-700 w-80 h-80 overflow-y-hidden"  >
        
        <motion.img className='rounded-full   object-cover bg-cover border-white-500  h-90 ' src={pic} alt="picd" 
       />
       
        </motion.div>
          </div>
     


        <motion.div className="hero-right-section  flex justify-center align-middle pt-10 text-center md:text-justify flex-col text-black ml-30 md:ml-10 lg:pt-0 "
       
       initial={{y: '-100vh'}}
         animate={{y:0}}
         transition={{type:"spring",delay:0.3, stiffness:120}}
       >

         <p className='text-3xl font-bold'>I'M</p>
         <h1 className='text-5xl   md:text-5xl  drop-shadow-2xl font-bold ' 
         
         
         > <span >MASOOD</span>  <br /> </h1>
         <h1 className='text-5xl   md:text-5xl  drop-shadow-2xl  font-bold' 
         
         
         > <span >WEB DEVELOPER</span>  <br /> </h1>
         <div className="button">
         <button className='bg-purple-500 rounded shadow-sm shadow-zinc-400 mt-2 hover:scale-105 duration-300 w-[100px] p-2 text-white animate-pulse'  onClick={downloadResume}>Hire me</button>
         </div>
        
       </motion.div>
        
       </div>


  
  )
}

export default Hero