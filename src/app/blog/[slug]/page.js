import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import Prose from '../../../components/Prose';
import FaqAccordion from '../../../components/FaqAccordion';
import CallToAction from '../../../components/CallToAction';
import { POSTS, getPost, postHref, formatDate } from '../../../data/blog';
import { SITE } from '../../../data/site';

export const dynamicParams = false;

export function generateStaticParams() {
  return POSTS.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return {};
  const path = postHref(post.slug);
  return {
    title: { absolute: post.seoTitle },
    description: post.metaDescription,
    alternates: { canonical: path },
    openGraph: {
      type: 'article',
      url: path,
      title: post.seoTitle,
      description: post.metaDescription,
      publishedTime: post.datePublished,
      images: [{ url: post.image.src.src, width: post.image.src.width, height: post.image.src.height, alt: post.image.alt }],
    },
    twitter: { card: 'summary_large_image', title: post.seoTitle, description: post.metaDescription, images: [post.image.src.src] },
  };
}

const jsonLdFor = (post) => {
  const url = `${SITE.url}${postHref(post.slug)}`;
  return [
    {
      '@context': 'https://schema.org',
      '@type': 'BlogPosting',
      headline: post.title,
      description: post.metaDescription,
      image: `${SITE.url}${post.image.src.src}`,
      datePublished: post.datePublished,
      dateModified: post.dateModified || post.datePublished,
      mainEntityOfPage: url,
      author: { '@type': 'Organization', name: SITE.name, url: SITE.url },
      publisher: { '@type': 'Organization', name: SITE.name, logo: { '@type': 'ImageObject', url: `${SITE.url}/logo.webp` } },
    },
    {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE.url}/` },
        { '@type': 'ListItem', position: 2, name: 'Blog', item: `${SITE.url}/blog/` },
        { '@type': 'ListItem', position: 3, name: post.title, item: url },
      ],
    },
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: post.faqs.map((faq) => ({
        '@type': 'Question',
        name: faq.question,
        acceptedAnswer: { '@type': 'Answer', text: faq.answer },
      })),
    },
  ];
};

export default async function BlogPostPage({ params }) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();
  const { Body, Conclusion } = post;

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdFor(post)) }} />

      <article className="pb-8 bg-white">
        <header className="relative overflow-hidden bg-navy-950 pt-28 pb-28 sm:pb-36">
          <div
            className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(217,174,67,0.16),transparent_60%)]"
            aria-hidden="true"
          />
          <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
            <nav aria-label="Breadcrumb" className="mb-6 text-sm text-navy-200">
              <ol className="flex flex-wrap items-center gap-2">
                <li><Link href="/" className="hover:text-gold-300 transition-colors">Home</Link></li>
                <li aria-hidden="true" className="text-gold-400">/</li>
                <li><Link href="/blog/" className="hover:text-gold-300 transition-colors">Blog</Link></li>
                <li aria-hidden="true" className="text-gold-400">/</li>
                <li className="text-white font-medium" aria-current="page">{post.title}</li>
              </ol>
            </nav>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight mb-5">{post.title}</h1>
            <p className="text-sm font-semibold tracking-[0.12em] uppercase text-gold-300">
              By {SITE.name} · <time dateTime={post.datePublished}>{formatDate(post.datePublished)}</time>
            </p>
          </div>
        </header>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl -mt-20 sm:-mt-28 mb-12 relative">
          <Image
            src={post.image.src}
            alt={post.image.alt}
            priority
            sizes="(min-width: 1024px) 896px, 100vw"
            className="w-full h-auto rounded-2xl shadow-2xl ring-1 ring-gold-300/50"
          />
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
          <Prose>
            <Body />
          </Prose>

          <section className="mt-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-navy-900 mb-6 pb-3 border-b border-gold-200">
              {post.faqsTitle || 'Frequently Asked Questions'}
            </h2>
            <FaqAccordion faqs={post.faqs} />
          </section>

          <div className="mt-4">
            <Prose>
              <Conclusion />
            </Prose>
          </div>
        </div>
      </article>

      <CallToAction
        title={post.cta?.title || 'Need Help With Your Carpets?'}
        text={post.cta?.text || 'Call or WhatsApp us for a free, no-obligation quote.'}
        whatsappText={post.cta?.whatsappText}
      />
    </>
  );
}
