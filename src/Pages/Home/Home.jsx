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
    <>
      <div class="video-box">
        <video src={background} autoPlay loop muted />
        <div class="text-overlay">
          <div><h2 class="pencislider-title">Get fair tax on your business</h2>Say goodbye to stress &amp; Say hello to confidence by having us as your trusted accountant.</div><div class="penci-slider_btnwrap"><a class="pencislider-btn pencislider-btn-1 penci-button" href="https://www.sramanuj.com/contact-us/"><span>contact us</span></a><a class="pencislider-btn pencislider-btn-2 penci-button" href="https://www.sramanuj.com/services/"><span>discover more</span></a></div>
        </div>
      </div>

      <span className="tagline">
        <Services />
        <Team />
      </span>
    </>
  );
}
