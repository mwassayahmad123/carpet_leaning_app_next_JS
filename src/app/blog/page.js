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
    <section className="pt-28 pb-20 bg-gray-50 min-h-screen">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <p className="text-sm font-bold tracking-widest uppercase text-blue-600 mb-3">Blog</p>
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">Carpet Cleaning Tips & Guides</h1>
          <p className="text-lg sm:text-xl text-gray-600">
            Practical advice on stains, carpet care and upholstery from the Five Star Carpet Cleaning team in London.
          </p>
        </div>
        <BlogCards posts={POSTS} priorityFirst />
      </div>
    </section>
  );
}
