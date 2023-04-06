import tax from '../../Asset/tax.JPG'
import gst from '../../Asset/gst.JPG'
import taxplan from '../../Asset/taxplan.jpg'
import Card from '../../Components/Card/Card'
import './Services.css'

export default function Services() {
  const Services = [
  {
    id: 1,
    tag: "Tax Service",
    src: tax,
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
    id: 2,
    tag: "Tax plan",
    src: taxplan,
    info: ``
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
