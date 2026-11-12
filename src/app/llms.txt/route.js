import { SITE } from '../../data/site';
import { SERVICES, serviceHref } from '../../data/services';
import { POSTS, postHref } from '../../data/blog';

// /llms.txt — plain-text site summary for AI assistants (https://llmstxt.org).
// Built from the same data as the sitemap, so new services and blog posts appear automatically.
export const dynamic = 'force-static';

export function GET() {
  const url = (path) => `${SITE.url}${path}`;
  const lines = [
    `# ${SITE.name}`,
    '',
    `> Professional carpet, upholstery, rug, mattress and curtain cleaning for homes and businesses across London and Greater London, based in ${SITE.baseArea}. Clear, upfront quotes; booking by phone, WhatsApp or the online booking form.`,
    '',
    '## Main pages',
    '',
    `- [Home](${url('/')}): Overview of services, reviews, gallery, FAQs and booking form.`,
    `- [About Us](${url('/about/')}): Who we are, how we work and the areas we cover.`,
    `- [Contact](${url('/contact/')}): Phone, WhatsApp, email and booking form.`,
    `- [Blog](${url('/blog/')}): Carpet care, stain removal and cleaning guides.`,
    '',
    '## Services',
    '',
    ...SERVICES.map((s) => `- [${s.name}](${url(serviceHref(s.slug))}): ${s.metaDescription}`),
    '',
    '## Blog',
    '',
    ...POSTS.map((p) => `- [${p.title}](${url(postHref(p.slug))}): ${p.excerpt}`),
    '',
    '## Contact',
    '',
    `- Phone / WhatsApp: ${SITE.phoneDisplay}`,
    `- Email: ${SITE.email}`,
    '',
  ];

  return new Response(lines.join('\n'), {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
}
