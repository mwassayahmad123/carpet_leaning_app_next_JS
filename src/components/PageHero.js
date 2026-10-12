import Image from 'next/image';
import Link from 'next/link';
import CtaButtons from './CtaButtons';

// Inner-page hero: photo background, breadcrumb trail, the page's single H1 and CTAs.
const PageHero = ({ title, intro, image, breadcrumbs = [], whatsappText }) => (
  <section className="relative overflow-hidden pt-16">
    <div className="absolute inset-0 z-0">
      <Image src={image.src} alt={image.alt} fill priority className="object-cover object-center" />
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/85 via-purple-900/80 to-blue-800/85" />
    </div>

    <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-28">
      {breadcrumbs.length > 0 && (
        <nav aria-label="Breadcrumb" className="mb-6 text-sm text-blue-100">
          <ol className="flex flex-wrap items-center gap-2">
            <li>
              <Link href="/" className="hover:text-white">Home</Link>
            </li>
            {breadcrumbs.map((crumb) => (
              <li key={crumb.label} className="flex items-center gap-2">
                <span aria-hidden="true">/</span>
                {crumb.href ? (
                  <Link href={crumb.href} className="hover:text-white">{crumb.label}</Link>
                ) : (
                  <span className="text-white font-semibold" aria-current="page">{crumb.label}</span>
                )}
              </li>
            ))}
          </ol>
        </nav>
      )}

      <div className="max-w-3xl">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">{title}</h1>
        {intro && <p className="text-lg sm:text-xl text-gray-200 mb-10 leading-relaxed">{intro}</p>}
        <CtaButtons whatsappText={whatsappText} />
      </div>
    </div>
  </section>
);

export default PageHero;
