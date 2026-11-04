import CtaButtons from './CtaButtons';
import LinkedText from './LinkedText';
import { StarIcon } from './Icons';

// Closing "next action" banner that ends every page. `text` may be a string or an array of paragraphs;
// an optional `link` ({ text, href }) is applied where it appears.
const CallToAction = ({ title, text, whatsappText, link }) => (
  <section className="py-20 bg-white">
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <div className="relative overflow-hidden bg-navy-950 rounded-3xl px-6 py-12 sm:p-14 text-white text-center">
        <div
          className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(217,174,67,0.18),transparent_60%)]"
          aria-hidden="true"
        />
        <div className="relative">
          <div className="flex justify-center gap-1 text-gold-400 mb-5" aria-hidden="true">
            {[0, 1, 2, 3, 4].map((i) => (
              <StarIcon key={i} className="w-5 h-5" />
            ))}
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-5">{title}</h2>
          {text && (
            <div className="max-w-3xl mx-auto mb-10 space-y-4">
              {[].concat(text).map((paragraph) => (
                <p key={paragraph.slice(0, 40)} className="text-lg text-navy-100 leading-relaxed">
                  <LinkedText text={paragraph} link={link} tone="dark" />
                </p>
              ))}
            </div>
          )}
          <CtaButtons whatsappText={whatsappText} showQuote className="justify-center" />
        </div>
      </div>
    </div>
  </section>
);

export default CallToAction;
