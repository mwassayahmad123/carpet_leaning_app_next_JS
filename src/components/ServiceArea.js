import { SITE } from '../data/site';
import { PinIcon } from './Icons';
import SectionHeading from './SectionHeading';

const defaultIntro = `We are based in ${SITE.baseArea} and travel to homes and businesses across London and Greater London. Not sure if we cover your postcode? Just ask.`;

const ServiceArea = ({ background = 'bg-gray-50', intro = defaultIntro }) => (
  <section id="service-area" className={`py-20 ${background}`}>
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <SectionHeading eyebrow="Service area" title="Carpet Cleaning Across London" intro={intro} />
      <ul className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
        {SITE.serviceAreas.map((area) => (
          <li
            key={area}
            className="flex items-center gap-2 bg-white border border-gray-200 rounded-full px-5 py-2.5 text-gray-800 font-medium shadow-sm"
          >
            <PinIcon className="w-4 h-4 text-blue-600" />
            {area}
          </li>
        ))}
      </ul>
    </div>
  </section>
);

export default ServiceArea;
