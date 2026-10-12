import Image from 'next/image';
import PageHero from '../../components/PageHero';
import SectionHeading from '../../components/SectionHeading';
import FeatureGrid from '../../components/FeatureGrid';
import ProcessSteps from '../../components/ProcessSteps';
import ServiceArea from '../../components/ServiceArea';
import CallToAction from '../../components/CallToAction';
import { PHOTOS } from '../../data/services';
import { SITE } from '../../data/site';

export const metadata = {
  title: { absolute: 'About Us | Five Star Carpet Cleaning Company London' },
  description:
    'Meet Five Star Carpet Cleaning, a London carpet and upholstery cleaning company serving homes, landlords, tenants and businesses. Learn how we clean and why customers choose us.',
  alternates: { canonical: '/about/' },
  openGraph: { url: '/about/', title: 'About Five Star Carpet Cleaning London' },
};

const approach = [
  { title: 'Inspection', text: 'We look at the carpet or fabric, note stains, wear and any problem areas, and agree what to expect.' },
  { title: 'Fabric assessment', text: 'We identify the material and test for colour-fastness before choosing a method.' },
  { title: 'The right method', text: 'Hot water extraction for most carpets; gentler, low-moisture methods for delicate fabrics and rugs.' },
  { title: 'Extraction & drying', text: 'Powerful extraction removes dirt and as much moisture as possible so items dry faster.' },
  { title: 'Final checks', text: 'We walk through the result with you, groom the pile and leave aftercare advice.' },
];

const differences = [
  { title: 'Professional equipment', text: 'Commercial-grade extraction machines and upholstery tools rather than rental machines.' },
  { title: 'Careful fabric treatment', text: 'Every job starts with a colour-fastness test so delicate fabrics are cleaned safely.' },
  { title: 'Convenient booking', text: 'Book by phone, WhatsApp or online, seven days a week.' },
  { title: 'Honest advice', text: 'We tell you up front which stains will come out and which may only lighten.' },
];

const customers = [
  { title: 'Homeowners', text: 'Regular deep cleans for carpets, sofas, rugs and mattresses.' },
  { title: 'Tenants', text: 'End-of-tenancy carpet cleaning to help get your deposit back.' },
  { title: 'Landlords & letting agents', text: 'Cleaning between tenancies and for HMO and rental properties.' },
  { title: 'Offices', text: 'Office carpets and chairs cleaned around your working hours.' },
  { title: 'Businesses', text: 'Shops, hospitality venues and communal areas.' },
  { title: 'Holiday lets', text: 'Quick-turnaround cleans for Airbnb and short-let properties.' },
];

// TODO: only list credentials the business can evidence (insurance certificate, memberships, review profiles).
const trustSignals = [
  { title: '10+ years of experience', text: 'More than a decade cleaning carpets and upholstery across London.' },
  { title: 'Fully insured team', text: 'Your home and belongings are protected while we work.' },
  { title: 'Genuine customer reviews', text: 'Our work is built on word of mouth and five-star feedback from real customers.' },
  { title: 'Eco-friendly products', text: 'Biodegradable cleaning solutions suitable for homes with children and pets.' },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        title="About Five Star Carpet Cleaning"
        intro={`A London carpet and upholstery cleaning company based in ${SITE.baseArea}, helping homes and businesses across London keep carpets, sofas and rugs fresh and clean.`}
        image={PHOTOS.creamCarpet}
        breadcrumbs={[{ label: 'About' }]}
      />

      {/* Our Story */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div>
              <SectionHeading eyebrow="Our story" title="Who We Are" align="left" />
              {/* TODO: replace with the business's own founding story and real details. */}
              <div className="space-y-4 text-lg text-gray-600 leading-relaxed">
                <p>
                  Five Star Carpet Cleaning started with a simple idea: carpet cleaning should be done properly, by people
                  who treat your home with respect. For more than ten years we have been cleaning carpets, sofas, rugs,
                  mattresses and curtains for customers across London.
                </p>
                <p>
                  We have grown through word of mouth and repeat customers. Most of our work comes from people who have
                  used us before or been recommended by a friend, neighbour or landlord.
                </p>
              </div>
            </div>
            <div className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl">
              <Image src={PHOTOS.extractionWand.src} alt={PHOTOS.extractionWand.alt} fill sizes="(min-width: 1024px) 50vw, 100vw" className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Our Cleaning Approach */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Our approach"
            title="How We Clean"
            intro="The same careful process on every job, whether it is one sofa or a whole house."
          />
          <ProcessSteps steps={approach} />
        </div>
      </section>

      {/* What Makes Us Different */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading eyebrow="What makes us different" title="Why Customers Choose Us" />
          <FeatureGrid items={differences} columns="lg:grid-cols-4" />
        </div>
      </section>

      {/* Who We Help */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Who we help"
            title="Homes, Landlords and Businesses"
            intro="We clean for a wide range of customers across London."
          />
          <FeatureGrid items={customers} />
        </div>
      </section>

      <ServiceArea background="bg-white" />

      {/* Trust Signals */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading eyebrow="Trust" title="Why You Can Trust Us" />
          <FeatureGrid items={trustSignals} columns="lg:grid-cols-4" />
        </div>
      </section>

      <CallToAction
        title="Book a Cleaning or Request a Quote"
        text="Tell us what needs cleaning and we will get back to you with a clear, no-obligation price."
      />
    </>
  );
}
