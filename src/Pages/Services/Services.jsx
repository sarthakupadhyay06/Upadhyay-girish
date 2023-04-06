import tax from '../../Asset/tax.JPG'
import taxService from '../../Asset/taxService.jpg'
import gst from '../../Asset/gst.JPG'
import taxplan from '../../Asset/taxplan.jpg'
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
    info: ``
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
    src: taxplan,
    info: `Our audit is special because of the people who do it – we only recruit the best, and they’re not afraid to get their hands dirty if it means they really get to understand your business and because we draw on the experience of our senior partners across all disciplines, we take every opportunity to help your business grow.`
  }
]
  return (
  <div className="services">
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
            <Card key={service.id} tag={service.tag} src={service.src} info={service.info}/>
          )
        }
      </div>
    </div>
  );
}
