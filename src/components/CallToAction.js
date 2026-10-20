import CtaButtons from './CtaButtons';
import LinkedText from './LinkedText';

// Closing "next action" banner that ends every page. `text` may be a string or an array of paragraphs;
// an optional `link` ({ text, href }) is applied where it appears.
const CallToAction = ({ title, text, whatsappText, link }) => (
  <section className="py-20 bg-white">
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-8 sm:p-14 text-white text-center">
        <h2 className="text-3xl sm:text-4xl font-bold mb-4">{title}</h2>
        {text && (
          <div className="max-w-3xl mx-auto mb-10 space-y-4">
            {[].concat(text).map((paragraph) => (
              <p key={paragraph.slice(0, 40)} className="text-lg sm:text-xl opacity-90">
                <LinkedText text={paragraph} link={link} tone="dark" />
              </p>
            ))}
          </div>
        )}
        <CtaButtons whatsappText={whatsappText} showQuote className="justify-center" />
      </div>
    </div>
  </section>
);

export default CallToAction;
