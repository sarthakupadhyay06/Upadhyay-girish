import React from 'react'
import { MdLocationOn } from "react-icons/md";
import { MdCall } from "react-icons/md";
import { MdOutlineMailOutline } from "react-icons/md";
import { RxClock } from "react-icons/rx";
import "./ContactUs.css";
export default function ContactUs() {
  return (
    <div className='contactusmain'>
        <h1 className='head'>Contact Us</h1>
        <div className="row">
          <div className="contact-info">
             <div className="address">
                 {/* <GoLocation></GoLocation> */}
                <MdLocationOn size={50}></MdLocationOn>
               <h3>
                Address
               </h3>
               <div className='info-span'>
               <p>
               C-44/207 Street No. 11,  
               </p>
               <p>
               Bhajanpura New Delhi,
               </p>
               <p>
               110053, India
               </p>
               </div>
               
             </div>
             <div className="contactno">
             <MdCall size={50}></MdCall>
               <h3>
                Address
               </h3>
               <div className='info-span'>
               <p>
               C-44/207 Street No. 11,  
               </p>
               <p>
               Bhajanpura New Delhi,
               </p>
               <p>
               110053, India
               </p>
               </div>
             </div>
             <div className="emailinfo">
             <MdOutlineMailOutline size={50}></MdOutlineMailOutline>
               <h3>
                Address
               </h3>
               <div className='info-span'>
               <p>
               C-44/207 Street No. 11,  
               </p>
               <p>
               Bhajanpura New Delhi,
               </p>
               <p>
               110053, India
               </p>
               </div>
             </div>
             <div className="opendays">
             <RxClock size={50}></RxClock>
               <h3>
               Open Days & Times
               </h3>
               
               <div className='info-span'>
               <p>
               Monday - Saturday <br />
               10:00AM - 06:00PM
               </p>
               </div>
             </div>
          </div>
          <div className="contact-detail">
            <div className="name">
             <input type="text" placeholder='Your Name' />
             <input type="text"  placeholder='Your Phone Number'/>

            </div>
            <input type="email" name="" id="" placeholder='Your Email'/>
            <input type="text" placeholder='Subject' />
            <textarea name="" id="" cols="30" rows="10" placeholder='message'></textarea>
            <button className='butto'>Send Message</button>
          </div>
          </div>  

    </div>
  )
}
