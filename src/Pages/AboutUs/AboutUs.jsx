import React from 'react'
import './AboutUs.css'
import expertise from '../../Asset/expertise.JPG'
export default function AboutUs() {
  return (
    <div>
        <div className="AboutUs">
            <div className="about-us-heading">
            <div className="stick">
            </div>
            <div className="elementary-about">
            ABOUT US
            </div>
            </div>
            <div className="container">
                <div className="about-firm-heading">
                      About The Firm
                </div>
                <article className='about-us-content'>
               <p>
               Upadhyay Girish And Company's (UGC) was founded in the year 2014 in India and over the period of time the firm has developed as a reputed accounting and advisory firm.
               </p>
               <p>
               Upadhyay Girish And Company's (UGC) currently handling the Internal Audits, Statutory Audit, ROC Filling, Regulatory, Assurance & Due Diligence.
               </p>
                <p>
                Areas of Expertise :- Internal Audit, IFC Audit, Statutory Audit, Tax Audit, GST Audit, Company Incorporation, Trade Mark, Statutory Compliance (Direct Tax and Indirect Tax) and ROC work (Company Incorporation,  Strik off, Annual Filling & NCLT Cases etc).
                </p>
                <p>
                Keeping in mind the constantly changing and volatile environment under which companies operate, compliance reviews and risk mitigation activities are the need of the hour. Upadhyay Brother's conducts compliance reviews, investigates frauds and misconducts and helps quantify and measure the financial impact of these.
                </p>
                <p>
                Upadhyay Girish And Company's conducts audits in line with the guidelines laid down by the Institute of Chartered Accountants of India and the generally accepted audit and accounting principles. Services include conduct of Statutory Audit, Tax Audit, Internal Audit, Compliance  with Direct and Indirect laws. 
                </p>
                </article>
                <div className="about-firm-heading">
                   About CA Girish Upadhyay
                </div>
                <article className='about-us-content'>
                 <p>
                 CA Girish Upadhyay is currently a fellow Chartered Accountant of the Institute of Chartered Accountants of India and having various post qualifications in Insolvency Professional (IP), Independent Directorship from MCA, Registered Valuer of Securities and Financial Assets as per IBBI, Forensic Audit (FAFD), DISA(Diploma in Information System Audit) etc.
                 </p>
                 <p>
                 He is having 14+ years of work experience in broad range of audit, compliance, tax and corporate service. Gained long serving experience to a number of multinational Companies, foreign national and Indian corporate and Firms in the field of audit, direct tax, international taxation, Transfer Pricing, Indirect tax, India entry Strategy, Formation of Joint venture Company and wholly owned subsidiary, investment in Indian entity, due diligence, mergers & Acquisitions, project finance, compliance and advisory service on Tax, Account, payroll management, Companies Act and Foreign Exchange Management Act.
                 </p>
                 <p>
                 Academic and Professional Qualification. 2005-2008- Articleship from M.D Gujrati &Co. 2007 qualified for Chartered Accountant. 2008-2011 Manager finance & taxation manager in India News channel and picaddly groups. 2012 - Started fulltime practice as a managing partner at Santosh Ramanuj &Co. Along with 5 Partners having branches at Noida, Patna, Gurugram, Ranchi. 2015-quaIified for DISA (Diploma in information system audit ). -qualified for forensic accounting and fraud detection from ICAI. qualified insolvancy course from IIIPICAI qualified for registered valuation from ICAI 2020-quaIified for independent directorship MCA.
                 </p>
                </article>
            </div>
            <div className="image-expertise center">
                <img src={expertise} alt="" />
            </div>
        </div>
    </div>
  )
}

