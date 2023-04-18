import background from '../../Asset/background.mp4'
import Services from '../Services/Services';
import ContactUs from '../contactus/ContactUs';
import "./Home.css";
export default function Home() {
  return (
    
    <>
      <div class="video-box">
        <video src={background} autoPlay loop muted />
        <div class="text-overlay">
          <div><h2 class="pencislider-title">Get fair tax on your business</h2>Say goodbye to stress &amp; Say hello to confidence by having us as your trusted accountant.</div><div class="penci-slider_btnwrap"><a class="pencislider-btn pencislider-btn-1 penci-button" href="https://www.sramanuj.com/contact-us/"><span>contact us</span></a><a class="pencislider-btn pencislider-btn-2 penci-button" href="https://www.sramanuj.com/services/"><span>discover more</span></a></div>
        </div>
      </div>

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
    <br />
    <br />
    <ContactUs/>
        
      </span>
    </>
  );
}
