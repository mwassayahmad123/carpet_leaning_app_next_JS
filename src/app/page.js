import PageContent from '../components/PageContent';

const pageJsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebSite',
      '@id': 'https://fivestarcarpetcleaning.co.uk/#website',
      name: 'Five Star Carpet Cleaning',
      alternateName: ['Five Star Carpet & Upholstery Cleaning', 'Five Star Carpet Cleaning London'],
      url: 'https://fivestarcarpetcleaning.co.uk/',
      inLanguage: 'en-GB',
    },
    {
      '@type': 'WebPage',
      '@id': 'https://fivestarcarpetcleaning.co.uk/#webpage',
      url: 'https://fivestarcarpetcleaning.co.uk/',
      name: 'Carpet Cleaning London, UK | Five Star Carpet Cleaning',
      description: 'Professional carpet, rug, mattress and upholstery cleaning in London, UK.',
      inLanguage: 'en-GB',
      isPartOf: { '@id': 'https://fivestarcarpetcleaning.co.uk/#website' },
      about: { '@id': 'https://fivestarcarpetcleaning.co.uk/#localbusiness' },
    },
    {
      '@type': 'Service',
      '@id': 'https://fivestarcarpetcleaning.co.uk/#carpet-cleaning-service',
      name: 'Carpet Cleaning London',
      serviceType: 'Professional carpet, upholstery, rug and mattress cleaning',
      provider: { '@id': 'https://fivestarcarpetcleaning.co.uk/#localbusiness' },
      areaServed: [
        { '@type': 'City', name: 'London' },
        { '@type': 'Place', name: 'East London' },
        { '@type': 'Place', name: 'South East London' },
        { '@type': 'Place', name: 'Leyton' },
        { '@type': 'Place', name: 'Stratford' },
        { '@type': 'Place', name: 'Walthamstow' },
      ],
    },
    {
      '@type': 'FAQPage',
      '@id': 'https://fivestarcarpetcleaning.co.uk/#faq',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'Do you provide carpet cleaning across London, UK?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes. We provide professional carpet cleaning across London, with regular appointments in East and South East London including Leyton, Leytonstone, Stratford, Wanstead, Walthamstow, Hackney, Ilford, Greenwich and Canary Wharf.',
          },
        },
        {
          '@type': 'Question',
          name: 'What carpet cleaning method do you use?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'We use professional hot water extraction, often called steam carpet cleaning, with fabric-appropriate pre-treatment, stain spotting and powerful moisture extraction for a deep, hygienic clean.',
          },
        },
        {
          '@type': 'Question',
          name: 'Are your cleaning products safe for children and pets?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes. We use eco-friendly, biodegradable cleaning solutions that are safe for family homes when used as directed. Our team can also advise on drying and ventilation after cleaning.',
          },
        },
        {
          '@type': 'Question',
          name: 'How long do carpets take to dry after cleaning?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Most carpets are touch-dry within 4 to 6 hours, depending on carpet type, airflow and room temperature. Opening windows or using heating can help speed up drying.',
          },
        },
        {
          '@type': 'Question',
          name: 'Can you help with end of tenancy carpet cleaning in London?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes. We offer end of tenancy carpet cleaning for tenants, landlords and letting agents across London, including stain treatment and deep hot water extraction to help leave the property ready for inspection.',
          },
        },
        {
          '@type': 'Question',
          name: 'Do you clean sofas, rugs and mattresses as well as carpets?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes. We provide upholstery cleaning, sofa cleaning, rug cleaning and mattress cleaning in London using methods suited to each fabric and fibre type.',
          },
        },
      ],
    },
  ],
};

export const metadata = {
  alternates: {
    canonical: 'https://fivestarcarpetcleaning.co.uk/',
  },
};

export default function Page() {
  return <PageContent jsonLd={JSON.stringify(pageJsonLd)} />;
}
