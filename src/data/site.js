// Single source of truth for business details used across every page.
// Only publish details the business is happy to show publicly.
export const SITE = {
  name: 'Five Star Carpet Cleaning',
  url: 'https://fivestarcarpetcleaning.co.uk',
  phoneDisplay: '+44 7871 062227',
  phoneHref: 'tel:+447871062227',
  whatsappNumber: '447871062227',
  whatsappHref: 'https://wa.me/447871062227',
  email: 'fivestarservicesltduk@gmail.com',
  baseArea: 'East London (E11)',
  // TODO: confirm these hours with the business before going live.
  openingHours: 'Monday – Sunday, 8:00am – 8:00pm',
  // TODO: replace with the exact boroughs / postcodes the business covers.
  serviceAreas: ['East London', 'North London', 'Central London', 'South London', 'West London', 'Greater London'],
};

export const whatsappLink = (text) =>
  text ? `${SITE.whatsappHref}?text=${encodeURIComponent(text)}` : SITE.whatsappHref;
