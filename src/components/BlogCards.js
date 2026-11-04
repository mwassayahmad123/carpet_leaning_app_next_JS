import Image from 'next/image';
import Link from 'next/link';
import { ArrowIcon } from './Icons';
import { postHref, formatDate } from '../data/blog';

// Grid of article cards, used on /blog/ and the homepage.
const BlogCards = ({ posts, headingLevel: Heading = 'h2', priorityFirst = false }) => (
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
    {posts.map((post, index) => (
      <article key={post.slug} className="group bg-white rounded-2xl overflow-hidden border border-navy-100 shadow-sm hover:shadow-xl hover:border-gold-300 transition-all duration-300 flex flex-col">
        <Link href={postHref(post.slug)} className="block overflow-hidden" tabIndex={-1} aria-hidden="true">
          <Image
            src={post.image.src}
            alt=""
            priority={priorityFirst && index === 0}
            sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
            className="w-full h-auto aspect-[16/9] object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </Link>
        <div className="p-6 flex flex-col flex-1">
          <time dateTime={post.datePublished} className="text-xs font-semibold tracking-[0.15em] uppercase text-gold-700 mb-3">
            {formatDate(post.datePublished)}
          </time>
          <Heading className="font-display text-xl font-bold text-navy-900 leading-snug mb-3">
            <Link href={postHref(post.slug)} className="hover:text-gold-700 transition-colors">{post.title}</Link>
          </Heading>
          <p className="text-gray-600 leading-relaxed flex-1">{post.excerpt}</p>
          <Link href={postHref(post.slug)} className="mt-5 pt-4 border-t border-navy-100 text-navy-900 font-semibold hover:text-gold-700 transition-colors flex items-center">
            Read guide
            <ArrowIcon className="w-5 h-5 ml-2" />
          </Link>
        </div>
      </article>
    ))}
  </div>
);

export default BlogCards;
