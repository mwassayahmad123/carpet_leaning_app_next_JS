import { SITE } from '../data/site';
import { ClockIcon, MailIcon, PhoneIcon, PinIcon, WhatsAppIcon } from './Icons';

const Row = ({ icon, label, children }) => (
  <div className="flex items-start gap-4">
    <div className="bg-white/20 rounded-lg p-3 flex-shrink-0">{icon}</div>
    <div className="min-w-0">
      <p className="font-semibold mb-1">{label}</p>
      {children}
    </div>
  </div>
);

const ContactDetails = ({ title = 'Get in Touch' }) => (
  <div className="bg-gradient-to-br from-blue-600 to-purple-600 rounded-3xl shadow-xl p-6 sm:p-8 text-white">
    <h2 className="text-2xl font-bold mb-6">{title}</h2>
    <div className="space-y-5">
      <Row icon={<PhoneIcon className="w-6 h-6" />} label="Phone">
        <a href={SITE.phoneHref} className="opacity-90 hover:opacity-100">{SITE.phoneDisplay}</a>
      </Row>
      <Row icon={<WhatsAppIcon className="w-6 h-6" />} label="WhatsApp">
        <a href={SITE.whatsappHref} target="_blank" rel="noopener noreferrer" className="opacity-90 hover:opacity-100">
          Chat with us on WhatsApp
        </a>
      </Row>
      <Row icon={<MailIcon className="w-6 h-6" />} label="Email">
        <a href={`mailto:${SITE.email}`} className="opacity-90 hover:opacity-100 break-all">{SITE.email}</a>
      </Row>
      <Row icon={<PinIcon className="w-6 h-6" />} label="Based in">
        <p className="opacity-90">{SITE.baseArea}, covering London & Greater London</p>
      </Row>
      <Row icon={<ClockIcon className="w-6 h-6" />} label="Opening hours">
        <p className="opacity-90">{SITE.openingHours}</p>
      </Row>
    </div>
  </div>
);

export default ContactDetails;
