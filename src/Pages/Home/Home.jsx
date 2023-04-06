import background from '../../Asset/background.mp4'
import Services from '../Services/Services';
import Team from '../Team/Team';

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
    <Team />
  </span>
</div>
      </div>
    );
  }
  