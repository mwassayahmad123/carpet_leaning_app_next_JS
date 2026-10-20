import { CheckIcon } from './Icons';
import LinkedText from './LinkedText';

// Grid of short title + text cards (benefits, differentiators, trust points).
// `text` may be a string, JSX, or an array of paragraphs; `link` ({ text, href }) is applied where it appears.
const FeatureGrid = ({ items, columns = 'lg:grid-cols-3', headingLevel: Heading = 'h3' }) => (
  <div className={`grid grid-cols-1 sm:grid-cols-2 ${columns} gap-6`}>
    {items.map((item) => (
      <div
        key={item.title}
        className="bg-white p-7 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300"
      >
        <div className="text-blue-600 mb-4">
          <CheckIcon className="w-8 h-8" />
        </div>
        <Heading className="text-xl font-semibold text-gray-900 mb-2">{item.title}</Heading>
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
