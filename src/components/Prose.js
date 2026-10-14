// Typography for long-form article content (headings, paragraphs, lists).
const proseClass = [
  'text-lg text-gray-700 leading-relaxed',
  '[&_p]:mb-5',
  '[&_h2]:text-2xl sm:[&_h2]:text-3xl [&_h2]:font-bold [&_h2]:text-gray-900 [&_h2]:mt-12 [&_h2]:mb-4 [&_h2]:scroll-mt-24',
  '[&_h3]:text-xl [&_h3]:font-semibold [&_h3]:text-gray-900 [&_h3]:mt-8 [&_h3]:mb-3',
  '[&_ul]:list-disc [&_ol]:list-decimal [&_ul]:pl-6 [&_ol]:pl-6 [&_ul]:mb-6 [&_ol]:mb-6',
  '[&_li]:mb-2 [&_li]:pl-1 [&_li::marker]:text-blue-600 [&_strong]:text-gray-900',
].join(' ');

const Prose = ({ children }) => <div className={proseClass}>{children}</div>;

export default Prose;
