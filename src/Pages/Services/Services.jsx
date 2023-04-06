import tax from '../../Asset/tax.JPG'
import gst from '../../Asset/gst.JPG'
import taxplan from '../../Asset/taxplan.jpg'
import Card from '../../Components/Card/Card'
import './Services.css'

export default function Services() {
  const Services = [{
    id: 1,
    tag: "Tax",
    src: tax,
    info: `Upadhyay Brother's provides domestic tax services to individuals, corporations, partnerships, trusts & estates, non-profit organizations.

    Our goal is to assist our clients with innovative tax planning, strong tax advocacy, and effective domestic tax strategies.
    
    This includes the following:
    
        Comprehensive advice on tax matters & tax planning;
    
        Advising clients on tax-effective compensation structuring for their employees;
    
        Preparation, review, and filing of corporate and non-corporate return and e-returns and withholding tax compliances;
    
        Representation before Income Tax Authorities;
    
        Assistance in availing exemption certificate and approvals;
    
        Conducting tax compliance review;`
  },{
    id: 1,
    tag: "Tax plan",
    src: taxplan,
    info: `Upadhyay Brother's provides domestic tax services to individuals, corporations, partnerships, trusts & estates, non-profit organizations.

    Our goal is to assist our clients with innovative tax planning, strong tax advocacy, and effective domestic tax strategies.
    
    This includes the following:
    
        Comprehensive advice on tax matters & tax planning;
    
        Advising clients on tax-effective compensation structuring for their employees;
    
        Preparation, review, and filing of corporate and non-corporate return and e-returns and withholding tax compliances;
    
        Representation before Income Tax Authorities;
    
        Assistance in availing exemption certificate and approvals;
    
        Conducting tax compliance review;`
  },{
    id: 1,
    tag: "Gst",
    src: gst,
    info: `GST was introduced in 2016 and has been a game changer. It has helped in the ease of doing business. From a multitude of taxes at the centre and state level, it has be simplified to a single tax. Upadhyay Brother's provides services in GST registration and migration, calculation of GST liabilities and credits, filing of GST returns, liaising with authorities in cases of tax demands, scrutiny or disputes for both GST and erstwhile indirect tax issues (service tax, VAT, excise, etc.), interpretation of GST Act and specific sections depending upon the clients’ industry, products, exporter/importer status etc.

    Appropriate classification in terms of HSN and SAC codes and the applicable tax rates;
    
    Ascertain place of supply to determine relevant state for GST compliances and tax payments;
    
    Claim proper input tax credits where eligible and exclude or defer input tax credits not eligible as well as refunds or tax credits for exports
    
    Ascertain and ensure compliance with reverse charge on inward supplies where applicable;
    
    Structuring of contracts / transactions to optimize tax incidence;
    
     Conducting tax impact assessment studies. `
  }]
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
            <Card tag={service.tag} src={service.src} info={service.info}/>
          )
        }
      </div>
    </div>
  );
}
