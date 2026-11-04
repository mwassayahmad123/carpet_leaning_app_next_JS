import Image from 'next/image';
import Link from 'next/link';
import CtaButtons from './CtaButtons';

// Inner-page hero: navy panel with breadcrumb trail, the page's single H1 and CTAs,
// and a framed photo on large screens.
const PageHero = ({ title, intro, image, breadcrumbs = [], whatsappText }) => (
  <section className="relative overflow-hidden bg-navy-950 pt-16">
    <div
      className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(217,174,67,0.16),transparent_55%)]"
      aria-hidden="true"
    />

    <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-7">
          {breadcrumbs.length > 0 && (
            <nav aria-label="Breadcrumb" className="mb-6 text-sm text-navy-200">
              <ol className="flex flex-wrap items-center gap-2">
                <li>
                  <Link href="/" className="hover:text-gold-300 transition-colors">Home</Link>
                </li>
                {breadcrumbs.map((crumb) => (
                  <li key={crumb.label} className="flex items-center gap-2">
                    <span aria-hidden="true" className="text-gold-400">/</span>
                    {crumb.href ? (
                      <Link href={crumb.href} className="hover:text-gold-300 transition-colors">{crumb.label}</Link>
                    ) : (
                      <span className="text-white font-semibold" aria-current="page">{crumb.label}</span>
                    )}
                  </li>
                ))}
              </ol>
            </nav>
          )}

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-[1.1]">{title}</h1>
          <span className="block h-1 w-20 rounded-full bg-gold-400 mb-6" aria-hidden="true" />
          {intro && <p className="text-lg text-navy-100 mb-10 leading-relaxed max-w-2xl">{intro}</p>}
          <CtaButtons whatsappText={whatsappText} />
        </div>

        {/* Decorative photo — only shown (and only loaded) on large screens. */}
        <div className="hidden lg:block lg:col-span-5">
          <div className="relative">
            <div className="absolute -inset-3 rounded-[2rem] border border-gold-400/40" aria-hidden="true" />
            <div className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl">
              <Image src={image.src} alt={image.alt} fill loading="lazy" sizes="40vw" className="object-cover" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default PageHero;
