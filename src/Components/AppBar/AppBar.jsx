import React from "react";
import { FiFacebook } from "react-icons/fi";
import { GrInstagram } from "react-icons/gr";
import { FaLinkedin } from "react-icons/fa";
import { NavLink , useLocation } from "react-router-dom";
import ca from "../../Asset/CA.jpg";
import "./AppBar.css";
export default function AppBar() {
  const location = useLocation();
  
  console.log(location.pathname === "/home");
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
            Upadhyay Girish & Company
          </h2>
        </div>
        <div></div>
        <ul className="content-button">
          <li className="home">
            <NavLink to="/home">
              Home
            </NavLink>
          </li>
          <li className="service">
            <NavLink to="/services">
              Service
            </NavLink>
          </li>
          <li className="team">
            <NavLink to="/team">
              Team
            </NavLink>
          </li>
          <li className="about-us">
            <NavLink to="/about">
              About Us
            </NavLink>
          </li>
          <li className="contact-Us ">
            <NavLink to="/contact">
              Contact Us
            </NavLink>
          </li>
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
        </ul>
      </div>
    </nav>
  );
}
