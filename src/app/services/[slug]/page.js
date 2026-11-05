import Link from 'next/link';
import { notFound } from 'next/navigation';
import PageHero from '../../../components/PageHero';
import SectionHeading from '../../../components/SectionHeading';
import FeatureGrid from '../../../components/FeatureGrid';
import ProcessSteps from '../../../components/ProcessSteps';
import PhotoGrid from '../../../components/PhotoGrid';
import FaqAccordion from '../../../components/FaqAccordion';
import CallToAction from '../../../components/CallToAction';
import { ArrowIcon, ServiceIcon } from '../../../components/Icons';
import LinkedText from '../../../components/LinkedText';
import SideBySide from '../../../components/SideBySide';
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

// A section intro may be one paragraph or an array of paragraphs; `link` is applied in whichever paragraph contains it.
const linkedParagraphs = (text, link, tone = 'light') => {
  if (!Array.isArray(text)) return <LinkedText text={text} link={link} tone={tone} />;
  return text.map((paragraph, i) => <LinkedText key={i} text={paragraph} link={link} tone={tone} />);
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
      <section className="py-20 sm:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SideBySide
            eyebrow="Benefits"
            title={service.benefitsTitle || `Why Choose Professional ${service.name}?`}
            intro={linkedParagraphs(service.benefitsIntro, service.benefitsIntroLink)}
          >
            <FeatureGrid items={service.benefits} variant="list" columns="md:grid-cols-2" />
          </SideBySide>
        </div>
      </section>

      {/* Residential & Commercial — `residentialText` is a string or an array of paragraphs. */}
      <section className="py-20 sm:py-24 bg-cream">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SideBySide eyebrow="Who it's for" title={service.residentialTitle}>
            <div className="bg-white rounded-3xl border border-navy-100 border-l-4 border-l-gold-400 shadow-sm p-6 sm:p-10 space-y-5 text-lg text-gray-600 leading-relaxed">
              {[].concat(service.residentialText).map((paragraph) => (
                <p key={paragraph.slice(0, 40)}>
                  <LinkedText text={paragraph} link={service.residentialLink} />
                </p>
              ))}
            </div>
          </SideBySide>
        </div>
      </section>

      {/* Why Choose Us — navy band for contrast */}
      <section className="relative overflow-hidden py-20 sm:py-24 bg-navy-950">
        <div
          className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(217,174,67,0.14),transparent_55%)]"
          aria-hidden="true"
        />
        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            align="split"
            tone="dark"
            eyebrow="Why us"
            title={service.whyUsTitle || `Why Choose Five Star for ${service.name}`}
            intro={service.whyUsIntro && linkedParagraphs(service.whyUsIntro, service.whyUsIntroLink, 'dark')}
          />
          <FeatureGrid items={service.whyUs} columns="lg:grid-cols-4" tone="dark" />
        </div>
      </section>

      {/* Process */}
      <section className="py-20 sm:py-24 bg-cream">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="What to expect"
            title={service.processTitle || 'Our Process, Step by Step'}
            intro={service.processIntro && linkedParagraphs(service.processIntro)}
          />
          <ProcessSteps steps={service.process} columns={service.processColumns} surface="cream" />
        </div>
      </section>

      {/* Before & After / Our Work */}
      <section className="py-20 sm:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading align="split" eyebrow="Our work" title="Photos From Recent Jobs" intro="Real photos taken by our team on jobs in London." />
          <PhotoGrid photos={service.images} />
        </div>
      </section>

      {/* FAQs */}
      <section className="py-20 sm:py-24 bg-cream">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SideBySide eyebrow="FAQs" title={service.faqsTitle || `${service.name} FAQs`}>
            <FaqAccordion faqs={service.faqs} />
          </SideBySide>
        </div>
      </section>

      {/* Other services — internal links */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-navy-900 mb-8 text-center">Other Cleaning Services</h2>
          <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {otherServices.map((s) => (
              <li key={s.slug}>
                <Link
                  href={serviceHref(s.slug)}
                  className="group flex items-center justify-between gap-3 h-full bg-white border border-navy-100 rounded-xl px-4 py-4 font-semibold text-navy-900 hover:border-gold-400 hover:shadow-md transition-all"
                >
                  <span className="flex items-center gap-3">
                    <span className="flex items-center justify-center w-9 h-9 flex-shrink-0 rounded-lg bg-navy-900 text-gold-300" aria-hidden="true">
                      <ServiceIcon slug={s.slug} className="w-5 h-5" />
                    </span>
                    {s.name}
                  </span>
                  <ArrowIcon className="w-4 h-4 flex-shrink-0 text-gold-600 group-hover:translate-x-0.5 transition-transform" />
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
