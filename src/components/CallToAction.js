import CtaButtons from './CtaButtons';

// Closing "next action" banner that ends every page.
const CallToAction = ({ title, text, whatsappText }) => (
  <section className="py-20 bg-white">
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-8 sm:p-14 text-white text-center">
        <h2 className="text-3xl sm:text-4xl font-bold mb-4">{title}</h2>
        {text && <p className="text-lg sm:text-xl opacity-90 max-w-2xl mx-auto mb-10">{text}</p>}
        <CtaButtons whatsappText={whatsappText} showQuote className="justify-center" />
      </div>
    </div>
  </section>
);

export default CallToAction;
