import BlogCards from '../../components/BlogCards';
import { POSTS } from '../../data/blog';

const TITLE = 'Carpet Cleaning Tips & Guides | Five Star Carpet Cleaning Blog';
const DESCRIPTION =
  'Practical carpet, rug and upholstery cleaning advice from Five Star Carpet Cleaning in London — stain removal guides, care tips and more.';

export const metadata = {
  title: { absolute: TITLE },
  description: DESCRIPTION,
  alternates: { canonical: '/blog/' },
  openGraph: { url: '/blog/', title: TITLE, description: DESCRIPTION },
};

export default function BlogIndexPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-navy-950 pt-28 pb-24 sm:pb-28">
        <div
          className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(217,174,67,0.18),transparent_60%)]"
          aria-hidden="true"
        />
        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
          <div className="text-center max-w-3xl mx-auto">
            <p className="inline-flex items-center gap-3 text-xs sm:text-sm font-semibold tracking-[0.2em] uppercase text-gold-300 mb-4">
              <span className="h-px w-8 bg-gold-300" aria-hidden="true" />
              Blog
              <span className="h-px w-8 bg-gold-300" aria-hidden="true" />
            </p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-5">Carpet Cleaning Tips & Guides</h1>
            <p className="text-lg text-navy-100">
              Practical advice on stains, carpet care and upholstery from the Five Star Carpet Cleaning team in London.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-cream pb-20 sm:pb-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl -mt-12 sm:-mt-16 relative">
          <BlogCards posts={POSTS} priorityFirst layout="featured" />
        </div>
      </section>
    </>
  );
}
