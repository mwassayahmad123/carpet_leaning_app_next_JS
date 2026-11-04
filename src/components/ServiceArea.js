import { SITE } from '../data/site';
import { PinIcon } from './Icons';
import SideBySide from './SideBySide';

const defaultIntro = `We are based in ${SITE.baseArea} and travel to homes and businesses across London and Greater London. Not sure if we cover your postcode? Just ask.`;

// `extra` is an optional follow-up paragraph shown with the area list.
const ServiceArea = ({ background = 'bg-cream', intro = defaultIntro, extra }) => (
  <section id="service-area" className={`py-20 sm:py-24 ${background}`}>
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <SideBySide eyebrow="Service area" title="Carpet Cleaning Across London" intro={intro}>
        <div className="relative overflow-hidden bg-navy-950 rounded-3xl p-6 sm:p-10">
          <div
            className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(217,174,67,0.18),transparent_60%)]"
            aria-hidden="true"
          />
          <div className="relative">
            {extra && <p className="text-lg text-navy-100 leading-relaxed mb-8">{extra}</p>}
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {SITE.serviceAreas.map((area) => (
                <li
                  key={area}
                  className="flex items-center gap-3 bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-white font-medium hover:border-gold-400/60 transition-colors"
                >
                  <span className="flex items-center justify-center w-8 h-8 rounded-full bg-gold-400 text-navy-950 flex-shrink-0">
                    <PinIcon className="w-4 h-4" />
                  </span>
                  {area}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </SideBySide>
    </div>
  </section>
);

export default ServiceArea;
