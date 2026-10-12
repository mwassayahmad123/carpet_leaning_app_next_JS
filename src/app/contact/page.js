import PageHero from '../../components/PageHero';
import BookingForm from '../../components/BookingForm';
import ContactDetails from '../../components/ContactDetails';
import ServiceArea from '../../components/ServiceArea';
import { PHOTOS } from '../../data/services';
import { SITE } from '../../data/site';

export const metadata = {
  title: { absolute: 'Contact & Book Carpet Cleaning London | Five Star' },
  description:
    'Book carpet, sofa, rug, mattress or curtain cleaning in London. Call, WhatsApp or send our booking form for a free, no-obligation quote.',
  alternates: { canonical: '/contact/' },
  openGraph: { url: '/contact/', title: 'Contact Five Star Carpet Cleaning London' },
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        title="Contact & Book Carpet Cleaning in London"
        intro="Call, WhatsApp or send the booking form for a free, no-obligation quote. Photos of the carpet or sofa help us price accurately."
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

      <ServiceArea />
    </>
  );
}
