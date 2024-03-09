import React, { useEffect } from 'react'
import bookmyShow from '../../../assets/netflix.jpg'
import bootsratp from '../../../assets/bootstarp.svg'
import AOS from 'aos'
import 'aos/dist/aos.css'
function Smallcard(props) {
  useEffect(()=>{
     AOS.init({duration: 2000})
  },[])
  return (
    <div className='card-container pt-10 flex mt-[20px] justify-center align-middle p-[10px]  'data-aos="zoom-in" > 
              
        <div   className="card-body md:w-[350px] w-[350px]   bg-neutral-200 shadow-lg shadow-neutral-200  rounded-md p-[10px] " >
            <div className="card-image flex  flex-col justify-center  align-middle text-center">
        <img className='mt-8 md:w-[70px] w-[40px] md:ml-[39%] ml-[44%]' src={props.main_image} alt="" />
        <h1 className='mt-2  md:text-[20px] font-bold'>{props.heading}</h1>
            </div>
           <div className="card-list ">
            <ul className='mt-[20px] '>
                <li className='flex gap-2 mt-0  p-4'><span> <img className='rounded-md w-[25px] md:w-[35px]' src={props.img1} alt="" /></span> <h1 className='ml-1 md:mt-1 font-semibold'>{props.txt1}</h1></li>
                <li className='flex gap-2 mt-0  p-4'><span> <img className='rounded-md w-[25px] md:w-[35px]' src={props.img2} alt="" /></span> <h1 className='ml-1 md:mt-1 font-semibold '>{props.txt2}</h1></li>
                <li className='flex gap-2 mt-0  p-4'><span> <img className='rounded-md w-[25px] md:w-[35px]' src={props.img3} alt="" /></span> <h1 className='ml-1 md:mt-1 font-semibold'>{props.txt3}</h1></li>
                <li className='flex gap-2 mt-0  p-4'><span> <img className='rounded-md w-[25px] md:w-[35px]' src={props.img4} alt="" /></span> <h1 className='ml-1 md:mt-1 font-semibold'>{props.txt4}</h1></li>
                <li className='flex gap-2 mt-0  p-4'><span> <img className='rounded-md w-[25px] md:w-[35px]' src={props.img5} alt="" /></span> <h1 className='ml-1 md:mt-1 font-semibold'>{props.txt5}</h1></li>
                <li className='flex gap-2 mt-0 mb-[10px]  p-4'><span> <img className='rounded-md w-[25px] md:w-[35px]' src={props.img6} alt="" /></span> <h1 className='ml-1 md:mt-1 font-semibold'>{props.txt6}</h1></li>
            </ul>
           </div>
        </div>
    </div>
  )
}

export default Smallcard