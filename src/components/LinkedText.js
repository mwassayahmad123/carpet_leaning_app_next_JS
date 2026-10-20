import Link from 'next/link';

// Visible styling for in-content (internal) anchor text.
export const inlineLinkClass = {
  light: 'text-blue-600 font-semibold hover:text-purple-600',
  dark: 'text-blue-200 font-semibold hover:text-white',
};

// Renders `text`, turning the first occurrence of `link.text` into an internal link.
const LinkedText = ({ text, link, tone = 'light' }) => {
  if (typeof text !== 'string') return text;
  const index = link ? text.indexOf(link.text) : -1;
  if (index === -1) return text;

  return (
    <>
      {text.slice(0, index)}
      <Link href={link.href} className={inlineLinkClass[tone]}>
        {link.text}
      </Link>
      {text.slice(index + link.text.length)}
    </>
  );
};

export default LinkedText;
