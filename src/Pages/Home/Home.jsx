import background from '../../Asset/background.mp4'
import Services from '../Services/Services';
import ContactUs from '../contactus/ContactUs';

import "./Home.css";
export default function Home() {
    return (
      // <div className="about-us-heading">
      //   {/* <div className="stick"></div>
      //   <div className="elementary-about">HOME</div>
      //   <div className="container">
          
      //   </div> */}
      // </div>
      <div className='video-box'>
<div className="gradient">
  <video src={background} autoPlay loop muted />
  <span className="tagline">
    <Services />
    <br />
    <br />
    <div className="about-us-home">
            <h2 className="about-home">About Us</h2>
          <div class="about-p container">
          <p><strong>Upadhyay Girish &amp; Company</strong>, a Chartered Accountant Firm, founded by&nbsp;<strong><span>C</span><span>A</span>&nbsp;Girish Upadhyay</strong>&nbsp;with the enthusiasm of providing the best consultancy and proficiency. We are a dedicated firm striving to add value to the business of its clients. Firm has specialisation in the field of producer company registration and compliance, corporate and individual Tax planning and corporate compliance.</p>
          <p>The firm is having its registered office in&nbsp;<strong>delhi</strong>.</p>
          <p>Our clients are associated with us due to our professional ethics, quality service, core competency, and clients relationships. We provide professional and research based business solutions through a team of expert professional and consultants. We strive to be the leaders in the industry through our creativity and vision, our ability to see the endless opportunities, our abilities to determine the unsolved and our ability to adopt &amp; accept changes.</p>
          </div>
    </div>
    <ContactUs/>
  </span>
</div>
      </div>
    );
  }
  