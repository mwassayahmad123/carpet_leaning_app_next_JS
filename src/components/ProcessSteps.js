import LinkedText from './LinkedText';

// Numbered step-by-step customer journey, drawn as a timeline. A step may carry an optional `link` ({ text, href }).
// - Default: horizontal timeline on large screens (short step text), vertical on small screens.
// - Passing `columns` (pages with longer step text) switches to a vertical timeline at all sizes.
// - `surface` is the section background ('white' | 'cream') so the number badges get a matching halo.
const ProcessSteps = ({ steps, columns, surface }) => {
  const vertical = Boolean(columns);
  const halo = (surface || (vertical ? 'cream' : 'white')) === 'cream' ? 'ring-cream' : 'ring-white';

  if (vertical) {
    return (
      <ol className="relative max-w-4xl mx-auto">
        <span className="absolute left-6 top-2 bottom-2 w-px bg-gradient-to-b from-gold-400 via-gold-300 to-transparent" aria-hidden="true" />
        {steps.map((step, index) => (
          <li key={step.title} className="relative pl-20 pb-10 last:pb-0">
            <span className={`absolute left-0 top-0 flex items-center justify-center w-12 h-12 rounded-full bg-navy-900 text-gold-300 font-display font-bold text-xl ring-8 ${halo}`}>
              {index + 1}
            </span>
            <div className="bg-white rounded-2xl p-6 border border-navy-100 shadow-sm">
              <h3 className="text-lg font-semibold text-navy-900 mb-2">{step.title}</h3>
              <p className="text-gray-600 leading-relaxed">
                <LinkedText text={step.text} link={step.link} />
              </p>
            </div>
          </li>
        ))}
      </ol>
    );
  }

  return (
    <ol className="relative grid grid-cols-1 lg:grid-cols-5 gap-0 lg:gap-6">
      {/* connecting line: vertical on mobile, horizontal on large screens */}
      <span className="lg:hidden absolute left-6 top-2 bottom-2 w-px bg-gradient-to-b from-gold-400 to-gold-200" aria-hidden="true" />
      <span className="hidden lg:block absolute top-6 left-[10%] right-[10%] h-px bg-gradient-to-r from-gold-200 via-gold-400 to-gold-200" aria-hidden="true" />
      {steps.map((step, index) => (
        <li key={step.title} className="relative pl-20 pb-8 last:pb-0 lg:pl-0 lg:pb-0 lg:text-center">
          <span className={`absolute left-0 top-0 lg:static lg:mx-auto lg:mb-6 flex items-center justify-center w-12 h-12 rounded-full bg-navy-900 text-gold-300 font-display font-bold text-xl ring-8 ${halo}`}>
            {index + 1}
          </span>
          <h3 className="text-lg font-semibold text-navy-900 mb-2">{step.title}</h3>
          <p className="text-gray-600 leading-relaxed text-sm">
            <LinkedText text={step.text} link={step.link} />
          </p>
        </li>
      ))}
    </ol>
  );
};

export default ProcessSteps;
