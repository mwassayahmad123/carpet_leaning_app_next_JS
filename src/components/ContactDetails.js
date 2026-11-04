import { SITE } from '../data/site';
import { ClockIcon, MailIcon, PhoneIcon, PinIcon, WhatsAppIcon } from './Icons';

const Row = ({ icon, label, children }) => (
  <div className="flex items-start gap-4">
    <div className="bg-gold-400 text-navy-950 rounded-xl p-3 flex-shrink-0">{icon}</div>
    <div className="min-w-0">
      <p className="text-xs font-semibold tracking-[0.15em] uppercase text-gold-300 mb-1">{label}</p>
      {children}
    </div>
  </div>
);

const ContactDetails = ({ title = 'Get in Touch' }) => (
  <div className="relative overflow-hidden bg-navy-950 rounded-3xl shadow-xl p-6 sm:p-8 text-white">
    <h2 className="text-2xl sm:text-3xl font-bold mb-6">{title}</h2>
    <div className="space-y-5">
      <Row icon={<PhoneIcon className="w-6 h-6" />} label="Phone">
        <a href={SITE.phoneHref} className="text-navy-100 hover:text-gold-300 transition-colors">{SITE.phoneDisplay}</a>
      </Row>
      <Row icon={<WhatsAppIcon className="w-6 h-6" />} label="WhatsApp">
        <a href={SITE.whatsappHref} target="_blank" rel="noopener noreferrer" className="text-navy-100 hover:text-gold-300 transition-colors">
          Chat with us on WhatsApp
        </a>
      </Row>
      <Row icon={<MailIcon className="w-6 h-6" />} label="Email">
        <a href={`mailto:${SITE.email}`} className="text-navy-100 hover:text-gold-300 transition-colors break-all">{SITE.email}</a>
      </Row>
      <Row icon={<PinIcon className="w-6 h-6" />} label="Based in">
        <p className="text-navy-100">{SITE.baseArea}, covering London & Greater London</p>
      </Row>
      <Row icon={<ClockIcon className="w-6 h-6" />} label="Opening hours">
        <p className="text-navy-100">{SITE.openingHours}</p>
      </Row>
    </div>
  </div>
);

export default ContactDetails;
