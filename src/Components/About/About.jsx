import React from 'react'
import about_pic from '../../assets/about.png'


function About() {
  return (
    <div className='About-container flex flex-col md:flex md:flex-row   text-black borde ' id='About'>
        <div  className="about-left-section  p-10 md:w-[50%] md:h-[90vh]   lg:ml-[200px]">
          
          <h1 className='xl:text-[40px] mt-10 text-[35px]  font-bold  text-neutral-500 animate-pulse '>ABOUT ME...</h1>
    <h1 className='xl:text-[30px] mt-5 text-[20px] '>Hllo! I'm a passionate and self-motivated MERN stack developer eager to kick-start my career in the tech industry. I love building web applications that solve real-world problems and provide meaningful experiences to users</h1>
        </div>

    <div className="about-right-section bg-white-500 md:h-[350px] flex justify-center align-middle md:mr-[100px] bg-purple-400 p-20 md:pt-[50px] xl:pt-[40px] rounded-md md:mt-[80px]">
    <div className="about-left-section-img mt-10  flex justify-center align-middle ">
          <img className='h-80 w-80  md:h-[200px]  md:w-[200px]  animate-bounce  lg:h-[300px] lg:w-[300px]'  src={about_pic} alt=""  />
          </div>

    </div>
    
    </div>
  )
}

export default About