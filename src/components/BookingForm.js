"use client";

import React, { useState } from 'react';
import { SERVICES } from '../data/services';
import { whatsappLink } from '../data/site';

const emptyForm = (service = '') => ({
  name: '',
  phone: '',
  email: '',
  postcode: '',
  serviceType: service,
  appointmentDateTime: '',
  message: '',
  consent: false,
});

const inputClass =
  'w-full px-4 py-3 rounded-xl border border-gray-300 bg-white focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 outline-none';
const labelClass = 'block text-sm font-semibold text-gray-700 mb-2';

// Booking form — sends the enquiry to the business via WhatsApp.
const BookingForm = ({ defaultService = '', title = 'Book Your Cleaning' }) => {
  const [formData, setFormData] = useState(emptyForm(defaultService));
  const [sent, setSent] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({ ...formData, [name]: type === 'checkbox' ? checked : value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const dateFormatted = formData.appointmentDateTime
      ? new Date(formData.appointmentDateTime).toLocaleString('en-GB', { dateStyle: 'medium', timeStyle: 'short' })
      : 'Not specified';

    const whatsappMessage =
      `*New Booking Request*\n\n` +
      `*Name:* ${formData.name}\n` +
      `*Phone:* ${formData.phone}\n` +
      `*Email:* ${formData.email || 'Not provided'}\n` +
      `*Address / Postcode:* ${formData.postcode}\n` +
      `*Service:* ${formData.serviceType || 'Not specified'}\n` +
      `*Preferred Date/Time:* ${dateFormatted}\n` +
      `*Message:* ${formData.message || 'No message'}\n\n` +
      `_Sent from the Five Star Carpet Cleaning website_`;

    window.open(whatsappLink(whatsappMessage), '_blank');
    setFormData(emptyForm(defaultService));
    setSent(true);
  };

  return (
    <div className="bg-gradient-to-br from-white to-gray-50 rounded-3xl shadow-xl p-6 sm:p-10 border border-gray-100">
      <h2 className="text-2xl font-bold text-gray-900 mb-2">{title}</h2>
      <p className="text-gray-600 mb-6">Fill in the form and it will open WhatsApp with your details ready to send.</p>

      <form onSubmit={handleSubmit} className="space-y-5" suppressHydrationWarning>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div>
            <label htmlFor="name" className={labelClass}>Name *</label>
            <input type="text" id="name" name="name" required autoComplete="name" value={formData.name} onChange={handleChange} className={inputClass} placeholder="Your full name" suppressHydrationWarning />
          </div>
          <div>
            <label htmlFor="phone" className={labelClass}>Phone *</label>
            <input type="tel" id="phone" name="phone" required autoComplete="tel" value={formData.phone} onChange={handleChange} className={inputClass} placeholder="Your phone number" suppressHydrationWarning />
          </div>
          <div>
            <label htmlFor="email" className={labelClass}>Email</label>
            <input type="email" id="email" name="email" autoComplete="email" value={formData.email} onChange={handleChange} className={inputClass} placeholder="you@example.com" suppressHydrationWarning />
          </div>
          <div>
            <label htmlFor="postcode" className={labelClass}>Address / Postcode *</label>
            <input type="text" id="postcode" name="postcode" required autoComplete="postal-code" value={formData.postcode} onChange={handleChange} className={inputClass} placeholder="e.g. E11 4EY" suppressHydrationWarning />
          </div>
          <div>
            <label htmlFor="serviceType" className={labelClass}>Service required</label>
            <select id="serviceType" name="serviceType" value={formData.serviceType} onChange={handleChange} className={inputClass} suppressHydrationWarning>
              <option value="">Select a service</option>
              {SERVICES.map((service) => (
                <option key={service.slug} value={service.name}>{service.name}</option>
              ))}
            </select>
          </div>
          <div>
            <label htmlFor="appointmentDateTime" className={labelClass}>Preferred date & time</label>
            <input type="datetime-local" id="appointmentDateTime" name="appointmentDateTime" value={formData.appointmentDateTime} onChange={handleChange} className={inputClass} suppressHydrationWarning />
          </div>
        </div>

        <div>
          <label htmlFor="message" className={labelClass}>Message</label>
          <textarea id="message" name="message" rows="4" value={formData.message} onChange={handleChange} className={`${inputClass} resize-none`} placeholder="Number of rooms, stains, sofa size, anything we should know..." suppressHydrationWarning />
        </div>

        <label className="flex items-start gap-3 text-sm text-gray-600">
          <input type="checkbox" name="consent" required checked={formData.consent} onChange={handleChange} className="mt-1 h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500" suppressHydrationWarning />
          <span>I agree to Five Star Carpet Cleaning using these details to contact me about my enquiry. *</span>
        </label>

        <button
          type="submit"
          className="w-full px-8 py-4 rounded-xl font-semibold text-lg text-white bg-gradient-to-r from-blue-600 to-purple-600 shadow-[0_4px_20px_rgba(99,102,241,0.4)] hover:shadow-[0_6px_30px_rgba(99,102,241,0.65)] hover:scale-[1.02] active:scale-95 transition-all duration-200"
        >
          Send Booking Request via WhatsApp
        </button>

        {sent && (
          <p role="status" className="text-green-700 bg-green-50 border border-green-200 rounded-xl px-4 py-3 text-sm">
            WhatsApp has opened with your details — press send there to complete your request.
          </p>
        )}
      </form>
    </div>
  );
};

export default BookingForm;
