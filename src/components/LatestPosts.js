import Link from 'next/link';
import BlogCards from './BlogCards';
import SectionHeading from './SectionHeading';
import { ArrowIcon } from './Icons';
import { POSTS } from '../data/blog';

// Homepage section showing the newest blog articles.
const LatestPosts = ({ count = 3 }) => {
  if (POSTS.length === 0) return null;

  return (
    <section id="blog" className="py-20 sm:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="From our blog"
          title="Carpet Cleaning Tips & Guides"
          intro="Practical advice from our team on stains, carpet care and keeping your home fresh between cleans."
        />
        <BlogCards posts={POSTS.slice(0, count)} headingLevel="h3" />
        <div className="text-center mt-10">
          <Link
            href="/blog/"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-semibold text-white bg-navy-900 hover:bg-navy-700 transition-colors"
          >
            View all articles
            <ArrowIcon />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default LatestPosts;
