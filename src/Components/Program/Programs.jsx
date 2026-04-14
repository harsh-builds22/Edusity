import React from 'react'
import './Programs.css'

import img1 from '../../assets/program-1.png'
import img2 from '../../assets/program-2.png'
import img3 from '../../assets/program-3.png'


import { FaGraduationCap } from "react-icons/fa";
import { LiaGraduationCapSolid } from "react-icons/lia";
import { RiGraduationCapFill } from "react-icons/ri";


const Programs = () => {
  return (
    <>
    
    <div className="programs">
              
       <div className="program">
         <img src={img1} alt="" />

         <div className="caption">
            <FaGraduationCap/>
            <p>Undergraduate degree</p>
         </div>
       </div>

       <div className="program">
         <img src={img2} alt="" />

         <div className="caption">
            <RiGraduationCapFill/>
            <p> Master degree</p>
         </div>
       </div>

       <div className="program">
         <img src={img3} alt="" />

         <div className="caption">
            <LiaGraduationCapSolid/>
            <p> Post-Graduation degree</p>
         </div>
       </div>


    </div>
      
    
    
    </>
  )
}

export default Programs