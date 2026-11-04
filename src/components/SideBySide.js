import SectionHeading from './SectionHeading';

// Two-column section body: heading column on the left (sticky on large screens), content on the right.
// Keeps the DOM order heading → content, so the reading order is unchanged.
const SideBySide = ({ eyebrow, title, intro, tone = 'light', children, contentClassName = '' }) => (
  <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
    <div className="lg:col-span-5 lg:sticky lg:top-28 self-start">
      <SectionHeading eyebrow={eyebrow} title={title} intro={intro} align="left" tone={tone} />
      <span className="hidden lg:block -mt-4 h-1 w-20 rounded-full bg-gold-400" aria-hidden="true" />
    </div>
    <div className={`lg:col-span-7 ${contentClassName}`}>{children}</div>
  </div>
);

export default SideBySide;
