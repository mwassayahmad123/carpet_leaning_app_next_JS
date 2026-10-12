import Link from 'next/link';
import { SITE, whatsappLink } from '../data/site';
import { PhoneIcon, WhatsAppIcon } from './Icons';

const base =
  'inline-flex items-center justify-center gap-2 w-full sm:w-auto px-7 py-3.5 rounded-full font-bold text-base whitespace-nowrap transition-all duration-200 hover:scale-105 active:scale-95';

// Call / WhatsApp / Quote buttons used at the top and bottom of every page.
// `tone="dark"` is for buttons sitting on a photo or gradient background.
const CtaButtons = ({ whatsappText, tone = 'dark', showQuote = false, className = '' }) => {
  const primary =
    'text-white bg-gradient-to-r from-blue-600 to-purple-600 shadow-[0_4px_20px_rgba(99,102,241,0.4)] hover:shadow-[0_6px_30px_rgba(99,102,241,0.6)]';
  const secondary =
    tone === 'dark'
      ? 'text-white bg-white/10 border border-white/40 backdrop-blur-md hover:bg-white/20'
      : 'text-gray-900 bg-white border border-gray-300 hover:border-blue-500 hover:text-blue-700';

  return (
    <div className={`flex flex-col sm:flex-row flex-wrap items-center gap-4 ${className}`}>
      <a href={SITE.phoneHref} className={`${base} ${primary}`}>
        <PhoneIcon />
        Call {SITE.phoneDisplay}
      </a>
      <a href={whatsappLink(whatsappText)} target="_blank" rel="noopener noreferrer" className={`${base} ${secondary}`}>
        <WhatsAppIcon />
        WhatsApp Us
      </a>
      {showQuote && (
        <Link href="/contact/" className={`${base} ${secondary}`}>
          Get a Free Quote
        </Link>
      )}
    </div>
  );
};

export default CtaButtons;
