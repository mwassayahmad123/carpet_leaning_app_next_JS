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
    metaTitle: 'Carpet Cleaning Services London | Deep, Professional Clean',
    metaDescription:
      'Get professional carpet cleaning services in London for your home or business. Remove built-up dirt, refresh your carpets, and request a clear, upfront quote.',
    h1: 'Carpet Cleaning Services London',
    heroIntro:
      'Bring your carpets back to life with professional carpet cleaning that removes built-up dirt, everyday marks and unwanted odours. Five Star Carpet Cleaning provides deep carpet cleaning in London for homes, rental properties and businesses, using hot water extraction and suitable cleaning solutions to refresh your carpets.',
    heroIntroLink: { text: 'Five Star Carpet Cleaning', href: '/' },
    summary:
      'Our carpet washing service uses hot water extraction to remove embedded dirt, treat suitable stains, and freshen carpets in living rooms, bedrooms, hallways and on stairs. We provide professional carpet cleaning for homes and businesses, helping carpets look fresher and feel cleaner.',
    heroImage: PHOTOS.creamCarpet,
    benefitsIntro:
      "Vacuuming helps remove loose dust and dirt, but it cannot always reach the grime trapped deeper in carpet fibres. Our professional carpet cleaning service helps tackle everyday dirt, spills and worn-looking areas, leaving your carpets cleaner and fresher. Whether you need a one-off deep clean or regular care, we choose a suitable method for your carpet's material and condition.",
    benefits: [
      {
        title: 'Removes Deep-Down Dirt',
        text: 'Foot traffic can push grit, dust and other dirt into carpet fibres over time. Our hot water extraction method helps loosen and remove this build-up, leaving your carpet feeling cleaner underfoot.',
      },
      {
        title: 'Refreshes the Look of Your Carpet',
        text: 'Hallways, stairs and living areas often show signs of daily use first. Professional carpet washing helps remove built-up dirt and improve the appearance of dull or flattened areas, giving your carpet a fresher look.',
      },
      {
        title: 'Helps Tackle Unwanted Odours',
        text: 'Food spills, pets, and everyday use can leave smells trapped in carpet fibres. Our cleaning process helps remove the residue behind many common odours instead of simply covering them with fragrance.',
      },
      {
        title: 'Helps Remove Trapped Dust and Dirt',
        text: 'Carpets can hold dust and other particles that ordinary vacuuming may not remove completely. Deep cleaning helps lift this build-up, making your carpets feel fresher. It is not a replacement for regular vacuuming or a guarantee of allergy relief.',
      },
      {
        title: 'Helps Protect Your Carpet Over Time',
        text: 'Dirt and grit can rub against carpet fibres as people walk across them. Removing this build-up through suitable cleaning and regular care can help reduce wear and keep your carpet looking its best for longer.',
      },
    ],
    // Single-paragraph residential/commercial section (replaces the two cards).
    residentialTitle: 'Residential and Commercial Carpet Cleaning in London',
    residentialText:
      'We clean carpets in homes, flats, rental properties, offices and other business spaces across London. Whether you need a bedroom refreshed before moving out, a living room cleaned after everyday family use, or office carpets freshened up, we tailor the work to the space and carpet condition. If you’re searching for “carpet cleaning services near me” or “carpet wash near me”, contact our team to check coverage for your London postcode and discuss your cleaning needs.',
    residentialLink: { text: 'contact our team', href: '/contact/' },
    whyUsTitle: 'Why Choose Five Star for Carpet Cleaning?',
    whyUsIntro:
      'Choosing a carpet cleaner should be about more than getting a stain out. You also want clear communication, careful work, and a service that respects your property. At Five Star Carpet Cleaning, we focus on understanding what your carpets need, explaining the work before we start, and helping you choose a suitable cleaning option. If you are comparing carpet cleaning companies, here is what you can expect from our team.',
    whyUsIntroLink: { text: 'carpet cleaning companies', href: '/about/' },
    whyUs: [
      {
        title: 'Professional Equipment',
        text: 'We use professional hot water extraction machines and suitable tools to help remove embedded dirt and cleaning residue. This method is often called steam carpet cleaning, although hot water extraction and steam cleaning are not the same. We select the approach that best suits the carpet and its care instructions.',
      },
      {
        title: 'Cleaning Suited to Your Carpet',
        text: 'Different carpet materials need different levels of care. We inspect the carpet and check for colourfastness before cleaning, where suitable, so we can choose an appropriate method for the material and condition.',
      },
      {
        title: 'Clear, Upfront Quotes',
        text: 'Before work begins, we explain the expected cost based on the details you provide and the cleaning required. This helps you understand what is included and avoid unexpected charges. If you want to compare professional carpet washing options, we recommend looking at the work included as well as the price.',
      },
      {
        title: 'Considerate Products and Care',
        text: 'We choose cleaning solutions based on the carpet and the job. We aim to avoid unnecessarily strong smells and take care around your home, furniture, and belongings. If you have children, pets, or particular product concerns, tell us before the appointment so we can discuss suitable options.',
      },
    ],
    processIntro:
      'Booking professional carpet cleaning should feel simple. First, tell us which rooms or areas need attention and share any stains or concerns. We provide a quote based on the information available and arrange a suitable appointment. When we arrive, we inspect the carpet, discuss any problem areas, and choose an appropriate cleaning method. We then carry out the cleaning, remove as much moisture as the method allows, and explain how to care for the carpet while it dries.',
    process: commonProcess('carpets'),
    images: [PHOTOS.greyCarpetMidClean, PHOTOS.extractionHallway, PHOTOS.creamCarpet, PHOTOS.stairsGrey],
    faqsTitle: 'FAQs About Carpet Cleaning Service',
    faqs: [
      {
        question: 'How Much Do Carpet Cleaners Charge in London?',
        answer:
          "The cost depends on the number and size of the rooms, the carpet's condition, the type of stains, and whether extra treatments are needed. The best way to understand your cost is to request a quote based on your property and cleaning needs. Five Star Carpet Cleaning can discuss the work required before you book, so you know what to expect.",
      },
      {
        question: 'Is It Worth Getting Carpets Professionally Cleaned?',
        answer:
          'Professional cleaning can be worthwhile when carpets have built-up dirt, traffic marks or smells that regular vacuuming cannot tackle. It can also help refresh carpets before moving in or out of a property. The results depend on the carpet material, its condition, and the type of stain, so not every mark can be removed completely.',
      },
      {
        question: 'Do Carpets Get Dirtier After Cleaning?',
        answer:
          'Carpets should not become dirtier simply because they have been cleaned. However, leftover cleaning residue can attract dirt, and walking on a damp carpet can transfer dirt back onto the fibres. Using a suitable amount of cleaning solution, removing residue properly and allowing the carpet to dry before normal use can help reduce this risk.',
      },
      {
        question: 'Should Carpet Be Vacuumed After Cleaning?',
        answer:
          'Wait until the carpet is fully dry before vacuuming, unless your cleaner or the equipment instructions advise otherwise. Vacuuming a damp carpet may not give the best result. Once dry, vacuuming can help remove loose particles and keep the carpet looking fresh.',
      },
      {
        question: 'How Often Should Carpets Be Professionally Cleaned?',
        answer:
          'It depends on how much the carpet is used, whether you have pets or children, and how quickly dirt builds up. Busy hallways and family living areas may need attention more often than spare rooms. Regular vacuuming and prompt treatment of spills can help you decide when a professional clean is needed.',
      },
      {
        question: 'Can You Remove All Carpet Stains?',
        answer:
          'No cleaning company can promise to remove every stain. Results depend on what caused the mark, how long it has been there, the carpet material, and any previous cleaning attempts. We assess the affected area and explain what may be possible before starting.',
        link: { text: 'remove every stain', href: '/services/stain-removal/' },
      },
      {
        question: 'How Should I Prepare Before You Arrive?',
        answer:
          'Please remove small items and personal belongings from the areas to be cleaned where possible. Tell us about any stains, pet accidents, or previous cleaning treatments, and let us know about furniture that may need moving. We can then explain how to prepare for your appointment.',
      },
    ],
  },
  {
    slug: 'upholstery-sofa-cleaning',
    name: 'Upholstery & Sofa Cleaning',
    icon: '🛋️',
    metaTitle: 'Upholstery Cleaning London | Sofa Cleaning Experts',
    metaDescription:
      'Give your sofas and armchairs a fresh new look with professional upholstery cleaning in London. Remove built-up dirt and odours. Contact Five Star for a quote!',
    h1: 'Upholstery Cleaning London',
    heroIntro:
      'Give your furniture a fresh start with professional upholstery cleaning in London. We clean sofas, armchairs, dining chairs, and headboards using methods suited to the fabric, helping remove everyday dirt, spills, body oils, and unwanted odours while caring for your furniture.',
    summary:
      'Give your furniture the care it needs with fabric-aware cleaning for sofas, armchairs and dining chairs, including suitable velvet fabrics. We target body oils, everyday spills and built-up dirt to refresh your furniture while taking care to protect delicate materials.',
    heroImage: PHOTOS.sofaRoom,
    benefitsIntro:
      'Your sofa is one of the most-used pieces of furniture in your home. Over time, fabric can collect dust, food crumbs, body oils, and pet hair that regular vacuuming may not remove. Our professional sofa cleaning service in London helps freshen your furniture and keep it looking its best.',
    benefits: [
      {
        title: 'Removes Dirt and Body Oils',
        text: 'Arms, seat cushions, and headrests collect dirt through daily use. Our cleaning process helps lift built-up grime and marks, leaving your upholstery cleaner and fresher.',
      },
      {
        title: 'Refreshes the Look of Your Furniture',
        text: 'Dirt can make fabric look dull and tired. A suitable cleaning method helps improve the appearance of your sofa and chairs without using harsh treatment that could harm the material.',
      },
      {
        title: 'Helps Reduce Unwanted Odours',
        text: 'Food spills, pets and everyday use can leave unpleasant smells in upholstery. We treat affected areas with suitable cleaning methods to help remove the source of the odour rather than simply covering it up.',
      },
      {
        title: 'Removes Trapped Dust and Pet Hair',
        text: 'Sofas can hold dust, loose hair, and other everyday debris between the fibres and cushions. Careful cleaning helps remove this build-up, making your furniture feel fresher.',
      },
      {
        title: 'Helps Care for Your Furniture',
        text: 'Using a cleaning method that suits the fabric helps reduce the risk of unnecessary wear or damage. Regular care can also help keep your sofas and chairs in better condition for longer.',
      },
    ],
    residentialTitle: 'Residential & Commercial Upholstery Cleaning in London',
    residentialText: [
      'Our upholstery cleaning service in London is available for homes, rental properties and business premises. Whether you need a family sofa refreshed or several chairs cleaned at work, we can discuss your furniture, its fabric and the most suitable cleaning approach.',
      'For residential customers, we help freshen everyday furniture, including sofas, armchairs, dining chairs and upholstered headboards. For offices, waiting rooms, rental properties and other commercial spaces, we can discuss cleaning needs based on the furniture and level of use.',
      'If you are looking for commercial and residential upholstery cleaning services in London, contact us to explain what needs cleaning and request a quote. We can also discuss carpet and upholstery cleaning in London if you would like both services arranged.',
    ],
    whyUsTitle: 'Why Choose Five Star for Upholstery & Sofa Cleaning?',
    whyUsIntro:
      'At Five Star Carpet Cleaning, we focus on careful work, clear communication and cleaning methods suited to your furniture. If you are comparing sofa cleaners or searching for professional upholstery cleaning in London, we want you to know what to expect before you book.',
    whyUs: [
      {
        title: 'Professional Equipment',
        text: 'We use professional cleaning machines and upholstery tools designed for fabric furniture. The right equipment helps lift dirt from upholstery while allowing us to control the amount of moisture used.',
      },
      {
        title: 'Fabric-Aware Cleaning',
        text: 'Not every sofa can be cleaned in the same way. We inspect the material and carry out a suitable colour test before choosing the cleaning method. This is especially important for delicate materials, including velvet.',
      },
      {
        title: 'Clear, Up-Front Pricing',
        text: 'Before work begins, we explain the quoted cost so you can make an informed decision. The price depends on factors such as the furniture type, size, fabric and cleaning needs.',
      },
      {
        title: 'Family & Pet-Conscious Products',
        text: 'We choose cleaning products with care and use suitable solutions for the fabric being treated. We aim to leave your furniture fresh without strong, lingering cleaning smells. Follow any aftercare advice we provide, especially if children or pets use the furniture.',
      },
    ],
    processIntro:
      'Booking a sofa cleaning service should be simple. We explain what your furniture needs, discuss the cleaning approach, and keep you informed throughout the visit. If you have been searching for “upholstery cleaning near me” or “professional sofa cleaning near me”, contact Five Star Carpet Cleaning to discuss your furniture and arrange a quote.',
    process: commonProcess('sofa or chairs'),
    images: [PHOTOS.sofaRoom, PHOTOS.bayWindow],
    faqsTitle: 'FAQs About Upholstery & Sofa Cleaning',
    faqs: [
      {
        question: 'How Much Does It Cost to Have a Sofa Cleaned in London?',
        answer:
          'The cost depends on the size and type of sofa, the fabric, its condition, and the level of cleaning needed. A small sofa may cost less to clean than a large corner sofa or a delicate fabric sofa that needs extra care. Contact Five Star Carpet Cleaning with details of your furniture to request a quote before booking.',
      },
      {
        question: 'Is It Worth Getting a Sofa Cleaned?',
        answer:
          "Professional sofa cleaning can be worthwhile when your furniture has built-up dirt, everyday marks or unwanted odours. It can help refresh the fabric and improve the sofa's appearance without the need to replace it. The best option depends on the sofa's condition, material, and cleaning needs.",
      },
      {
        question: 'Is Professional Upholstery Cleaning Better Than Doing It Yourself?',
        answer:
          "It depends on the fabric and the type of dirt or stain. Home cleaning may help with small, fresh spills when you use a suitable method. Professional upholstery cleaning can be a better choice for built-up dirt, larger items, or delicate fabrics because the cleaning method and equipment can be chosen to suit the furniture. Always check the manufacturer's care instructions before cleaning.",
      },
      {
        question: 'How Long Does a Professional Sofa Clean Take?',
        answer:
          "The time needed depends on the sofa's size, fabric, condition and the number of items being cleaned. A simple job may take less time than cleaning a large corner sofa or treating several pieces of furniture. Drying time is separate and varies with the fabric, cleaning method, ventilation and room conditions. We can give you a better estimate once we know what needs cleaning.",
      },
      {
        question: 'Is It a Good Idea to Steam Clean a Sofa?',
        answer:
          "Steam cleaning is not suitable for every sofa. Some fabrics can shrink, lose colour, or become damaged when exposed to too much heat or moisture. Before choosing a cleaning method, check the manufacturer's instructions and the fabric's care label. A professional can assess the material and recommend a suitable approach.",
      },
      {
        question: 'How Often Should a Couch Be Cleaned?',
        answer:
          'How often a couch needs cleaning depends on how much it is used, whether pets or children use it, and how quickly dirt builds up. A frequently used family sofa may need attention more often than furniture in a spare room. Vacuuming regularly, dealing with spills promptly and arranging a professional clean when needed can help keep upholstery in good condition.',
      },
    ],
  },
  {
    slug: 'rug-cleaning',
    name: 'Rug Cleaning',
    icon: '🧶',
    metaTitle: 'Rug Cleaning London | Professional Care for Your Rugs',
    metaDescription:
      'Looking for rug cleaning in London? We clean wool, Persian, and modern rugs, helping remove dirt, stains, and odours with care. Contact us today for a free quote!',
    h1: 'Rug Cleaning London',
    heroIntro:
      "Keep your rugs looking fresh and feeling clean with professional rug cleaning in London. We clean wool, Persian, Oriental, and modern rugs using a method suited to their material and condition. Our rug cleaning service helps remove built-up dust, everyday dirt, stains, and unwanted odours while taking care to protect the rug's colours and fibres.",
    summary:
      'From wool and Persian rugs to Oriental and modern designs, we check colours and fibres before choosing a suitable cleaning method. Our rug cleaning service targets embedded dust, stains and unwanted odours while helping protect delicate colours and fringes.',
    heroImage: PHOTOS.extractionWand,
    benefitsIntro:
      'Rugs collect more than the dirt you can see. Dust, grit, food crumbs, and other debris can settle deep between the fibres, even when a rug looks clean on the surface. Professional rug cleaning helps remove this build-up and gives your rug the care it needs to stay in good condition.',
    benefits: [
      {
        title: 'Removes Embedded Dirt and Grit',
        text: 'Small pieces of grit can settle deep inside rug fibres and cause wear as people walk across them. Deep cleaning rugs helps remove trapped dirt that regular vacuuming may leave behind, keeping your rugs fresher and more comfortable underfoot.',
      },
      {
        title: 'Helps Protect Colours and Fibres',
        text: 'Different rugs need different cleaning methods. We inspect the material and test colour-fastness before choosing a suitable approach. This is especially important for wool, Persian and Oriental rugs, where the wrong cleaning product or too much moisture may cause damage.',
      },
      {
        title: 'Refreshes Rug Fringes',
        text: 'Rug fringes can collect dust and become discoloured over time. We pay attention to these details and clean them carefully using a method suited to the rug, helping improve its overall appearance without unnecessary wear.',
      },
      {
        title: 'Helps Reduce Unwanted Odours',
        text: "Food spills, pets, and everyday use can leave rugs with unpleasant smells. Our cleaning process helps remove the dirt and residue behind many common odours rather than simply covering them with fragrance. Results depend on the source of the smell and the rug's condition.",
      },
    ],
    residentialTitle: 'Residential and Commercial Rug Cleaning in London',
    residentialText: [
      'A clean rug can make a room feel more welcoming, whether it is in your home, office, or business premises. Five Star Carpet Cleaning provides residential and commercial rug cleaning in London, with care suited to the type of rug and how it is used. For homes, we help refresh rugs in living rooms, bedrooms, hallways and other busy areas. We can assess everyday dirt, food spills, pet marks, and general wear to recommend a suitable cleaning method.',
      "For offices, shops, reception areas, and other business premises, regular rug care can help maintain a clean and professional setting. We can discuss your rugs, cleaning needs, and preferred timing before providing a quote. Whether you need a single rug cleaned or several rugs refreshed, contact us to discuss your requirements. If you are comparing rug cleaning near me options, look for a service that considers the rug's material, condition, and cleaning needs rather than choosing on price alone.",
    ],
    whyUsTitle: 'Why Choose Five Star for Rug Cleaning?',
    whyUsIntro:
      'Choosing a rug cleaner is about more than removing visible dirt. You also want clear communication, careful handling, and a cleaning method that suits your rug. At Five Star Carpet Cleaning, we focus on practical advice and a straightforward service from the first enquiry to the final check.',
    whyUsIntroLink: { text: 'Five Star Carpet Cleaning', href: '/about/' },
    whyUs: [
      {
        title: 'Professional Cleaning Equipment',
        text: "We use professional cleaning equipment and suitable tools to help remove embedded dirt and cleaning residue. The method depends on the rug's material, construction, and condition, rather than using the same process for every item.",
      },
      {
        title: 'Careful, Material-Specific Cleaning',
        text: 'Before cleaning, we inspect your rug and carry out colour testing where appropriate. This helps us choose a suitable approach for different materials and identify any areas that need extra care. We take particular care with delicate rugs and visible fringes.',
      },
      {
        title: 'Clear, Upfront Rug Cleaning Prices',
        text: [
          "We discuss the work and provide a quote before cleaning begins, so you know what to expect. Rug cleaning prices can vary depending on the rug's size, material, condition, stains, and the method required. Contact us with details of your rug to request a price.",
          'If you are looking for cheap rug cleaners, it is worth comparing what each quote includes. A low price is not the only consideration: suitable cleaning methods and careful handling are important, too.',
        ],
        link: { text: 'cleaning methods', href: '/blog/how-to-remove-stains-from-carpet/' },
      },
      {
        title: 'Family and Pet-Conscious Cleaning',
        text: 'We use cleaning solutions selected for the job and follow their use instructions carefully. If you have children or pets at home, let us know before the appointment so we can explain any relevant product and drying precautions. Always follow the advice given for keeping the area safe until the rug is dry.',
        link: { text: 'cleaning solutions', href: '/blog/how-to-clean-carpet-at-home/' },
      },
    ],
    processTitle: 'Our Rug Cleaning Process, Step by Step',
    processIntro:
      'Every rug is different, so we begin by checking its condition rather than immediately applying a cleaning product. Our process is designed to help us choose an appropriate cleaning method and explain what results may be possible.',
    processColumns: 'lg:grid-cols-3',
    process: [
      {
        title: 'Inspect the Rug',
        text: "We look at the rug's material, construction, colours, fringes, and overall condition. We also ask about visible stains, pet accidents, or previous cleaning treatments that may affect the work.",
        link: { text: 'pet accidents', href: '/blog/how-to-remove-pet-stains-from-carpet/' },
      },
      {
        title: 'Test the Colours and Fibres',
        text: 'Where suitable, we test colour-fastness and check how the material responds. This helps us identify potential risks and decide which cleaning approach is appropriate.',
      },
      {
        title: 'Choose a Suitable Cleaning Method',
        text: 'Depending on the rug, we select a suitable method and cleaning products. Not every rug should be treated with hot water extraction or the same amount of moisture, particularly delicate or colour-sensitive rugs.',
      },
      {
        title: 'Clean the Rug Carefully',
        text: 'We treat each rug according to its needs, focusing on built-up dirt, everyday marks, and effective rug stain removal methods. We use cleaning techniques suited to the rug’s material and condition, as results can vary depending on the type of stain and rug fibers.',
      },
      {
        title: 'Final Check',
        text: 'After cleaning, we check the treated areas and explain any care or drying advice that applies. Drying time varies with the rug, cleaning method, room conditions, and amount of moisture used.',
      },
    ],
    images: [PHOTOS.extractionWand, PHOTOS.extractionHallway],
    faqsTitle: 'FAQs About Rug Cleaning Service',
    faqs: [
      {
        question: 'How much does it cost to get a rug cleaned in London?',
        answer:
          "Rug cleaning prices depend on the rug's size, material, condition, stain level, and the cleaning method required. A delicate Persian rug may need different care from a standard synthetic rug. Contact Five Star Carpet Cleaning with your rug's approximate dimensions and material to request a quote.",
      },
      {
        question: 'Is it worth getting a rug cleaned?',
        answer:
          "Professional rug cleaning can be worthwhile when a rug has built-up dirt, visible marks or lingering odours that regular vacuuming cannot remove. It can also help you care for rugs that need a more suitable cleaning method. The best option depends on the rug's value, condition and cleaning needs.",
      },
      {
        question: 'Where can I get my rug cleaned in London?',
        answer:
          'Five Star Carpet Cleaning provides rug cleaning services across London. If you are searching for “London rug cleaning” or a “professional rug cleaning service near me”, contact us with your postcode and details of the rug to discuss availability and a suitable cleaning approach.',
      },
      {
        question: 'How often should rugs be professionally cleaned?',
        answer:
          'There is no single schedule for every rug. Rugs in busy areas, homes with pets, or places where spills happen often may need more frequent cleaning than rugs in lightly used rooms. Vacuum regularly and arrange professional cleaning when dirt builds up, or the rug needs more care. Always consider the material and care instructions.',
        link: { text: 'professional cleaning', href: '/services/carpet-cleaning/' },
      },
      {
        question: 'Is it better to steam clean or wash a rug?',
        answer:
          "It depends on the rug's material, construction, dye stability, and condition. Some rugs may be suitable for a carefully controlled hot water extraction method, while others need a different approach. Neither steam cleaning nor washing is best for every rug. A proper inspection helps determine the safest suitable method.",
      },
    ],
    closing: {
      title: 'Book Your Rug Cleaning Service in London',
      text: [
        'If your rug looks dull, has built-up dirt, or needs attention after a spill, Five Star Carpet Cleaning is here to help. We assess the rug before recommending a suitable cleaning approach, with care for its material, colours and condition.',
        'Whether you need deep cleaning rugs at home or rug cleaning for a business, contact us to discuss your requirements and request a quote. If you are searching for a “rug cleaner near me” or “rug wash near me”, we can help you understand the service available for your rug before you book.',
      ],
    },
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
