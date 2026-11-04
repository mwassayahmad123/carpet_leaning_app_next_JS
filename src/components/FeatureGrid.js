import { CheckIcon } from './Icons';
import LinkedText from './LinkedText';

// Feature items (benefits, differentiators, trust points).
// `text` may be a string, JSX, or an array of paragraphs; `link` ({ text, href }) is applied where it appears.
// - variant="cards" (default): bordered cards in a grid.
// - variant="list": numbered rows (numbers drawn with a CSS counter, so no extra text in the page).
// - tone="dark": for use on a navy background.
const Paragraphs = ({ item, className }) =>
  [].concat(item.text).map((paragraph, i) => (
    <p key={i} className={`${className} ${i > 0 ? 'mt-3' : ''}`}>
      <LinkedText text={paragraph} link={item.link} tone={className.includes('navy-100') ? 'dark' : 'light'} />
    </p>
  ));

const FeatureGrid = ({ items, columns = 'lg:grid-cols-3', headingLevel: Heading = 'h3', variant = 'cards', tone = 'light' }) => {
  const dark = tone === 'dark';

  if (variant === 'list') {
    return (
      <ol className={`grid grid-cols-1 ${columns} gap-x-10 [counter-reset:feature]`}>
        {items.map((item) => (
          <li
            key={item.title}
            className={`relative py-7 pl-16 border-t ${dark ? 'border-white/10' : 'border-navy-100'} [counter-increment:feature] before:content-[counter(feature,decimal-leading-zero)] before:absolute before:left-0 before:top-7 before:font-display before:text-3xl before:font-bold before:leading-none ${
              dark ? 'before:text-gold-400' : 'before:text-gold-500'
            }`}
          >
            <Heading className={`text-xl font-semibold mb-2 ${dark ? 'text-white' : 'text-navy-900'}`}>{item.title}</Heading>
            <Paragraphs item={item} className={`leading-relaxed ${dark ? 'text-navy-100' : 'text-gray-600'}`} />
          </li>
        ))}
      </ol>
    );
  }

  return (
    <div className={`grid grid-cols-1 sm:grid-cols-2 ${columns} gap-6`}>
      {items.map((item) => (
        <div
          key={item.title}
          className={`group relative p-7 rounded-2xl border transition-all duration-300 ${
            dark
              ? 'bg-white/5 border-white/10 hover:border-gold-400/60 hover:bg-white/10'
              : 'bg-white border-navy-100 shadow-sm hover:shadow-xl hover:border-gold-300'
          }`}
        >
          <span
            className="absolute inset-x-7 top-0 h-0.5 bg-gradient-to-r from-gold-400 to-gold-200 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300"
            aria-hidden="true"
          />
          <div
            className={`inline-flex items-center justify-center w-12 h-12 rounded-xl mb-5 ${
              dark ? 'bg-gold-400 text-navy-950' : 'bg-navy-900 text-gold-300'
            }`}
          >
            <CheckIcon className="w-6 h-6" />
          </div>
          <Heading className={`text-xl font-semibold mb-3 ${dark ? 'text-white' : 'text-navy-900'}`}>{item.title}</Heading>
          <Paragraphs item={item} className={`leading-relaxed ${dark ? 'text-navy-100' : 'text-gray-600'}`} />
        </div>
      ))}
    </div>
  );
};

export default FeatureGrid;
