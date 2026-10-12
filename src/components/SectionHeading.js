const SectionHeading = ({ eyebrow, title, intro, align = 'center' }) => (
  <div className={`mb-12 ${align === 'center' ? 'text-center mx-auto' : ''} max-w-3xl`}>
    {eyebrow && (
      <p className="text-sm font-bold tracking-widest uppercase text-blue-600 mb-3">{eyebrow}</p>
    )}
    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">{title}</h2>
    {intro && <p className="text-lg sm:text-xl text-gray-600 leading-relaxed">{intro}</p>}
  </div>
);

export default SectionHeading;
