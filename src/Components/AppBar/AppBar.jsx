import React from "react";
import { FiFacebook } from "react-icons/fi";
import { GrInstagram } from "react-icons/gr";
import { FaLinkedin } from "react-icons/fa";
import { NavLink , useLocation } from "react-router-dom";
import ca from "../../Asset/CA.jpg";
import "./AppBar.css";
export default function AppBar() {
  const location = useLocation();
  
  console.log(location.pathname == "/home");
  return (
    <nav id="nav">
      <NavLink to="/home">
        <div className="logo">
          <img src={ca} alt="" />
         
        </div>
        
    </NavLink>
      <div id="Appbar">
      <div className="companyname">
          <h2>
            Girish Upadhyay & Company
          </h2>
        </div>
        <div></div>
        <div className="content-button">
          <div className="home">
            <NavLink to="/home">
              <a className=''>Home</a>
            </NavLink>
          </div>
          <div className="service">
            <NavLink to="/services">
              <a>Service</a>
            </NavLink>
          </div>
          <div className="team">
            <NavLink to="/team">
              <a>Team</a>
            </NavLink>
          </div>
          <div className="about-us">
            <NavLink to="/about">
              <a>About Us</a>
            </NavLink>
          </div>
          <div className="contact-Us ">
            <NavLink to="/contact">
              <a>Contact Us</a>
            </NavLink>
          </div>
          <div className="links">
            <a href="#">
              <FiFacebook />
            </a>
            <a href="#">
              <GrInstagram />
            </a>
            <a href="#">
              <FaLinkedin />
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
