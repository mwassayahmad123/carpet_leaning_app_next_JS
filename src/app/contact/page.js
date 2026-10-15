import PageHero from '../../components/PageHero';
import BookingForm from '../../components/BookingForm';
import ContactDetails from '../../components/ContactDetails';
import ServiceArea from '../../components/ServiceArea';
import Link from 'next/link';
import { inlineLinkClass } from '../../components/LinkedText';
import { PHOTOS, serviceHref } from '../../data/services';
import { SITE } from '../../data/site';

const TITLE = 'Contact Five Star Carpet Cleaning | Carpet Cleaning London';
const DESCRIPTION =
  'Contact Five Star Carpet Cleaning for carpet, upholstery, rug, stain removal, mattress, and curtain cleaning in London UK. Free estimates - call us today!';

export const metadata = {
  title: { absolute: TITLE },
  description: DESCRIPTION,
  alternates: { canonical: '/contact/' },
  openGraph: { url: '/contact/', title: TITLE, description: DESCRIPTION },
  twitter: { title: TITLE, description: DESCRIPTION },
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        title="Contact Five Star Carpet Cleaning in London"
        intro="Get in touch with Five Star Carpet Cleaning for a free, no-obligation quote. Call us, send a WhatsApp message, or fill in our booking form to ask a question or arrange your cleaning. You can also share photos of your carpet or sofa to help us provide a more accurate carpet cleaning quote."
        image={PHOTOS.bayWindow}
        breadcrumbs={[{ label: 'Contact' }]}
      />

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 max-w-7xl mx-auto">
            <div className="lg:col-span-3">
              <BookingForm />
            </div>
            <div className="lg:col-span-2 space-y-6">
              <ContactDetails title="Contact Details" />
              <div className="bg-gray-50 rounded-3xl p-6 sm:p-8 border border-gray-100">
                <h2 className="text-xl font-bold text-gray-900 mb-3">Opening hours & response time</h2>
                <p className="text-gray-600 leading-relaxed mb-2">{SITE.openingHours}</p>
                {/* TODO: confirm a realistic response time with the business. */}
                <p className="text-gray-600 leading-relaxed">
                  We reply to calls, WhatsApp messages and booking requests during opening hours. For the quickest
                  response, message us on WhatsApp.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ServiceArea
        intro={
          <>
            We’re based in East London (E11) and provide{' '}
            <Link href={serviceHref('carpet-cleaning')} className={inlineLinkClass.light}>carpet cleaning services</Link>{' '}
            for homes and businesses across London and Greater London. Whether you need your carpets or sofa cleaned,
            we’re happy to help. Not sure if we cover your area? Send us your postcode, and we’ll confirm whether we can
            reach you.
          </>
        }
      />
    </>
  );
}
