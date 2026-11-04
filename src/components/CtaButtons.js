import Link from 'next/link';
import { SITE, whatsappLink } from '../data/site';
import { PhoneIcon, WhatsAppIcon } from './Icons';

const base =
  'inline-flex items-center justify-center gap-2 w-full sm:w-auto px-7 py-3.5 rounded-full font-semibold text-base whitespace-nowrap transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-gold-400 focus-visible:ring-offset-2';

// Call / WhatsApp / Quote buttons used at the top and bottom of every page.
// `tone="dark"` is for buttons sitting on a navy or photo background.
const CtaButtons = ({ whatsappText, tone = 'dark', showQuote = false, className = '' }) => {
  const primary = 'bg-gold-400 text-navy-950 hover:bg-gold-300 shadow-lg shadow-gold-500/20';
  const secondary =
    tone === 'dark'
      ? 'text-white border border-white/30 hover:bg-white/10 hover:border-white/50'
      : 'text-navy-900 bg-white border border-navy-200 hover:border-navy-900';

  return (
    <div className={`flex flex-col sm:flex-row flex-wrap items-center gap-3 sm:gap-4 ${className}`}>
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
