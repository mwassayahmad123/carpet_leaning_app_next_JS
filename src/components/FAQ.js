import React from 'react';
import FaqAccordion from './FaqAccordion';

export const faqs = [
    {
      question: "Are you really the best carpet cleaning services near me in London?",
      answer: "That's a fair question to ask, and we'd rather let the results speak than just say yes. What we can tell you is this — we show up on time, we treat your home with respect, and we don't leave until the job is done properly. Our team uses professional-grade hot water extraction equipment, not the kind you can rent from a supermarket. Every job gets a pre-inspection, a fabric-appropriate treatment, and a final walkthrough with you before we pack up. We've built our reputation entirely through word of mouth and genuine reviews from happy customers across London. Whether you're in East London or further out, we're confident you won't need to search again after your first clean with us."
    },
    {
      question: "How long until we can walk on the carpets after you've cleaned them?",
      answer: "It really depends on the fabric and how warm your house is. But honestly, if you're looking for the best steam carpet cleaning service that won't leave your floors soaking wet for days, we've got you covered. Thanks to our heavy-duty extraction machines, we pull out the vast majority of the moisture right away. Usually, your carpets will be dry to the touch in about 4 to 6 hours. For thicker fabrics, it might take a bit longer—around 6 to 8 hours. Pro tip: just cracking a window or turning on the heating speeds things up a lot!"
    },
    {
      question: "Are the cleaning products you use safe for my kids and pets?",
      answer: "100%, yes. Being a family-focused team, we know exactly why folks search for an 'eco-friendly carpet cleaning near me'. We strictly use high-quality, biodegradable solutions that skip the nasty, harsh chemicals. Whether we are doing a routine refresh or a heavy-duty pet stain removal service for carpets, the products we apply are totally safe for little ones crawling around and furry friends rolling on the floor. You won't be dealing with any overpowering chemical smells—just a genuinely clean home."
    },
    {
      question: "Can you actually get rid of those stubborn pet smells and really old stains?",
      answer: "We would love to promise miracles, but sometimes really old stains (especially acidic ones like wine or pet accidents) can actually dye the carpet fibers permanently. That said, as one of the top-rated carpet cleaners near me in the London area, our success rate is incredibly high. For lingering pet odors, we don't just spray a cheap room spray to mask it. We use specialized enzyme treatments that literally break down the bacteria causing the smell. We tackle the root of the problem, so the nasty odors stay gone for good."
    },
    {
      question: "Do you clean delicate stuff like velvet sofas or expensive Persian rugs?",
      answer: "We absolutely do. Delicate items just need a much gentler touch. If you have been hunting for safe, professional upholstery cleaning in London for a beloved velvet armchair, or careful rug cleaning London experts for a hand-woven Persian piece, you are in safe hands. Before we even think about turning on our machines, we do a quick colorfastness test to make sure the dyes won't bleed. We tailor our cleaning method to the exact fabric type, making sure we don't shrink, warp, or damage your luxury items."
    },
    {
      question: "Honestly, how often should I be getting my carpets and mattresses professionally cleaned?",
      answer: "For a typical household, getting the best carpet cleaning London has to offer about once a year (or every 12 to 18 months) is a solid rule of thumb. It keeps everything looking fresh and really extends the life of your investments. But if you have dogs, cats, kids, or someone with bad seasonal allergies, you might want to bump that up to every 6 to 8 months. Also, don't overlook your beds! So many people end up searching for a 'London mattress cleaning service near me' when their allergies start acting up. Deep cleaning your mattress once a year makes a huge difference by getting rid of hidden dust mites."
    }
];

const FAQ = () => (
  <section id="faq" className="py-20 bg-gray-50 border-t border-gray-100">
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
      <div className="text-center mb-16">
        <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
          Frequently Asked Questions
        </h2>
        <p className="text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto">
          Straight answers about professional carpet and upholstery cleaning in London. For service-specific questions, see each service page.
        </p>
      </div>
      <FaqAccordion faqs={faqs} />
    </div>
  </section>
);

export default FAQ;