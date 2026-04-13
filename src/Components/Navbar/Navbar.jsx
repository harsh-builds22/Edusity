import React from 'react'
import './Navbar.css'
import logo from '../../assets/logo.png'


const Navbar = () => {
  return (
   <>
   
   <nav className='container'>
      <img src={logo} alt="Logo" />


        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#Program">Program</a></li>
          <li><a href="#About">About us</a></li>
          <li><a href="#Campus">Campus</a></li>
           <li><a href="#Testimonials">Testimonials</a></li>
          <li><button className='btn'>Contact us</button></li>
        </ul>

   </nav>
   
   
   </>
  )
}

export default Navbar