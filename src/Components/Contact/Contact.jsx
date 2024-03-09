import React, { useEffect } from 'react'
import phone from '../../assets/phone.png'
import email from '../../assets/email.png'
import { FaInstagram } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { DiGithubBadge } from "react-icons/di";
import { FaSquarePhone } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { IoMdContacts } from "react-icons/io";
import AOS from 'aos'
import 'aos/dist/aos.css'
function Contact() {
  useEffect(()=>{
    AOS.init({duration:800 })
  },[])
  return (
    <div style={{background: "linear-gradient(180deg, #fff, #b3b6ba)"}} className='contact-container xl:mx-[140px] lg:mb-[30px] lg:mx-[50px] rounded-md  pb-[20px] shadow-lg shadow-neutral-300 ' id='Contact'data-aos='zoom-in'>
        <div className="contact-heading flex justify-center ">
        <h1 className='text-[50px] font-bold my-[30px] text-neutra-500  flex text-neutral-500 '>Contact <IoMdContacts  className='ml-[20px] mt-[12px] animate-bounce'/></h1>
        </div>

        
        <div className="social-icons flex justify-center">
          <ul className='flex cursor-pointer mb-[20px] duration-300 '>
          <li className='bg-white rounded-full  mr-[10px] drop-shadow-md p-3 d hover:bg-neutral-300  duratio-300 '> <a href=""><FaInstagram size={20}  /></a> </li>
          <li className='bg-white  rounded-full mr-[10px]  drop-shadow-md  p-3 hover:bg-neutral-300 ' >  <a href=""> <FaWhatsapp size={20} /></a></li>
          <li className='bg-white  rounded-full mr-[10px] drop-shadow-md p-3 hover:bg-neutral-300' > <a href=""><FaLinkedin size={20} /></a></li>
          <li className='bg-white rounded-full mr-[10px] drop-shadow-md p-3 hover:bg-neutral-300' > <a href=""><DiGithubBadge size={20}  /></a>    </li>
          </ul>
        </div>

        <div className="text md:flex justify-center gap-8  ">
            
            <div className="name-number flex gap-2 justify-center ">
            <FaSquarePhone size={25}  className='mt-[5px] drop-shadow-md' />
                {/* <h1 className='mt-2'>Number :</h1> */}
                <h1 className='mt-2 font-semibold' > 9656554444</h1>
            </div>
            <div className="email flex gap-2 justify-center mt-2 align-middle mb-[20px]">
                <MdEmail size={25} className=' drop-shadow-md'/>
                <h1><span className='font-semibold'>masood@gmail.com</span></h1>
            </div>
        </div>
    </div>
  )
}

export default Contact