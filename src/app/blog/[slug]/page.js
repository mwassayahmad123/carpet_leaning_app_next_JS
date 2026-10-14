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

      <article className="pt-28 pb-8 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
          <nav aria-label="Breadcrumb" className="mb-6 text-sm text-gray-500">
            <ol className="flex flex-wrap items-center gap-2">
              <li><Link href="/" className="hover:text-blue-600">Home</Link></li>
              <li aria-hidden="true">/</li>
              <li><Link href="/blog/" className="hover:text-blue-600">Blog</Link></li>
              <li aria-hidden="true">/</li>
              <li className="text-gray-700 font-medium" aria-current="page">{post.title}</li>
            </ol>
          </nav>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-4">{post.title}</h1>
          <p className="text-gray-500 mb-8">
            By {SITE.name} · <time dateTime={post.datePublished}>{formatDate(post.datePublished)}</time>
          </p>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl mb-10">
          <Image
            src={post.image.src}
            alt={post.image.alt}
            priority
            sizes="(min-width: 1024px) 896px, 100vw"
            className="w-full h-auto rounded-2xl shadow-lg"
          />
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
          <Prose>
            <Body />
          </Prose>

          <section className="mt-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
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
        title="Need Help With a Stubborn Carpet Stain?"
        text="Call or WhatsApp us with a photo of the stain for a free, no-obligation quote."
        whatsappText="Hi, I'd like help with a carpet stain."
      />
    </>
  );
}
