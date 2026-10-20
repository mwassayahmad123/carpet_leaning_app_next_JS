import Link from 'next/link';
import { notFound } from 'next/navigation';
import PageHero from '../../../components/PageHero';
import SectionHeading from '../../../components/SectionHeading';
import FeatureGrid from '../../../components/FeatureGrid';
import ProcessSteps from '../../../components/ProcessSteps';
import PhotoGrid from '../../../components/PhotoGrid';
import FaqAccordion from '../../../components/FaqAccordion';
import CallToAction from '../../../components/CallToAction';
import { ArrowIcon } from '../../../components/Icons';
import LinkedText from '../../../components/LinkedText';
import { SERVICES, getService, serviceHref } from '../../../data/services';
import { SITE } from '../../../data/site';

export const dynamicParams = false;

export function generateStaticParams() {
  return SERVICES.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) return {};
  const path = serviceHref(service.slug);
  return {
    title: { absolute: service.metaTitle },
    description: service.metaDescription,
    alternates: { canonical: path },
    openGraph: {
      url: path,
      title: service.metaTitle,
      description: service.metaDescription,
      images: [{ url: service.heroImage.src.src, alt: service.heroImage.alt }],
    },
  };
}

const jsonLdFor = (service) => {
  const url = `${SITE.url}${serviceHref(service.slug)}`;
  return [
    {
      '@context': 'https://schema.org',
      '@type': 'Service',
      name: service.h1,
      serviceType: service.name,
      description: service.metaDescription,
      url,
      areaServed: { '@type': 'City', name: 'London' },
      provider: { '@type': 'LocalBusiness', '@id': SITE.url, name: SITE.name, telephone: '+447871062227' },
    },
    {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE.url}/` },
        { '@type': 'ListItem', position: 2, name: service.name, item: url },
      ],
    },
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: service.faqs.map((faq) => ({
        '@type': 'Question',
        name: faq.question,
        acceptedAnswer: { '@type': 'Answer', text: faq.answer },
      })),
    },
  ];
};

export default async function ServicePage({ params }) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) notFound();

  const lowerName = service.name.toLowerCase();
  const whatsappText = `Hi, I'd like a quote for ${lowerName}.`;
  const otherServices = SERVICES.filter((s) => s.slug !== service.slug);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdFor(service)) }} />

      <PageHero
        title={service.h1}
        intro={<LinkedText text={service.heroIntro} link={service.heroIntroLink} tone="dark" />}
        image={service.heroImage}
        breadcrumbs={[{ label: 'Services', href: '/#services' }, { label: service.name }]}
        whatsappText={whatsappText}
      />

      {/* Benefits */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Benefits"
            title={service.benefitsTitle || `Why Choose Professional ${service.name}?`}
            intro={<LinkedText text={service.benefitsIntro} link={service.benefitsIntroLink} />}
          />
          <FeatureGrid items={service.benefits} columns={service.benefits.length > 4 ? 'lg:grid-cols-3' : 'lg:grid-cols-4'} />
        </div>
      </section>

      {/* Residential & Commercial — `residentialText` is a string or an array of paragraphs. */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading eyebrow="Who it's for" title={service.residentialTitle} />
          <div className="max-w-3xl mx-auto -mt-6 space-y-4 text-center text-lg sm:text-xl text-gray-600 leading-relaxed">
            {[].concat(service.residentialText).map((paragraph) => (
              <p key={paragraph.slice(0, 40)}>
                <LinkedText text={paragraph} link={service.residentialLink} />
              </p>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Why us"
            title={service.whyUsTitle || `Why Choose Five Star for ${service.name}`}
            intro={service.whyUsIntro && <LinkedText text={service.whyUsIntro} link={service.whyUsIntroLink} />}
          />
          <FeatureGrid items={service.whyUs} columns="lg:grid-cols-4" />
        </div>
      </section>

      {/* Process */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="What to expect"
            title={service.processTitle || 'Our Process, Step by Step'}
            intro={service.processIntro}
          />
          <ProcessSteps steps={service.process} columns={service.processColumns} />
        </div>
      </section>

      {/* Before & After / Our Work */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading eyebrow="Our work" title="Photos From Recent Jobs" intro="Real photos taken by our team on jobs in London." />
          <PhotoGrid photos={service.images} />
        </div>
      </section>

      {/* FAQs */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <SectionHeading eyebrow="FAQs" title={service.faqsTitle || `${service.name} FAQs`} />
          <FaqAccordion faqs={service.faqs} />
        </div>
      </section>

      {/* Other services — internal links */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-8 text-center">Other Cleaning Services</h2>
          <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {otherServices.map((s) => (
              <li key={s.slug}>
                <Link
                  href={serviceHref(s.slug)}
                  className="flex items-center justify-between gap-2 h-full bg-gray-50 hover:bg-blue-50 border border-gray-100 rounded-xl px-5 py-4 font-semibold text-gray-800 hover:text-blue-700 transition-colors"
                >
                  <span>
                    <span aria-hidden="true" className="mr-2">{s.icon}</span>
                    {s.name}
                  </span>
                  <ArrowIcon className="w-4 h-4 flex-shrink-0" />
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <CallToAction
        title={service.closing?.title || `Get a Quote for ${service.name}`}
        text={
          service.closing?.text ||
          `Call or WhatsApp us with a few details and photos for a free, no-obligation ${lowerName} quote.`
        }
        link={service.closing?.link}
        whatsappText={whatsappText}
      />
    </>
  );
}
