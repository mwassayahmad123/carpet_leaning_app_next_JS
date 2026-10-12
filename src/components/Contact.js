import React from 'react';
import BookingForm from './BookingForm';
import ContactDetails from './ContactDetails';
import SectionHeading from './SectionHeading';

// Homepage closing section: booking form + phone/WhatsApp/email.
const Contact = () => (
  <section id="contact" className="py-20 bg-white">
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <SectionHeading
        eyebrow="Book now"
        title="Book Your Carpet Clean"
        intro="Call, WhatsApp or send the form below for a free, no-obligation quote."
      />
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 max-w-7xl mx-auto">
        <div className="lg:col-span-3">
          <BookingForm title="Request a Free Quote" />
        </div>
        <div className="lg:col-span-2">
          <ContactDetails />
        </div>
      </div>
    </div>
  </section>
);

export default Contact;
