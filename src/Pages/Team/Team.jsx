import "./Team.css";
import Aduit from '../../Asset/Audit.jpg'
export default function Team() {
return (
  <>
    <div className="team">
          <div className="team-heading-stick">
            <div className="team-elementary-about">
            OUR TEAM
            </div>
          <div className="team-stick">
          </div>
          <div className="team-content">
          Our team has a sound knowledge of related issues and thrives in ideating, providing, and implementing functional solutions.
          </div>  
          </div>

    </div>
    <div className="team-detail">
      <div className="girish">
      <img src={Aduit} alt="" />
           <div className="team-info">
              <h2>
              CA. Girish Upadhyay
              </h2>
              <span>
              (Founder & Managing Partner)
              </span>
              <span>
              Founded this accounting firm with a simple principle: Our success is a direct result of each client’s success.
              </span>
              <span>
              Contact No. 9958073472,8447476622 
              </span>
              <span>
              Email Id :- cagirishupadhyay@gmail.com
              </span>
              <span className="space-email">
               cagirishupadhyay@yahoo.com
               </span>
               <span className="space-email"> 
               cagupadhyay@gmail.com
              </span>
           </div>
          

      </div>
      <div className="chetan">
      <img src={Aduit} alt="" />
      <div className="team-info">
              <h2>
              CA. Chetan Upadhyay
              </h2>
              <span>
              (Managing Partner)
              </span>
              <span>
              As Managing Partner, it is my privilege to ensure that our firm continues to serve the needs of our clients and remains true to the principles that have sustained us for many decades. 
              </span>
              <span>
              Contact No. 7503422525
              </span>
              <span>
              Email Id :- cachetanupadhyay@gmail.com
              </span>

           </div>
          
      </div>
      <div className="bhawna">
      <img src={Aduit} alt="" />
        <div className="team-info">
              <h2>
              CS. Bhawna Gaur
              </h2>
              <span>
              ( Associates Partner)
              </span>
              <span>
              As Associates Partner, it is my privilege to ensure that our firm continues to serve the needs of our clients.
              </span>
              <span>
              Contact No. 7011719573
              </span>
              <span>
              Email Id :- csbhawna.gaur@gmail.com
              </span>

           </div>
          
      </div>
    </div>
  </>
);
}

