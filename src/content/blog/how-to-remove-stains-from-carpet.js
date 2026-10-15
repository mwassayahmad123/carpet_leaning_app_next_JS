import Link from 'next/link';
import { inlineLinkClass } from '../../components/LinkedText';
import image from './how-to-remove-stains-from-carpet.webp';

const A = ({ href, children }) => (
  <Link href={href} className={inlineLinkClass.light}>
    {children}
  </Link>
);

const Item = ({ label, children }) => (
  <li>
    <strong>{label}:</strong> {children}
  </li>
);

export const post = {
  slug: 'how-to-remove-stains-from-carpet',
  title: 'How to Remove Stains from Carpet: Complete Guide',
  seoTitle: 'How to Remove Stains from Carpet: Easy Cleaning Guide',
  metaDescription:
    'Learn how to remove stains from carpet with easy, safe tips for fresh and old marks. Avoid common mistakes and discover when professional cleaning helps.',
  excerpt:
    'Coffee, mud, food or pet accidents — learn how to remove fresh and old carpet stains safely, which mistakes to avoid, and when professional cleaning is the better choice.',
  datePublished: '2026-10-14',
  image: {
    src: image,
    alt: 'Complete guide on how to remove stains from carpet by Five Star Carpet Cleaning.',
  },
  cta: {
    title: 'Need Help With a Stubborn Carpet Stain?',
    text: 'Call or WhatsApp us with a photo of the stain for a free, no-obligation quote.',
    whatsappText: "Hi, I'd like help with a carpet stain.",
  },
  faqs: [
    {
      question: 'How to clean stains from carpet?',
      answer:
        'Blot the spill with a clean, white cloth, identify the stain, and use a suitable carpet cleaner after testing it in a hidden area. Avoid rubbing and excessive moisture.',
    },
    {
      question: 'Can old carpet stains be removed?',
      answer:
        'Some old stains can be removed or reduced, but results depend on the stain, carpet material, and previous cleaning attempts.',
    },
    {
      question: 'Should you rub or blot a carpet stain?',
      answer:
        'Blotting is generally safer. Rubbing can spread the stain, push it deeper into the fibres, and damage the carpet surface.',
    },
    {
      question: 'Can baking soda remove carpet stains?',
      answer:
        'Baking soda may help absorb some moisture or reduce certain smells, but it is not a universal stain remover. Check your carpet care instructions before using it.',
    },
    {
      question: 'Why does a carpet stain return after cleaning?',
      answer:
        'A stain may return because of leftover residue, moisture bringing staining material back to the surface, or contamination deeper in the carpet.',
    },
    {
      question: 'When should you use a professional carpet cleaning service?',
      answer:
        'Consider professional help for stubborn stains, persistent pet odours, delicate carpet materials, or marks that keep returning after suitable home treatment.',
    },
  ],
};

