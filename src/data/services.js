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
    metaTitle: 'Stain Removal London | Professional Carpet Stain Cleaning',
    metaDescription:
      'Need stain removal in London? Five Star Carpet Cleaning treats stubborn carpet stains with suitable cleaning methods. Contact us today for a friendly quote.',
    h1: 'Professional Stain Removal London',
    heroIntro:
      'Spills, food marks, and stubborn stains can make carpets look worn and untidy. We provide professional stain removal in London, helping homes and businesses tackle unwanted marks with suitable cleaning methods. We assess each stain and carpet type before choosing the right treatment.',
    summary:
      'Pet accidents can leave marks and lingering smells in carpets, rugs and sofas. We use suitable treatments designed to break down pet urine residues and tackle odours at their source, rather than simply covering them with fragrance. Results depend on the material, the stain, and how deeply it has soaked in.',
    heroImage: PHOTOS.diningCarpet,
    benefitsTitle: 'Why Choose Professional Carpet Stain Removal?',
    benefitsIntro:
      'Some stains sit near the surface, while others work deeper into the carpet fibres. Household sprays may not remove the full mark and can sometimes leave residue behind. Professional carpet stain cleaning uses suitable products and equipment to treat the affected area carefully.',
    benefitsIntroLink: { text: 'carpet stain cleaning', href: '/blog/how-to-clean-carpet-at-home/' },
    benefits: [
      {
        title: 'Treats Different Types of Stains',
        text: 'From coffee and tea spills to food marks, mud, and everyday dirt, we assess the stain before deciding how to clean it. The right treatment depends on what caused the mark, how long it has been there, and the carpet material.',
      },
      {
        title: 'Targets Stubborn Marks',
        text: 'Old or deeply set stains can be harder to remove with household cleaning products. Our professional carpet stain removal service in London uses suitable pre-treatment and cleaning methods to help lift as much of the mark as possible.',
      },
      {
        title: 'Protects Your Carpet',
        text: 'Using the wrong product or scrubbing too hard can damage carpet fibres or affect their colour. We inspect the material and choose a suitable method to help clean the affected area without unnecessary damage.',
      },
      {
        title: 'Honest Advice About Results',
        text: 'Not every stain can be removed completely. We explain what may be possible after assessing the stain, so you can make an informed decision before treatment begins.',
      },
    ],
    residentialTitle: 'Residential & Commercial Stain Removal',
    residentialText: [
      'Our stain removal service in London is available for homes, rental properties and business premises. Whether you are dealing with a drink spill in your living room or marks in a busy office, we assess the affected carpet and recommend a suitable cleaning approach.',
      'For homeowners and tenants, targeted carpet cleaning and stain removal can help refresh rooms without treating every carpeted area unnecessarily. Landlords and property managers may also benefit from stain treatment when preparing a property for new occupants.',
      'We can also discuss commercial carpet stain removal in London for suitable business spaces. The recommended method will depend on the carpet, the type of stain, and the condition of the affected area.',
    ],
    whyUsTitle: 'Why Choose Five Star for Stain Removal?',
    whyUsIntro:
      'Finding a reliable carpet stain removal company means knowing what to expect before the work starts. At Five Star Carpet Cleaning, we focus on careful assessment, clear communication, and suitable treatment for each carpet.',
    whyUsIntroLink: { text: 'carpet stain removal company', href: '/about/' },
    whyUs: [
      {
        title: 'Professional Equipment',
        text: 'We use professional hot water extraction equipment and appropriate cleaning tools to help remove dirt, cleaning residue, and loosened stains. The equipment and method are selected according to the carpet and the type of treatment required.',
      },
      {
        title: 'Carpet-Safe Cleaning Methods',
        text: 'Every carpet is different. We inspect the affected area and check the material before choosing a cleaning method. Where needed, we test a suitable product in a hidden spot to check for colour changes.',
      },
      {
        title: 'Clear, Upfront Pricing',
        text: [
          'We explain the expected cost before starting work. Your quote may depend on the size of the stained area, the number of marks, the carpet material, and how difficult the stains are to treat.',
          'If you are comparing professional stain removal in London, we can discuss your needs and provide information to help you understand the options.',
        ],
      },
      {
        title: 'Careful Product Selection',
        text: 'We choose cleaning solutions according to the carpet and the stain being treated. If you have concerns about products in a home with children or pets, let us know before the appointment so we can explain the available options and any care instructions.',
      },
    ],
    processIntro:
      'We keep the process straightforward, from your first enquiry to the final check. We aim to understand the problem, choose a suitable treatment, and explain the likely result before work begins.',
    process: commonProcess('stained areas'),
    images: [PHOTOS.diningCarpet, PHOTOS.greyCarpetMidClean, PHOTOS.greyBedroom],
    faqsTitle: 'FAQs About Stain Removal Service in London',
    faqs: [
      {
        question: 'Can the cleaners get a stain out?',
        answer:
          'Many stains can be improved with the right cleaning method, especially when treated early. However, the result depends on the type of stain, how long it has been there, and whether the carpet fibres have been damaged or permanently discoloured. We assess the area and explain what is realistic before treatment.',
      },
      {
        question: 'Are there stains that cannot be removed?',
        answer:
          "Yes. Some stains may permanently change the carpet's colour or damage its fibres. Certain dyes, old stains, and marks treated with unsuitable household products can be especially difficult to remove. Professional treatment may improve their appearance, but complete removal cannot be guaranteed.",
      },
      {
        question: 'How much does carpet stain removal cost in London?',
        answer:
          'The price depends on the size of the affected area, the number and type of stains, the carpet material and the treatment required. Contact Five Star Carpet Cleaning with details of your stain to discuss a suitable quote before work begins.',
      },
      {
        question: 'Can you remove old and stubborn carpet stains?',
        answer:
          'Some old stains can be reduced or removed, but results vary. We assess the carpet and the stain before choosing a treatment. Avoid repeatedly scrubbing the area or applying several cleaning products, as this can make the problem worse.',
        link: { text: 'old stains can be reduced or removed', href: '/blog/how-to-remove-stains-from-carpet/' },
      },
      {
        question: 'Do you provide carpet stain removal near London?',
        answer:
          'Five Star Carpet Cleaning serves homes and businesses across London. If you are searching for “carpet stain removal service near me”, contact us with your postcode so we can confirm whether your property is within our service area.',
      },
      {
        question: 'Should I use a stain remover before a professional arrives?',
        answer:
          'It is usually best to blot up fresh spills with a clean cloth and avoid rubbing. Before applying a stain remover, check that it is suitable for your carpet. Some products can leave residue or affect carpet colour, so tell us about anything you have already used when you contact us.',
      },
    ],
    closing: {
      title: 'Get Help with Carpet Stains in London',
      text: [
        'A stubborn carpet stain does not always mean you need to replace your carpet. The right treatment may improve its appearance and help you get more use from it.',
        'Five Star Carpet Cleaning provides professional carpet stain cleaning across London, with suitable methods selected for the stain and carpet material. If you need help with a spill, an old mark, or several stained areas, contact our team to discuss the problem and request a quote.',
      ],
      link: { text: 'carpet stain cleaning across London', href: '/' },
    },
  },
  {
    slug: 'mattress-cleaning',
    name: 'Mattress Cleaning',
    icon: '🛏️',
    metaTitle: 'Mattress Cleaning London | Fresh, Clean Beds at Home',
    metaDescription:
      'Need mattress cleaning in London? Refresh your bed with professional cleaning to tackle dust, sweat stains, and odours. Get a friendly, no-obligation quote.',
    h1: 'Mattress Cleaning London',
    heroIntro:
      'Give your bed a fresh start with professional mattress cleaning in London. We remove built-up dirt, sweat marks, and unwanted odours using cleaning methods suited to your mattress type. If you want to professionally clean a mattress, our experienced team can help refresh your sleeping surface and improve its overall cleanliness. Regular mattress cleaning also helps tackle everyday dirt and keep your bed feeling fresher for longer.',
    summary:
      'Mattresses collect sweat, body oils, dust and everyday marks over time. Our mattress cleaning service helps remove built-up dirt and unwanted odours using a suitable cleaning method. We manage moisture carefully and explain the expected drying time so you know when your bed can be used again.',
    heroImage: PHOTOS.greyBedroom,
    benefitsIntro:
      'Mattresses collect sweat, skin cells, dust, and everyday spills over time. Changing your sheets helps keep your bed fresh, but it does not clean the mattress itself. Professional mattress cleaning tackles this hidden dirt and refreshes the surface you sleep on every night.',
    benefits: [
      {
        title: 'Removes Built-Up Dirt',
        text: 'Everyday use can leave dust, skin cells, and other dirt on your mattress. Our cleaning process helps lift this build-up and remove loose dirt, leaving your mattress cleaner and fresher.',
      },
      {
        title: 'Helps Treat Sweat and Spill Stains',
        text: 'Sweat, drinks, and other spills can leave marks that become harder to remove over time. We assess each stain and use a suitable treatment to improve its appearance without using harsh methods unnecessarily.',
      },
      {
        title: 'Reduces Unwanted Odours',
        text: 'Sweat, spills, and everyday use can leave your mattress with an unpleasant smell. Our cleaning methods help remove the dirt causing these odours rather than simply covering them with strong fragrances.',
      },
      {
        title: 'Careful Cleaning for Your Mattress',
        text: 'Different mattresses need different care. We check the material and condition before choosing a suitable method. Where appropriate, we use controlled-moisture cleaning to help avoid leaving the mattress wetter than necessary.',
      },
    ],
    residentialTitle: 'Mattress Cleaning for Your Home',
    residentialText: [
      'Your mattress collects sweat, dust, everyday dirt, and occasional spills over time. Our mattress cleaning service in London helps homeowners and tenants refresh their mattresses with a cleaning method suited to the material and its condition. Whether you need routine care or deep mattress cleaning services to tackle stubborn marks and unwanted smells, we assess your mattress before recommending a suitable treatment.',
      'If you’re searching for queries like “professional bed cleaner near me” or “mattress cleaners near me”, Five Star Carpet Cleaning can help you understand the available options, expected results, and drying time. Contact us to discuss your mattress and request a quote for professional mattress cleaning at home.',
    ],
    whyUsTitle: 'Why Choose Five Star for Mattress Cleaning?',
    whyUsIntro:
      'Choosing a reliable mattress cleaning company means knowing how your mattress will be treated and what to expect from the service. At Five Star Carpet Cleaning, we focus on careful inspection, clear pricing and cleaning methods suited to the item being cleaned.',
    whyUsIntroLink: { text: 'mattress cleaning company', href: '/about/' },
    whyUs: [
      {
        title: 'Professional Equipment',
        text: 'We use professional cleaning equipment designed for fabric and upholstery care. The equipment and treatment are selected according to your mattress, helping us tackle everyday dirt and suitable stains more effectively than basic surface cleaning alone.',
      },
      {
        title: 'Cleaning Suited to Your Mattress',
        text: 'Before cleaning, we inspect the mattress and consider its material, condition, and care instructions. This helps us choose a suitable method rather than assuming every mattress can be cleaned in the same way.',
      },
      {
        title: 'Clear, Upfront Pricing',
        text: 'We explain the price before work begins, so you know what to expect. The cost may depend on the mattress size, its condition, the type of stains and the treatment required. Contact us for a quote based on your cleaning needs.',
      },
      {
        title: 'Thoughtful Product Selection',
        text: 'We choose cleaning products according to the mattress material and the work required. If you have children or pets at home, let us know so we can explain the products being used and any care instructions you should follow after cleaning.',
      },
    ],
    processIntro:
      'We keep mattress cleaning straightforward, from your first enquiry to the final check. Our process helps us understand what your mattress needs and choose a suitable approach.',
    process: commonProcess('mattress'),
    images: [PHOTOS.greyBedroom, PHOTOS.extractionWand],
    faqsTitle: 'FAQs About Mattress Cleaning',
    faqs: [
      {
        question: 'How much does it cost to clean a mattress in London?',
        answer:
          'The price depends on the mattress size, its condition, the number of stains, and the cleaning method needed. A single mattress may cost less to clean than a larger mattress or one that needs extra attention. Contact Five Star Carpet Cleaning for a quote based on your mattress and the service required.',
        link: { text: 'Contact Five Star Carpet Cleaning', href: '/contact/' },
      },
      {
        question: 'Is it worth getting a mattress cleaned?',
        answer:
          'Professional mattress cleaning can be worthwhile if your mattress has built-up dirt, sweat marks, spills, or unwanted odours. It can help refresh the surface and improve its appearance. However, cleaning cannot repair damaged materials or guarantee that every old stain will disappear.',
      },
      {
        question: 'Is it better to steam or dry clean a mattress?',
        answer:
          "Neither method is best for every mattress. Mattress steam cleaning can help remove dirt, allergens, and certain stains, but it may not be suitable for all mattress materials. The right cleaning method depends on the mattress material, its care instructions, and the type of dirt or stain. Some mattresses may be better suited to a low-moisture method, while others may allow professional steam cleaning. Always check the manufacturer's guidance before choosing a treatment. If you are unsure, consult a professional mattress cleaning service to determine the safest and most effective option for your mattress.",
        link: { text: 'cleaning service', href: '/' },
      },
      {
        question: 'How often should your mattress be cleaned?',
        answer:
          "There is no single schedule that suits every home. Consider professional mattress cleaning when you notice stains, unwanted smells, or visible dirt. Homes with pets, young children, or frequent spills may need cleaning more often. Follow the mattress manufacturer's care advice and keep up with regular sheet changes and routine surface care between professional cleans.",
      },
      {
        question: 'Can you remove old stains from a mattress?',
        answer:
          'Some old stains can be reduced, but the result depends on the stain, how long it has been there, and whether it has affected the mattress material. We assess the area before treatment and explain what results may be possible. Complete removal cannot be guaranteed.',
      },
      {
        question: 'How do I prepare my mattress for cleaning?',
        answer:
          'Remove your sheets, pillows, and bedding before the appointment. Clear the space around the bed so the mattress is easy to reach. If you know what caused a stain or have already tried a cleaning product, tell us when booking. This information helps us choose a suitable approach.',
      },
      {
        question: 'How long does a mattress take to dry?',
        answer:
          "Drying time depends on the mattress material, the cleaning method, the amount of moisture used, and the room's airflow. We will explain the expected drying time after assessing your mattress. Wait until it is fully dry before replacing your bedding or sleeping on it.",
      },
    ],
    closing: {
      title: 'Book Your Mattress Cleaning in London',
      text: [
        'A cleaner mattress can make your bed feel fresher and help you deal with everyday dirt, stains and unwanted smells. Five Star Carpet Cleaning provides professional mattress cleaning in London, with methods chosen according to your mattress and its condition.',
        'Whether you need a routine refresh or help with a stubborn mark, contact our team to discuss your mattress cleaning needs and request a quote.',
      ],
    },
  },
  {
    slug: 'curtain-cleaning',
    name: 'Curtain Cleaning',
    icon: '🪟',
    metaTitle: 'Curtain Cleaning London | Professional On-Site Service',
    metaDescription:
      'Need curtain cleaning in London? Refresh your curtains with professional on-site cleaning while they stay hanging. Get a friendly quote from our team today.',
    h1: 'Curtain Cleaning London',
    heroIntro:
      'Keep your curtains looking fresh with professional curtain cleaning in London from Five Star Carpet Cleaning. Our on-site curtain cleaning service refreshes your curtains and drapes while they remain hanging, saving you the hassle of taking them down and putting them back up. Whether you need help with everyday dust, built-up grime, or unwanted odours, we assess your curtains and choose a suitable cleaning method for the fabric.',
    heroIntroLink: { text: 'suitable cleaning method', href: '/blog/how-to-remove-stains-from-carpet/' },
    summary:
      'Keep your curtains looking fresher without the hassle of taking them down. Our on-site curtain cleaning service treats suitable curtains and drapes while they remain hanging. We assess the fabric first, then work to remove dust, everyday grime and unwanted odours with care.',
    heroImage: PHOTOS.bayWindow,
    benefitsIntro:
      'Curtains collect dust, pollen, cooking smells, and everyday dirt over time. Regular care can help keep your home feeling fresher and your window coverings looking their best. Our professional curtain cleaning service in London is designed to clean your curtains with care while making the process as convenient as possible.',
    benefits: [
      {
        title: 'No Taking Down',
        text: 'Forget the hassle of removing heavy curtains and rehanging them after cleaning. Where the fabric and condition allow, we clean your curtains while they stay in place. This on-site approach makes professional curtain cleaning a convenient option for busy households.',
      },
      {
        title: 'Removes Dust and Everyday Grime',
        text: 'Dust and outdoor pollution can settle deep in curtain folds, making fabrics look dull over time. Our cleaning process helps lift built-up dirt and refresh your curtains. A suitable method is selected after checking the material and its condition.',
      },
      {
        title: 'Helps Reduce Unwanted Odours',
        text: 'Curtains can absorb cooking smells and other everyday odours, especially in busy rooms. Appropriate cleaning can help freshen the fabric and reduce lingering smells, leaving your room feeling more pleasant.',
      },
      {
        title: 'Care for Different Curtain Fabrics',
        text: 'Not every curtain can be cleaned in the same way. We check the fabric, lining and condition before starting, then choose a suitable approach to help reduce the risk of shrinkage, colour changes or water marks.',
      },
    ],
    residentialTitle: 'Residential & Commercial Curtain Cleaning',
    residentialText:
      'We provide residential and commercial curtain cleaning in London for customers who want to keep their window coverings clean and well cared for. At home, our service can help refresh bedroom curtains, living room drapes, bay-window curtains and other suitable fabrics. For businesses, we can assess curtains in offices, hotels, restaurants, meeting rooms, and rental properties. Whether you need a one-off clean or regular maintenance, contact our team to discuss your curtains, the fabric type, and the most suitable cleaning option.',
    residentialLink: { text: 'contact our team to discuss your curtains', href: '/contact/' },
    whyUsTitle: 'Why Choose Five Star for Curtain Cleaning?',
    whyUsIntro:
      'Choosing a reliable curtain cleaning company in London means finding a team that understands your fabric, explains the process, and provides clear pricing. At Five Star Carpet Cleaning, we focus on careful preparation, suitable cleaning methods, and straightforward communication from your first enquiry to the final check.',
    whyUsIntroLink: { text: 'curtain cleaning company in London', href: '/' },
    whyUs: [
      {
        title: 'Professional Equipment',
        text: 'We use professional cleaning equipment and suitable upholstery tools to clean curtains where the fabric allows. Our equipment helps us treat everyday dirt and grime more effectively than basic household cleaning methods.',
      },
      {
        title: 'Fabric-Aware Cleaning',
        text: 'Before cleaning, we inspect your curtains and check the material and colour where appropriate. This helps us select a suitable method for the fabric rather than using the same approach on every curtain.',
      },
      {
        title: 'Clear, Upfront Pricing',
        text: 'The cost depends on factors such as curtain size, fabric, condition, and the work required. We explain the price before starting, so you can decide whether to go ahead without unexpected charges.',
      },
      {
        title: 'Family and Pet-Conscious Cleaning',
        text: 'We take care when choosing cleaning products for your home or business. We can explain the products and process used for your curtains, so you know what to expect before the work begins.',
      },
    ],
    processIntro:
      'Booking a curtain cleaning service in London should be straightforward. First, get in touch and tell us about your curtains, including their approximate size, fabric if known, and any stains or odours you would like us to address. We’ll discuss your requirements and provide a quote. Before cleaning, we inspect the curtains and choose a suitable method based on their material and condition. We then carry out the agreed cleaning, where appropriate, and check the result before finishing. If you are searching for a “curtain cleaner near me” or “curtain cleaning near me”, contact Five Star Carpet Cleaning to discuss your needs and availability.',
    process: commonProcess('curtains'),
    images: [PHOTOS.bayWindow, PHOTOS.sofaRoom],
    faqsTitle: 'FAQs About Curtain Cleaning in London',
    faqs: [
      {
        question: 'How much does it cost to have curtains cleaned?',
        answer:
          'The cost of curtain cleaning depends on the number and size of your curtains, the type of fabric, their condition, and the cleaning method required. Some curtains need more care than others, especially if they are heavily soiled or made from delicate material. Contact Five Star Carpet Cleaning for a quote based on your curtains and location.',
        link: { text: 'Five Star Carpet Cleaning', href: '/about/' },
      },
      {
        question: 'Is it worth getting curtains dry cleaned?',
        answer:
          "Dry cleaning can be suitable for some curtains, particularly when the care label recommends it or the fabric needs specialist treatment. However, not every curtain requires dry cleaning. The best option depends on the material, lining and manufacturer's care instructions. We recommend checking these details before choosing a cleaning method. If you are unsure, contact us to discuss the options available for your curtains.",
      },
      {
        question: 'How often should house curtains be washed?',
        answer:
          'For many homes, cleaning curtains about once or twice a year is a useful starting point. You may need to clean them more often if you live near a busy road, cook frequently, have pets or notice a build-up of dust and odours. Always consider the fabric care instructions before washing or cleaning your curtains.',
      },
      {
        question: 'Can you remove stains from curtains?',
        answer:
          'We can assess marks and discuss suitable curtain stain removal options. The outcome depends on the type of stain, how long it has been there, and the fabric. Some stains may fade rather than disappear completely, and certain treatments may not be suitable for delicate materials. We’ll check the curtains first and explain what may be possible before starting.',
      },
      {
        question: 'How should I prepare for curtain cleaning?',
        answer:
          'Please let us know about any visible stains, odours, or concerns when you book. If possible, share the fabric type or care label information. Move small items away from the work area and make sure we can access the curtains safely. We’ll let you know if any further preparation is needed for your appointment.',
      },
      {
        question: 'Do you clean curtains on site?',
        answer:
          'Yes, we offer on-site curtain cleaning where the fabric and condition are suitable. This means your curtains can often be cleaned while they remain hanging, without the need to take them down and rehang them. The method depends on the material and its care requirements, so we inspect the curtains before proceeding. If you’re looking for a curtain cleaning service in London, customers can contact us for an assessment and get in touch with our team.',
      },
    ],
  },
];

export const getService = (slug) => SERVICES.find((s) => s.slug === slug);
export const serviceHref = (slug) => `/services/${slug}/`;
