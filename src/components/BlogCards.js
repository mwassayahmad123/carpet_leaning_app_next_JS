import Image from 'next/image';
import Link from 'next/link';
import { ArrowIcon } from './Icons';
import { postHref, formatDate } from '../data/blog';

// One article card. `featured` makes a large card with the image beside the text on large screens.
const Card = ({ post, Heading, priority, featured }) => (
  <article
    className={`group bg-white rounded-2xl overflow-hidden border border-navy-100 shadow-sm hover:shadow-xl hover:border-gold-300 transition-all duration-300 flex flex-col ${
      featured ? 'lg:flex-row h-full' : ''
    }`}
  >
    <Link
      href={postHref(post.slug)}
      className={`block overflow-hidden ${featured ? 'lg:w-1/2 lg:flex-shrink-0' : ''}`}
      tabIndex={-1}
      aria-hidden="true"
    >
      <Image
        src={post.image.src}
        alt=""
        priority={priority}
        sizes={featured ? '(min-width: 1024px) 40vw, 100vw' : '(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw'}
        className={`w-full h-auto aspect-[16/9] object-cover transition-transform duration-500 group-hover:scale-105 ${
          featured ? 'lg:h-full lg:aspect-auto' : ''
        }`}
      />
    </Link>
    <div className={`flex flex-col flex-1 ${featured ? 'p-6 sm:p-8 lg:p-10 lg:justify-center' : 'p-6'}`}>
      <time dateTime={post.datePublished} className="text-xs font-semibold tracking-[0.15em] uppercase text-gold-700 mb-3">
        {formatDate(post.datePublished)}
      </time>
      <Heading className={`font-display font-bold text-navy-900 leading-snug mb-3 ${featured ? 'text-2xl sm:text-3xl' : 'text-xl'}`}>
        <Link href={postHref(post.slug)} className="hover:text-gold-700 transition-colors">{post.title}</Link>
      </Heading>
      <p className={`text-gray-600 leading-relaxed ${featured ? 'text-lg' : 'flex-1'}`}>{post.excerpt}</p>
      <Link
        href={postHref(post.slug)}
        className="mt-5 pt-4 border-t border-navy-100 text-navy-900 font-semibold hover:text-gold-700 transition-colors flex items-center"
      >
        Read guide
        <ArrowIcon className="w-5 h-5 ml-2 text-gold-600 group-hover:translate-x-1 transition-transform" />
      </Link>
    </div>
  </article>
);

// Grid of article cards, used on /blog/ and the homepage.
// `layout="featured"`: the first post is a large card spanning the row, the rest follow in a grid.
const BlogCards = ({ posts, headingLevel: Heading = 'h2', priorityFirst = false, layout = 'grid' }) => {
  if (layout === 'featured' && posts.length > 0) {
    const [first, ...rest] = posts;
    return (
      <div className="space-y-8">
        <Card post={first} Heading={Heading} priority={priorityFirst} featured />
        {rest.length > 0 && (
          <div className={`grid grid-cols-1 md:grid-cols-2 gap-8 ${rest.length > 2 ? 'lg:grid-cols-3' : ''}`}>
            {rest.map((post) => (
              <Card key={post.slug} post={post} Heading={Heading} />
            ))}
          </div>
        )}
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {posts.map((post, index) => (
        <Card key={post.slug} post={post} Heading={Heading} priority={priorityFirst && index === 0} />
      ))}
    </div>
  );
};

export default BlogCards;
