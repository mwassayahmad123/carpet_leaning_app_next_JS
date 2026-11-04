// Section heading: small gold eyebrow, serif title and optional intro.
// - `tone="dark"` is for headings on a navy background.
// - `align="split"` puts eyebrow + title on the left and the intro on the right (large screens).
const Eyebrow = ({ children, dark, centered }) => (
  <p
    className={`inline-flex items-center gap-3 text-xs sm:text-sm font-semibold tracking-[0.2em] uppercase mb-4 ${
      dark ? 'text-gold-300' : 'text-gold-700'
    }`}
  >
    <span className={`h-px w-8 ${dark ? 'bg-gold-300' : 'bg-gold-500'}`} aria-hidden="true" />
    {children}
    {centered && <span className={`h-px w-8 ${dark ? 'bg-gold-300' : 'bg-gold-500'}`} aria-hidden="true" />}
  </p>
);

const SectionHeading = ({ eyebrow, title, intro, align = 'center', tone = 'light' }) => {
  const dark = tone === 'dark';
  const titleClass = `text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight ${dark ? 'text-white' : 'text-navy-900'}`;
  const introClass = `text-lg leading-relaxed ${dark ? 'text-navy-100' : 'text-gray-600'}`;

  if (align === 'split') {
    return (
      <div className="mb-12 lg:mb-16 grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-16 items-end">
        <div>
          {eyebrow && <Eyebrow dark={dark}>{eyebrow}</Eyebrow>}
          <h2 className={titleClass}>{title}</h2>
        </div>
        {intro && <p className={`${introClass} lg:pb-2 lg:border-l-2 lg:border-gold-300 lg:pl-8`}>{intro}</p>}
      </div>
    );
  }

  return (
    <div className={`mb-12 ${align === 'center' ? 'text-center mx-auto' : ''} max-w-3xl`}>
      {eyebrow && (
        <Eyebrow dark={dark} centered={align === 'center'}>
          {eyebrow}
        </Eyebrow>
      )}
      <h2 className={`${titleClass} mb-5`}>{title}</h2>
      {intro && <p className={introClass}>{intro}</p>}
    </div>
  );
};

export default SectionHeading;
