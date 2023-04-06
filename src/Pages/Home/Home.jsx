import background from '../../Asset/background.mp4'
import "./Home.css";
export default function Services() {
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
  </span>
</div>
      </div>
    );
  }
  