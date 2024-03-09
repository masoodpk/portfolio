import React, { useEffect } from 'react'
import Smallcard from '../Card/SmallCard/Smallcard'
import backend from '../../assets/backend.svg'
import frontend from '../../assets/frontend.svg'
import express from '../../assets/express.svg'
import css from '../../assets/css.svg'
import bootstrap from '../../assets/bootstarp.svg'
import html from '../../assets/html.svg'
import sql from '../../assets/sql.svg'
import tailwind from '../../assets/tailwind.svg'
import react from '../../assets/react.svg'
import node from '../../assets/node.svg'
import other from '../../assets/others.svg'
import mongo from '../../assets/mongo.svg'
import js from '../../assets/logo-javascript.svg'
import { GoGear } from "react-icons/go";
import AOS from 'aos'
import 'aos/dist/aos.css'
function Skill() {
  useEffect(()=>{
AOS.init({duration: 800})
  },[])
  return (
    <div className='skill-container  mb-[50px] pb-[50px]  text-center ' id='Skill'>

        <div className="skill-heading pt-9 flex justify-center  ">
         
        <h1  className='text-[50px] font-semibold text-neutral-500    bg-neutral-200 rounded-full w-[350px] shadow-md shadow-neutral-200 flex justify-around  'data-aos='zoom-in' ><span className='drop-shadow-md ' >SKILLS</span> <GoGear className='animate-spin mt-[10px] '/> </h1>
        </div>
        

        <div className="cards flex flex-col md:flex md:flex-row justify-center align-middle gap-[50px] flex-wrap">
        <Smallcard main_image={frontend}  heading={"Front end"}        img1={html}    img2={css}   img3={bootstrap}  img4={tailwind} img5={react} img6={js} txt1={"Html"} txt2={"css"} txt3={"Bootstrap"} txt4={"Tailwind Css"} txt5={"React js"} txt6={"Javascript"} />
        <Smallcard main_image={backend}   heading={"Back end"}  img1={express}    img2={node} txt1={"Express js"} txt2={"Node js"} />
        <Smallcard main_image={other}      heading={"Others"} img1={sql} img2={mongo}  txt1={"Mysql"} txt2={"Mongo db"}  />
        </div>
        
        
        </div>
  )
}

export default Skill