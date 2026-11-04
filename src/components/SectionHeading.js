// Section heading: small gold eyebrow, serif title and optional intro.
// `tone="dark"` is for headings on a navy background.
const SectionHeading = ({ eyebrow, title, intro, align = 'center', tone = 'light' }) => {
  const dark = tone === 'dark';
  return (
    <div className={`mb-12 ${align === 'center' ? 'text-center mx-auto' : ''} max-w-3xl`}>
      {eyebrow && (
        <p
          className={`inline-flex items-center gap-3 text-xs sm:text-sm font-semibold tracking-[0.2em] uppercase mb-4 ${
            dark ? 'text-gold-300' : 'text-gold-700'
          }`}
        >
          <span className={`h-px w-8 ${dark ? 'bg-gold-300' : 'bg-gold-500'}`} aria-hidden="true" />
          {eyebrow}
          {align === 'center' && <span className={`h-px w-8 ${dark ? 'bg-gold-300' : 'bg-gold-500'}`} aria-hidden="true" />}
        </p>
      )}
      <h2 className={`text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight mb-5 ${dark ? 'text-white' : 'text-navy-900'}`}>
        {title}
      </h2>
      {intro && (
        <p className={`text-lg leading-relaxed ${dark ? 'text-navy-100' : 'text-gray-600'}`}>{intro}</p>
      )}
    </div>
  );
};

export default SectionHeading;
