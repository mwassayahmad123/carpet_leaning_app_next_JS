import Image from 'next/image';
import Link from 'next/link';
import PageHero from '../../components/PageHero';
import SectionHeading from '../../components/SectionHeading';
import FeatureGrid from '../../components/FeatureGrid';
import ProcessSteps from '../../components/ProcessSteps';
import ServiceArea from '../../components/ServiceArea';
import CallToAction from '../../components/CallToAction';
import { inlineLinkClass } from '../../components/LinkedText';
import { PHOTOS, serviceHref } from '../../data/services';

const TITLE = 'Carpet Cleaning Company London | Five Star Cleaning';
const DESCRIPTION =
  'Five Star Carpet Cleaning, serving homes and businesses across London. Discover our professional cleaning services, honest advice, and friendly service.';

export const metadata = {
  title: { absolute: TITLE },
  description: DESCRIPTION,
  alternates: { canonical: '/about/' },
  openGraph: { url: '/about/', title: TITLE, description: DESCRIPTION },
  twitter: { title: TITLE, description: DESCRIPTION },
};

const A = ({ href, tone = 'light', children }) => (
  <Link href={href} className={inlineLinkClass[tone]}>
    {children}
  </Link>
);

const approach = [
  {
    title: 'Inspection',
    text: 'We begin by looking closely at the carpet or fabric, checking for stains, worn areas, and other concerns. We explain what we find and discuss realistic expectations before starting the work.',
  },
  {
    title: 'Fabric assessment',
    text: 'Different materials need different levels of care. We identify the fabric where possible and test a small area for colour-fastness before choosing a suitable cleaning method.',
  },
  {
    title: 'The right method',
    text: 'We use hot water extraction for many carpets and gentler, low-moisture methods where the material requires extra care. We aim to remove built-up dirt while choosing an approach that suits the item being cleaned.',
  },
  {
    title: 'Extraction & drying',
    text: 'Our equipment extracts dirt and removes as much moisture as practical during cleaning. Good extraction and suitable airflow help the cleaned area dry, although the time needed depends on the fabric, room conditions and level of soiling.',
  },
  {
    title: 'Final checks',
    text: 'Before we finish, we check the cleaned area with you, groom the carpet pile where appropriate and share simple aftercare advice. We want you to understand what has been cleaned and how to look after it afterwards.',
  },
];

