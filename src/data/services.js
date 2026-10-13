import img1 from '../components/img/1.webp';
import img2 from '../components/img/2.webp';
import img3 from '../components/img/3.webp';
import img4 from '../components/img/4.webp';
import img5 from '../components/img/5.webp';
import img6 from '../components/img/6.webp';
import img7 from '../components/img/7.webp';
import img9 from '../components/img/9.webp';
import img10 from '../components/img/10.webp';
import img11 from '../components/img/11.webp';
import img12 from '../components/img/12.webp';

// Real job photos, described by what they actually show.
export const PHOTOS = {
  sofaRoom: { src: img1, alt: 'Cream velvet sofa and armchair in a bay-window living room after cleaning' },
  bayWindow: { src: img2, alt: 'Bay-window living room with cleaned cream carpet, armchair and full-length curtains' },
  creamCarpet: { src: img3, alt: 'Cream living room carpet showing fresh extraction lines after a deep clean' },
  greyCarpetMidClean: { src: img4, alt: 'Grey bedroom carpet part-way through cleaning, showing cleaned and uncleaned areas' },
  greyBedroom: { src: img5, alt: 'Grey bedroom carpet with fresh cleaning strokes along the skirting board' },
  extractionHallway: { src: img6, alt: 'Hot water extraction machine cleaning a beige hallway carpet' },
  diningCarpet: { src: img7, alt: 'Grey carpet under a dining table after spot treatment and extraction' },
  diningRoom: { src: img9, alt: 'Grey dining room carpet after a professional deep clean' },
  stairsGrey: { src: img10, alt: 'Grey stair carpet cleaned from top to bottom' },
  extractionWand: { src: img11, alt: 'Professional extraction wand on a grey living room carpet' },
  stairsDark: { src: img12, alt: 'Close-up of dark stair carpet treads after cleaning' },
};

const commonProcess = (itemName) => [
  { title: 'Get in touch', text: `Call, WhatsApp or send the booking form with a few details and photos of your ${itemName} if you have them.` },
  { title: 'Free quote & booking', text: 'We confirm the price up front and agree a date and time that suits you.' },
  { title: 'Inspection & pre-treatment', text: `On the day we check the fabric, test for colour-fastness and pre-treat stains and high-traffic areas.` },
  { title: 'Deep clean & extraction', text: 'We clean with professional equipment and extract as much moisture as possible to speed up drying.' },
  { title: 'Final check with you', text: 'We walk through the result with you before we leave and give simple aftercare advice.' },
];

const commonWhyUs = [
  { title: 'Professional equipment', text: 'Commercial-grade hot water extraction machines and upholstery tools, not supermarket rental machines.' },
  { title: 'Fabric-aware cleaning', text: 'Every item is inspected and colour-tested first so the method suits the material.' },
  { title: 'Clear, up-front pricing', text: 'You get a quote before any work starts — no surprises on the day.' },
  { title: 'Family & pet-friendly products', text: 'We use biodegradable cleaning solutions without harsh chemical smells.' },
];

