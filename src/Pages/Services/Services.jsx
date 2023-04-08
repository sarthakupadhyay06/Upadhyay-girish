import tax from '../../Asset/tax.JPG'
import taxService from '../../Asset/taxService.jpg'
import Account from '../../Asset/Account.jpg'
import Aduit from '../../Asset/Audit.jpg'
import gst from '../../Asset/gst.JPG'
import Card from '../../Components/Card/Card'
import './Services.css'

export default function Services() {
  const Services = [
    {
      id: 1,
      tag: "Tax Service",
      src: taxService,
      info: `Upadhyay Girish & Company provides domestic tax services to individuals, corporations, partnerships, trusts & estates, non-profit organizations. Our goal is to assist our clients with innovative tax planning, strong tax advocacy, and effective domestic tax strategies.`
    },
    {
      id: 2,
      tag: "Income Tax",
      src: tax,
      info: `Consultancy on various intricate matters pertaining to Income tax.Effective tax management, tax structuring and advisory services.Tax Planning for Corporates and others.Designing / restructuring salary structure to minimise tax burden.`
    },
    {
      id: 3,
      tag: "Gst Services",
      src: gst,
      info: `We provides end-to-end GST services from GST registration to GST return and compliance. You can easily create invoices, track expenses, manage inventory and file GST returns through our cloud-based GST software. Get in touch with our Experts for GST related advisory.`
    },
    {
      id: 4,
      tag: "Audit Services",
      src: Aduit,
      info: `Our audit is special because of the people who do it – we only recruit the best, and they’re not afraid to get their hands dirty if it means they really get to understand your business and because we draw on the experience of our senior partners across all disciplines, we take every opportunity to help your business grow.`
    },
    {
      id: 5,
      tag: "Account Services",
      src: Account,
      info: `Competency, know-how, experience and expertise motivate us to offer a wide range of outsourcing services to our clients and helping them to manage heavy workloads and ease the burden. Taking peace of mind as an ideal, we provide a capable helping hand to our clients.`
    }
  ]
  return (
    <div className="services-background">
      <div className="service-image-overlay">
        <div className="service-heading-stick">
          <div className="service-elementary-about">
            OUR SERVICES
          </div>
          <div className="service-stick">
          </div>
        </div>
        <div className="container service-container">
          {
            Services.map(service =>
              <Card key={service.id} tag={service.tag} src={service.src} info={service.info} />
            )
          }
        </div>
      </div>
    </div>
  );
}
