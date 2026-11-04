import { CheckIcon } from './Icons';
import LinkedText from './LinkedText';

// Grid of short title + text cards (benefits, differentiators, trust points).
// `text` may be a string, JSX, or an array of paragraphs; `link` ({ text, href }) is applied where it appears.
const FeatureGrid = ({ items, columns = 'lg:grid-cols-3', headingLevel: Heading = 'h3' }) => (
  <div className={`grid grid-cols-1 sm:grid-cols-2 ${columns} gap-6`}>
    {items.map((item) => (
      <div
        key={item.title}
        className="group relative bg-white p-7 rounded-2xl border border-navy-100 shadow-sm hover:shadow-xl hover:border-gold-300 transition-all duration-300"
      >
        <span
          className="absolute inset-x-7 top-0 h-0.5 bg-gradient-to-r from-gold-400 to-gold-200 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300"
          aria-hidden="true"
        />
        <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-navy-900 text-gold-300 mb-5">
          <CheckIcon className="w-6 h-6" />
        </div>
        <Heading className="text-xl font-semibold text-navy-900 mb-3">{item.title}</Heading>
        {[].concat(item.text).map((paragraph, i) => (
          <p key={i} className={`text-gray-600 leading-relaxed ${i > 0 ? 'mt-3' : ''}`}>
            <LinkedText text={paragraph} link={item.link} />
          </p>
        ))}
      </div>
    ))}
  </div>
);

export default FeatureGrid;