export const SERVICES = [
  {
    slug: 'carpet-cleaning',
    name: 'Carpet Cleaning',
    icon: '💧',
    metaTitle: 'Carpet Cleaning London | Professional Deep Steam Cleaning',
    metaDescription:
      'Professional carpet cleaning in London for homes, landlords and offices. Hot water extraction that lifts dirt, stains and odours. Free quote — call or WhatsApp.',
    h1: 'Carpet Cleaning in London',
    heroIntro:
      'Deep hot water extraction that lifts embedded dirt, stains and odours from your carpets — for homes, rentals and businesses across London.',
    summary:
      'Our carpet washing service uses hot water extraction to remove embedded dirt, treat suitable stains, and freshen carpets in living rooms, bedrooms, hallways and on stairs. We provide professional carpet cleaning for homes and businesses, helping carpets look fresher and feel cleaner.',
    heroImage: PHOTOS.creamCarpet,
    benefitsIntro:
      'Regular vacuuming only removes surface dust. Professional carpet cleaning reaches the base of the fibres where grit, oils and odours build up.',
    benefits: [
      { title: 'Removes deep-down dirt', text: 'Hot water extraction flushes out grit and residue that wears fibres down over time.' },
      { title: 'Restores appearance', text: 'Traffic lanes, dull patches and flattened pile are lifted so carpets look fresher.' },
      { title: 'Reduces odours', text: 'Cooking, pet and everyday odours trapped in the pile are rinsed out rather than masked.' },
      { title: 'Less dust and allergens', text: 'Extraction removes dust and allergens held in the carpet, helping keep your home fresher.' },
      { title: 'Helps carpets last longer', text: 'Removing abrasive dirt protects the fibres and extends the life of your carpet.' },
    ],
    residential:
      'Living rooms, bedrooms, hallways and stairs, plus end-of-tenancy cleans for tenants and landlords who need carpets ready for inspection.',
    commercial:
      'Offices, shops, rental properties and communal areas. We can work around your opening hours to keep disruption to a minimum.',
    whyUs: commonWhyUs,
    process: commonProcess('carpets'),
    images: [PHOTOS.greyCarpetMidClean, PHOTOS.extractionHallway, PHOTOS.creamCarpet, PHOTOS.stairsGrey],
    faqs: [
      {
        question: 'How much does carpet cleaning cost in London?',
        answer:
          'The price depends on the number and size of rooms, stairs and the condition of the carpet. Send us the details or a few photos on WhatsApp and we will give you a clear quote before booking.',
      },
      {
        question: 'How often should carpets be professionally cleaned?',
        answer:
          'For most homes every 12 to 18 months is a good rule. Homes with pets, young children or allergy sufferers often benefit from a clean every 6 to 8 months.',
      },
      {
        question: 'Can you remove all stains?',
        answer:
          'Most everyday stains come out well. Some old or dye-based stains (wine, bleach, some pet accidents) can permanently change the fibre colour. We will tell you honestly what to expect before we start.',
      },
      {
        question: 'How should I prepare before you arrive?',
        answer:
          'Please vacuum if you can and move small items, breakables and anything on the floor. We can help move light furniture; heavy items can be cleaned around.',
      },
      {
        question: 'What cleaning method do you use and how long does it take to dry?',
        answer:
          'We use hot water extraction (often called steam cleaning). Carpets are usually dry to the touch in 4–6 hours, a little longer for thick pile. Good ventilation or heating speeds drying up.',
      },
    ],
  },
  {
    slug: 'upholstery-sofa-cleaning',
    name: 'Upholstery & Sofa Cleaning',
    icon: '🛋️',
    metaTitle: 'Upholstery & Sofa Cleaning London | Fabric & Velvet Sofas',
    metaDescription:
      'Professional sofa and upholstery cleaning in London. Fabric-safe cleaning for sofas, armchairs and dining chairs, including velvet. Get a free quote today.',
    h1: 'Upholstery & Sofa Cleaning in London',
    heroIntro:
      'Careful, fabric-specific cleaning for sofas, armchairs, dining chairs and headboards — from everyday fabrics to delicate velvets.',
    summary:
      'Give your furniture the care it needs with fabric-aware cleaning for sofas, armchairs and dining chairs, including suitable velvet fabrics. We target body oils, everyday spills and built-up dirt to refresh your furniture while taking care to protect delicate materials.',
    heroImage: PHOTOS.sofaRoom,
    benefitsIntro:
      'Sofas and chairs absorb body oils, spills, dust and pet hair every day. A professional clean refreshes them without damaging the fabric.',
    benefits: [
      { title: 'Removes dirt and body oils', text: 'Lifts the grime that builds up on arms, headrests and seat cushions.' },
      { title: 'Brings colour back', text: 'Dull, greyed fabric is refreshed so your furniture looks cared for again.' },
      { title: 'Reduces odours', text: 'Food, pet and everyday smells are cleaned out of the fabric and padding.' },
      { title: 'Less dust and pet dander', text: 'Extraction removes dust, hair and dander trapped deep in the upholstery.' },
      { title: 'Protects your investment', text: 'Cleaning with the right method for the fabric helps furniture last longer.' },
    ],
    residential:
      'Fabric and velvet sofas, corner sofas, armchairs, footstools, dining chairs and upholstered headboards.',
    commercial:
      'Office chairs, reception seating, waiting rooms, restaurant and hospitality seating, and furnished rental properties.',
    whyUs: commonWhyUs,
    process: commonProcess('sofa or chairs'),
    images: [PHOTOS.sofaRoom, PHOTOS.bayWindow],
    faqs: [
      {
        question: 'How much does sofa cleaning cost?',
        answer:
          'It depends on the size of the sofa, the number of seats and cushions, and the fabric. Send a photo on WhatsApp and we will give you a clear price.',
      },
      {
        question: 'How often should upholstery be cleaned?',
        answer:
          'Once a year is enough for most homes. Sofas used daily by children or pets usually benefit from a clean every 6 to 12 months.',
      },
      {
        question: 'Can you remove stains from my sofa?',
        answer:
          'Most food, drink and everyday stains respond well. Some stains on delicate or dyed fabrics may only lighten — we always test first and explain what to expect.',
      },
      {
        question: 'Do I need to do anything before you arrive?',
        answer:
          'Just clear cushions, throws and personal items off the furniture. If you know the fabric type or have the care label, that helps too.',
      },
      {
        question: 'Can you clean velvet and delicate fabrics?',
        answer:
          'Yes. We check the care code and test colour-fastness before choosing a low-moisture or gentle extraction method suitable for the fabric.',
      },
    ],
  },
  {
    slug: 'rug-cleaning',
    name: 'Rug Cleaning',
    icon: '🧶',
    metaTitle: 'Rug Cleaning London | Persian, Wool & Modern Rugs',
    metaDescription:
      'Specialist rug cleaning in London for wool, Persian, Oriental and modern rugs. Colour-tested, fringe-to-fringe cleaning. Get a free rug cleaning quote.',
    h1: 'Rug Cleaning in London',
    heroIntro:
      'Gentle, colour-tested cleaning for wool, Persian, Oriental and modern rugs — removing embedded dust, stains and odours while protecting the fibres.',
    summary:
      'From wool and Persian rugs to Oriental and modern designs, we check colours and fibres before choosing a suitable cleaning method. Our rug cleaning service targets embedded dust, stains and unwanted odours while helping protect delicate colours and fringes.',
    heroImage: PHOTOS.extractionWand,
    benefitsIntro:
      'Rugs trap a surprising amount of grit and dust in their base. Cleaning them with the right method keeps colours bright and fibres soft.',
    benefits: [
      { title: 'Removes embedded grit', text: 'Dry soil and grit work into the base of a rug and slowly wear the fibres.' },
      { title: 'Protects colours', text: 'Colour-fastness testing means the method suits the dyes in your rug.' },
      { title: 'Refreshes fringes', text: 'Fringes are cleaned carefully to lift discolouration and grime.' },
      { title: 'Reduces odours', text: 'Pet, food and damp smells are cleaned out rather than covered up.' },
    ],
    residential:
      'Living room and bedroom rugs, runners, wool and silk-blend rugs, and traditional Persian and Oriental pieces.',
    commercial:
      'Entrance mats, office and reception rugs, showroom rugs and rugs in rental or holiday properties.',
    whyUs: commonWhyUs,
    process: commonProcess('rug'),
    images: [PHOTOS.extractionWand, PHOTOS.extractionHallway],
    faqs: [
      {
        question: 'How much does rug cleaning cost?',
        answer:
          'Rug cleaning is priced by size, material and condition. Send us the measurements and a photo and we will give you a quote.',
      },
      {
        question: 'How often should a rug be cleaned?',
        answer:
          'Rugs in busy areas benefit from a professional clean every 12 months; rugs in quieter rooms every 18 to 24 months.',
      },
      {
        question: 'Can you remove stains from Persian or wool rugs?',
        answer:
          'Many stains can be removed or greatly reduced. Natural dyes can be sensitive, so we test first and choose a gentle method — we will be honest if a stain is permanent.',
      },
      {
        question: 'How do I prepare my rug for cleaning?',
        answer:
          'Vacuum it if you can and clear the area around it. Let us know about any known damage, loose fringes or previous repairs.',
      },
      {
        question: 'What method do you use for rugs?',
        answer:
          'It depends on the rug. Synthetic rugs usually suit hot water extraction; wool and delicate rugs are cleaned with gentler, lower-moisture methods after testing.',
      },
    ],
  },
  {
    slug: 'stain-removal',
    name: 'Pet Stain & Odour Removal',
    icon: '🐾',
    metaTitle: 'Pet Stain & Odour Removal London | Carpet & Sofa',
    metaDescription:
      'Pet stain and odour removal in London. Enzyme treatments that break down urine and odour at the source in carpets, rugs and upholstery. Free quote.',
    h1: 'Pet Stain & Odour Removal in London',
    heroIntro:
      'Targeted enzyme treatments that break down pet urine, accidents and odours at the source — in carpets, rugs and upholstery.',
    summary:
      'Pet accidents can leave marks and lingering smells in carpets, rugs and sofas. We use suitable treatments designed to break down pet urine residues and tackle odours at their source, rather than simply covering them with fragrance. Results depend on the material, the stain, and how deeply it has soaked in.',
    heroImage: PHOTOS.diningCarpet,
    benefitsIntro:
      'Pet accidents soak through the fibres into the backing and underlay. Surface sprays hide the smell for a while — treating the source is what lasts.',
    benefits: [
      { title: 'Treats the source', text: 'Enzyme treatments break down the residue that causes lingering odours.' },
      { title: 'Lifts visible stains', text: 'Targeted pre-treatment and extraction remove as much staining as possible.' },
      { title: 'Discourages repeat marking', text: 'Removing the scent helps stop pets returning to the same spot.' },
      { title: 'Pet-friendly products', text: 'We use solutions that are suitable for homes with cats and dogs.' },
    ],
    residential:
      'Carpets, rugs, sofas and mattresses in family homes — from a single accident to a whole room.',
    commercial:
      'Rental properties after pet-owning tenants, pet-friendly offices and hospitality spaces.',
    whyUs: commonWhyUs,
    process: commonProcess('stained areas'),
    images: [PHOTOS.diningCarpet, PHOTOS.greyCarpetMidClean, PHOTOS.greyBedroom],
    faqs: [
      {
        question: 'How much does pet stain and odour removal cost?',
        answer:
          'It depends on how many areas are affected and whether we are also cleaning the whole carpet. Send photos on WhatsApp for a quick quote.',
      },
      {
        question: 'How often will I need this treatment?',
        answer:
          'Treat accidents as soon as you can. For homes with pets, a full carpet clean every 6 to 8 months alongside spot treatments works well.',
      },
      {
        question: 'Will the stain and smell come out completely?',
        answer:
          'Odours usually respond very well to enzyme treatment. Older urine stains can permanently change carpet colour, so some marks may lighten rather than disappear. We will be upfront about this.',
      },
      {
        question: 'What should I do before you arrive?',
        answer:
          'Blot fresh accidents with plain water and kitchen roll — avoid household sprays, which can set stains. Keep pets in another room during the clean.',
      },
      {
        question: 'How does enzyme treatment work?',
        answer:
          'Enzymes break down the organic residue left by urine and accidents. We apply the treatment, give it time to work, then extract it along with the residue.',
      },
    ],
  },
  {
    slug: 'mattress-cleaning',
    name: 'Mattress Cleaning',
    icon: '🛏️',
    metaTitle: 'Mattress Cleaning London | Deep Clean & Stain Removal',
    metaDescription:
      'Professional mattress cleaning in London. Removes dust, sweat stains and odours from mattresses with fast-drying extraction. Book a free quote today.',
    h1: 'Mattress Cleaning in London',
    heroIntro:
      'Deep, fast-drying mattress cleaning that removes dust, sweat stains and odours so your bed feels fresher.',
    summary:
      'Mattresses collect sweat, body oils, dust and everyday marks over time. Our mattress cleaning service helps remove built-up dirt and unwanted odours using a suitable cleaning method. We manage moisture carefully and explain the expected drying time so you know when your bed can be used again.',
    heroImage: PHOTOS.greyBedroom,
    benefitsIntro:
      'We spend a third of our lives in bed. Mattresses collect dust, skin cells, sweat and spills that a sheet change alone does not remove.',
    benefits: [
      { title: 'Removes dust and debris', text: 'Deep extraction pulls out dust and skin cells from the mattress surface.' },
      { title: 'Lifts sweat and spill stains', text: 'Yellowing and everyday marks are pre-treated and extracted.' },
      { title: 'Reduces odours', text: 'Leaves your mattress smelling clean rather than perfumed.' },
      { title: 'Quick drying', text: 'Low-moisture methods mean your bed is ready to use again the same day.' },
    ],
    residential:
      'Single, double, king and cot mattresses, plus mattress toppers and upholstered bed bases.',
    commercial:
      'Rental and HMO properties, Airbnb and holiday lets, care settings and staff accommodation.',
    whyUs: commonWhyUs,
    process: commonProcess('mattress'),
    images: [PHOTOS.greyBedroom, PHOTOS.extractionWand],
    faqs: [
      {
        question: 'How much does mattress cleaning cost?',
        answer:
          'Pricing depends on the mattress size and how many you need cleaned. Many customers book it alongside carpet or sofa cleaning. Ask us for a quote.',
      },
      {
        question: 'How often should a mattress be cleaned?',
        answer:
          'Once a year is a good habit for most households, or more often for children’s beds and anyone with allergies.',
      },
      {
        question: 'Can you remove old stains from a mattress?',
        answer:
          'Many sweat and spill stains lighten significantly. Older stains that have set into the fabric may not disappear completely — we will tell you what to expect.',
      },
      {
        question: 'How do I prepare my mattress?',
        answer:
          'Strip all bedding and protectors before we arrive, and make sure there is space to access both sides of the bed.',
      },
      {
        question: 'How long does a mattress take to dry?',
        answer:
          'We use low-moisture extraction, so most mattresses are dry within a few hours. Opening a window helps it dry faster.',
      },
    ],
  },
  {
    slug: 'curtain-cleaning',
    name: 'Curtain Cleaning',
    icon: '🪟',
    metaTitle: 'Curtain Cleaning London | On-Site Curtain & Drape Cleaning',
    metaDescription:
      'On-site curtain cleaning in London. We clean curtains and drapes in place — no taking down or re-hanging. Removes dust and odours. Get a free quote.',
    h1: 'Curtain Cleaning in London',
    heroIntro:
      'On-site curtain cleaning that refreshes your curtains and drapes while they stay hanging — no taking down, no re-hanging.',
    summary:
      'Keep your curtains looking fresher without the hassle of taking them down. Our on-site curtain cleaning service treats suitable curtains and drapes while they remain hanging. We assess the fabric first, then work to remove dust, everyday grime and unwanted odours with care.',
    heroImage: PHOTOS.bayWindow,
    benefitsIntro:
      'Curtains trap dust, pollen, cooking smells and city grime. Cleaning them in place saves the hassle of taking them down and re-hanging them.',
    benefits: [
      { title: 'No taking down', text: 'Curtains are cleaned where they hang, so there is nothing to remove or re-hang.' },
      { title: 'Removes dust and grime', text: 'Lifts the dust and pollution that builds up in the folds.' },
      { title: 'Reduces odours', text: 'Cooking and smoke odours are cleaned out of the fabric.' },
      { title: 'Fabric-appropriate care', text: 'We check the fabric and lining first to avoid shrinkage or water marks.' },
    ],
    residential: 'Lined and unlined curtains, heavy drapes, bay-window curtains and voiles.',
    commercial: 'Offices, hotels, restaurants, meeting rooms and rental properties.',
    whyUs: commonWhyUs,
    process: commonProcess('curtains'),
    images: [PHOTOS.bayWindow, PHOTOS.sofaRoom],
    faqs: [
      {
        question: 'How much does curtain cleaning cost?',
        answer:
          'It depends on the number of windows, the size of the curtains and the fabric. Send us a photo and rough measurements for a quote.',
      },
      {
        question: 'How often should curtains be cleaned?',
        answer:
          'Every 12 to 18 months for most rooms. Kitchens and rooms near busy roads may need cleaning more often.',
      },
      {
        question: 'Can you remove stains from curtains?',
        answer:
          'Many marks and water stains can be treated. Sun fading and some old stains cannot be reversed — we will explain this after inspecting the fabric.',
      },
      {
        question: 'How should I prepare?',
        answer:
          'Clear window sills and the floor area in front of the curtains, and tie back any voiles so we can reach the main curtains.',
      },
      {
        question: 'Do you clean curtains on site?',
        answer:
          'Yes. We clean curtains while they hang, using a fabric-appropriate low-moisture method, so there is no need to take them down.',
      },
    ],
  },
];

export const getService = (slug) => SERVICES.find((s) => s.slug === slug);
export const serviceHref = (slug) => `/services/${slug}/`;