const reasons = [
  {
    title: 'Professional equipment',
    text: 'We use professional extraction machines and upholstery tools designed for carpet and fabric cleaning. The right equipment helps us remove embedded dirt and extract moisture more effectively than many basic home cleaning tools.',
  },
  {
    title: 'Careful fabric treatment',
    text: 'We do not assume that every carpet or sofa can be cleaned in the same way. We assess the material and carry out a suitable colour test before choosing a method, helping us take extra care with delicate fabrics.',
  },
  {
    title: 'Convenient booking',
    text: 'You can contact us by phone, WhatsApp or through our website to discuss your cleaning needs. We aim to make arranging a visit straightforward and help you find a suitable appointment.',
  },
  {
    title: 'Honest advice',
    text: (
      <>
        Some <A href={serviceHref('stain-removal')}>stains can be removed</A>, while others may only become lighter
        because of their age, type, or effect on the fibres. We explain what may be possible before cleaning, so you can
        make an informed decision without unrealistic promises.
      </>
    ),
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        title="About Five Star Carpet Cleaning"
        intro={
          <>
            Five Star Carpet Cleaning is a carpet cleaning company in London, helping homeowners, tenants, landlords and
            businesses care for their carpets, sofas, <A href={serviceHref('rug-cleaning')} tone="dark">rugs</A> and
            other soft furnishings. We focus on careful cleaning, honest advice and a service that respects your home or
            workplace.
          </>
        }
        image={PHOTOS.creamCarpet}
        breadcrumbs={[{ label: 'About' }]}
      />

      {/* Who We Are */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div>
              <SectionHeading eyebrow="Our story" title="Who We Are" align="left" />
              <div className="space-y-4 text-lg text-gray-600 leading-relaxed">
                <p>
                  We believe good <A href="/">carpet cleaning</A> starts with understanding what each customer needs. For
                  more than ten years, we have helped customers across London keep their carpets and soft furnishings
                  cleaner and fresher. Our work includes carpet, sofa, rug, mattress and{' '}
                  <A href={serviceHref('curtain-cleaning')}>curtain cleaning</A> for homes and business premises.
                </p>
                <p>
                  Many of our customers come back to us or recommend us to friends, neighbours and landlords. We value
                  these relationships and aim to make every visit straightforward, from the first enquiry to the final
                  check. As experienced <A href="/contact/">carpet cleaners in London</A>, we take the time to understand
                  the condition of each item before deciding how best to clean it.
                </p>
              </div>
            </div>
            <div className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl">
              <Image src={PHOTOS.extractionWand.src} alt={PHOTOS.extractionWand.alt} fill sizes="(min-width: 1024px) 50vw, 100vw" className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* How We Clean */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Our approach"
            title="How We Clean"
            intro="Every carpet and fabric is different, so we choose our cleaning method based on the material, its condition, and the type of dirt or staining. This careful approach helps us clean effectively while taking proper care of your belongings."
          />
          <ProcessSteps steps={approach} columns="lg:grid-cols-3" />
        </div>
      </section>

      {/* Why Customers Choose Us */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="What makes us different"
            title="Why Customers Choose Us"
            intro="Choosing a professional carpet cleaning company should feel simple and reassuring. We focus on careful work, clear communication, and practical advice, so you know what to expect before we begin. From a single room to a larger cleaning job, we take the time to understand your needs and treat your property with respect."
          />
          <FeatureGrid items={reasons} columns="lg:grid-cols-4" />
        </div>
      </section>

      {/* Homes, Rental Properties and Businesses */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading eyebrow="Who we help" title="Carpet Cleaning for Homes, Rental Properties and Businesses" />
          <div className="max-w-3xl mx-auto space-y-4 text-lg text-gray-600 leading-relaxed">
            <p>
              Five Star Carpet Cleaning provides residential and{' '}
              <A href={serviceHref('carpet-cleaning')}>commercial carpet cleaning</A> for customers with different needs
              across London. Homeowners may want to freshen up living rooms and bedrooms, tenants may need help caring for
              carpets during a tenancy, and landlords may need carpets cleaned between occupants. We also help businesses
              maintain cleaner carpets and soft furnishings in their premises.
            </p>
            <p>
              Whether you need one room cleaned or several areas assessed, we will discuss the work required and recommend
              a suitable approach. Our carpet and{' '}
              <A href={serviceHref('upholstery-sofa-cleaning')}>upholstery cleaning service</A> is designed around the
              items that need attention and the condition they are in.
            </p>
          </div>
        </div>
      </section>

      <ServiceArea
        background="bg-white"
        intro="Based in East London (E11), we travel to homes and business premises across London and Greater London. If you are searching for a “professional carpet cleaning company near me”, get in touch with your postcode and the service you need. We can confirm whether your location is covered and discuss the next steps."
        extra="Our team provides carpet and upholstery cleaning for a range of customers and materials. If you are comparing carpet and upholstery cleaning companies, we encourage you to ask about the cleaning method, fabric care, and what is included in the quote before making a decision."
      />

      {/* Why You Can Trust Us */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading eyebrow="Trust" title="Why You Can Trust Five Star Carpet Cleaning" />
          <div className="max-w-3xl mx-auto space-y-4 text-lg text-gray-600 leading-relaxed">
            <p>
              Trust comes from clear communication, careful work, and honest expectations. We take time to assess each
              carpet or fabric, explain the proposed cleaning method, and discuss any concerns before we start. We aim to
              provide a reliable service and treat every property with care.
            </p>
            <p>
              Looking for carpet cleaning experts in London? Whether you need specialist carpet cleaning for delicate
              fabrics, rugs, or other items, tell us about your requirements. We’ll explain the available cleaning
              options, discuss what’s realistically possible, and help you choose the right approach for your needs. From
              your first enquiry to the final inspection, we aim to keep you informed and confident in your decision.
            </p>
          </div>
        </div>
      </section>

      <CallToAction
        title="Book a Cleaning or Request a Quote"
        text="Tell us what needs cleaning and we will get back to you with a clear, no-obligation price."
      />
    </>
  );
}