// Article body (everything between the featured image and the FAQ section).
export const Body = () => (
  <>
    <p>
      Carpet stains can happen in seconds, but removing them can be much harder. Whether it is a coffee spill, muddy
      footprints, food marks, or pet accidents, knowing how to remove stains from carpet can help you clean up the mess
      without damaging the fibres.
    </p>
    <p>
      The good news is that many fresh stains can be treated at home with the right steps. The key is to act quickly, use
      a suitable cleaning method, and avoid scrubbing too hard. In this guide, you will learn how to{' '}
      <A href="/services/stain-removal/">remove carpet stains</A>, deal with old marks, and know when professional
      cleaning may be the better choice.
    </p>

    <h2>How to Remove Stains from Carpet: Quick Steps</h2>
    <p>
      The safest way to remove a carpet stain depends on what caused it and what your carpet is made from. However, these
      steps are a useful starting point for many common spills.
    </p>

    <h3>Remove Excess Spillage</h3>
    <p>
      If food or liquid has spilled onto your carpet, remove any solid pieces carefully with a spoon or blunt edge. For
      liquid spills, use a clean, white cloth or paper towel to absorb as much as possible.
    </p>
    <p>Avoid spreading the spill to nearby areas.</p>

    <h3>Blot the Stain Gently</h3>
    <p>
      Press a clean cloth onto the stain to soak up the remaining liquid. Work from the outside towards the centre to help
      prevent the mark from spreading.
    </p>
    <p>
      Do not rub the carpet. Rubbing can push the stain deeper into the fibres and may damage the carpet&apos;s surface.
    </p>

    <h3>Check the Carpet Care Instructions</h3>
    <p>
      Before using a cleaning product, check the manufacturer&apos;s care instructions. Wool, synthetic, and delicate
      carpets may need different treatment.
    </p>
    <p>If you are unsure which method is safe, seek advice before applying a product.</p>

    <h3>Test the Cleaning Product</h3>
    <p>
      Always test a suitable <A href="/">carpet cleaner</A> on a small, hidden area first. Follow the product
      instructions and check for colour changes or damage before treating the visible stain.
    </p>

    <h2>Identify the Type of Carpet Stain</h2>
    <p>One cleaning method will not work for every stain. Identifying the cause helps you choose a safer approach.</p>

    <h3>Food and Drink Stains</h3>
    <p>
      Coffee, tea, juice, and red wine can leave visible marks, especially on light-coloured carpets. Blot fresh spills
      promptly, then follow a method designed for that particular stain.
    </p>
    {/* TODO: link these once the coffee stain and red wine guides are published. */}
    <p>For detailed instructions, see our guides on removing coffee stains and red wine from carpet.</p>

    <h3>Mud and Dirt Stains</h3>
    <p>
      Wet mud can spread when rubbed. Allow loose mud to dry, then remove it carefully with a vacuum cleaner before
      treating any remaining marks with a suitable carpet cleaner.
    </p>

    <h3>Grease and Oil Stains</h3>
    <p>
      Grease and oil can cling to carpet fibres. Carefully lift away excess material without rubbing it into the carpet.
      Use only a product suitable for your carpet and the type of stain.
    </p>

    <h3>Pet Stains and Urine</h3>
    <p>
      Pet accidents can leave both a visible mark and an unpleasant smell. Blot fresh liquid, follow suitable cleaning
      instructions, and avoid soaking the carpet. If the smell remains, the contamination may have reached deeper layers.
    </p>

    <h3>Blood and Other Stubborn Stains</h3>
    <p>
      Blood and other difficult stains need careful treatment. For blood, avoid hot water because heat can make the stain
      harder to remove. Always check the carpet care instructions before trying a cleaning product.
    </p>

    <h2>How to Remove Fresh Carpet Stains</h2>
    <p>
      Fresh stains are often easier to treat because the spilled material has had less time to settle into the carpet.
    </p>
    <p>Follow these steps:</p>
    <ol>
      <Item label="Act quickly">Remove excess food or liquid as soon as possible.</Item>
      <Item label="Blot gently">Use a clean, white cloth and work from the outside towards the centre.</Item>
      <Item label="Apply a suitable cleaner">Follow the product directions and test it on a hidden area first.</Item>
      <Item label="Remove leftover product">Follow the instructions for rinsing or wiping away any residue.</Item>
      <Item label="Let the area dry">Improve airflow and keep people and pets away while the carpet dries.</Item>
    </ol>
    <p>
      A useful lesson in carpet care is that using more cleaner does not always produce a better result. Too much product
      can leave residue, attract dirt, or make the area harder to rinse properly.
    </p>

    <h2>How to Remove Old or Dried Carpet Stains</h2>
    <p>
      Old stains can be more difficult to remove because the spilled material may have dried, bonded to the fibres, or
      been pushed deeper by earlier cleaning attempts.
    </p>
    <p>
      To remove old stains from carpet, start by identifying the stain and checking the carpet&apos;s care instructions.
    </p>

    <h3>Remove Loose Dirt Carefully</h3>
    <p>
      Vacuum loose dirt or dried material gently before applying any cleaning product. Do not scrape aggressively, as this
      may damage the fibres.
    </p>

    <h3>Treat the Stain with Care</h3>
    <p>
      Use a suitable product for the stain type and follow the instructions carefully. Avoid soaking the area or combining
      different cleaners.
    </p>

    <h3>Know When to Stop</h3>
    <p>
      If the stain does not improve after suitable treatment, avoid repeating the process with stronger products. Repeated
      scrubbing can cause fading, rough patches, or other damage.
    </p>
    <p>
      Some old stains can be reduced, but complete removal is not always possible. The result depends on the stain,
      carpet material, and any previous treatment.
    </p>

    <h2>Common Carpet Stain Removal Mistakes to Avoid</h2>
    <p>
      When learning how to get stains out of carpet, knowing what not to do is just as important as knowing the right
      steps.
    </p>
    <ul>
      <Item label="Rubbing the stain">This can spread the mark and damage carpet fibres.</Item>
      <Item label="Using too much water">Excess moisture can reach the carpet backing or underlay and slow drying.</Item>
      <Item label="Mixing cleaning products">
        Some combinations can release harmful fumes or damage the carpet. Never mix products.
      </Item>
      <Item label="Using bleach">Bleach can remove colour and permanently damage many carpets.</Item>
      <Item label="Skipping a patch test">A product may cause colour changes or damage that are difficult to reverse.</Item>
      <Item label="Leaving product behind">Residue can attract dirt and may cause marks to return.</Item>
      <Item label="Using heat without checking">Heat can make certain stains harder to remove.</Item>
    </ul>
    <p>
      Following these carpet stain removal tips can help you avoid turning a small spill into a bigger problem.
    </p>

    <h2>How to Remove Stains Without Damaging Carpet Fibres</h2>
    <p>Safe carpet stain removal starts with understanding the material.</p>
    <p>
      Wool carpets can be sensitive to strong products, high heat, and excessive moisture. Synthetic carpets may tolerate
      different cleaning methods, but they can still be damaged by unsuitable chemicals or rough treatment. Valuable rugs
      and delicate carpets may need specialist care.
    </p>
    <p>For safer cleaning:</p>
    <ul>
      <li>Check the manufacturer&apos;s instructions.</li>
      <li>Choose a cleaner designed for your carpet type.</li>
      <li>Test the product in a hidden area.</li>
      <li>Use a clean cloth rather than a rough brush.</li>
      <li>Avoid soaking the carpet.</li>
      <li>Stop if you notice colour transfer, fading, or changes to the fibres.</li>
    </ul>
    <p>
      If you have an expensive, delicate, or unfamiliar carpet, professional advice may be safer than experimenting with
      several home remedies.
    </p>

    <h2>Why Do Carpet Stains Sometimes Come Back?</h2>
    <p>A stain that disappears while the carpet is wet may become visible again as it dries.</p>
    <p>
      This can happen for several reasons. Cleaning product residue may attract fresh dirt, while moisture can bring
      leftover staining material back towards the surface. In some cases, the original spill has reached deeper into the
      carpet than the cleaning method could reach.
    </p>
    <p>
      To reduce the risk of recurring marks, remove excess liquid carefully, use the right amount of suitable cleaner, and
      follow the instructions for removing residue. Allow the carpet to dry properly.
    </p>
    <p>If the same stain keeps returning, further home treatment may not solve the underlying problem.</p>

    <h2>When Should You Hire a Professional Carpet Cleaner?</h2>
    <p>Home treatment can help with many everyday spills, but some stains need more care.</p>
    <p>
      Consider professional <A href="/services/carpet-cleaning/">carpet cleaning</A> if:
    </p>
    <ul>
      <li>The stain remains after suitable home treatment.</li>
      <li>The carpet is delicate or valuable.</li>
      <li>Pet odours continue after the visible mark has gone.</li>
      <li>A large spill has soaked deeply into the carpet.</li>
      <li>Previous cleaning attempts have left residue or caused the stain to return.</li>
    </ul>
    <p>
      A professional can assess the carpet material, the type of stain, and the cleaning method that may be suitable.
      However, no cleaner can guarantee that every stain will disappear completely.
    </p>
    <p>
      For homeowners, tenants, and landlords in London, Five Star Carpet Cleaning offers a professional option when
      everyday cleaning is not enough. Ask about the appropriate treatment for your carpet before booking.
    </p>
  </>
);

// Rendered after the FAQ section.
export const Conclusion = () => (
  <>
    <h2>Conclusion</h2>
    <p>
      Learning how to remove stains from carpet starts with three simple habits: act quickly, blot rather than scrub, and
      choose a cleaning method that suits the stain and carpet material. Avoid harsh products and excessive moisture, and
      do not keep treating a stain if your efforts are damaging the fibres.
    </p>
    <p>
      Some marks need more than everyday cleaning, especially when they are old, deeply set, or linked to persistent
      odours. If you need help with a difficult carpet stain, <A href="/about/">Five Star Carpet Cleaning</A> can help
      you explore suitable <A href="/contact/">professional carpet cleaning</A> options in London. Get in touch to discuss
      your carpet and request a quote.
    </p>
  </>
);
