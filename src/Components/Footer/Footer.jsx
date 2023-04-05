import { FiFacebook } from 'react-icons/fi';
import {GrInstagram} from 'react-icons/gr';
import {FaLinkedin} from 'react-icons/fa';
import "./Footer.css";
import CA from '../../Asset/CA.jpg'

const Footer = () => {
  return (
    <div id="footer">
      <div className="footer-container">
        <div className="footer-widget-wrapper">
          <div className="img-container">
            <img src={CA} alt="CA" />
          </div>
          <p className="info">
          The firm is the brainchild of our honorable Proprietor CA. Girish Upadhyay, who made concrete efforts to organize it.
          </p>
        </div>
        <div className="footer-widget-wrapper">
          <aside className="resources-info">
            <h4 className='heading-horizontal-divider p-5'>RESOURCES</h4>
            <ul>
              <li className='p-5 horizontal-divider'>
                <a href="#">Home</a>
              </li>
              <li className='p-5 horizontal-divider'>
                <a href="#">Team</a>
              </li>
              <li className='p-5 horizontal-divider'>
                <a href="#">Services</a>
              </li>
              <li className='p-5 horizontal-divider'>
                <a href="#">About Us</a>
              </li>
              <li className='p-5'>
                <a href="#">Contact Us</a>
              </li>
            </ul>
          </aside>
        </div>
        <div className="footer-widget-wrapper">
          <aside className="contact-info">
            <h4 className='heading-horizontal-divider p-5'>CONTACT INFO</h4>
            <p>
              <strong>Head Office:</strong><br /> C-44/207 Street No. 11, Bhajanpura New Delhi, 110053, India 
            </p>
            <p>
              <strong>Tel:</strong><br /> +91-9958073472, +91-7503422525, +91-7011719573
            </p>
            <p>
              <strong>Email:</strong> cagirishupadhyay@gmail.com, cachetanupadhyay@gmail.com, csbhawna.gaur@gmail.com
            </p>
            <p>
              <strong>Branches:</strong> Delhi
            </p>
          </aside>
        </div>
      </div>
        <div className="link-container center">
          <a href="#">
            <FiFacebook color="white"/>
          </a>
          <a href="#">
            <GrInstagram color="white"/>
          </a>
          <a href="#">
            <FaLinkedin color="white"/>
          </a>
        </div>
    <hr className='horizontal' />
      <div className="site-copyright center">
        &copy; 2022 - All Right Reserved. Designed and Developed by XYZ powered
        by ABC
      </div>
    </div>
  );
};

export default Footer;
