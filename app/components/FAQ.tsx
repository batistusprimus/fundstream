'use client';

import { useState } from 'react';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: 'Is this really free?',
      answer: 'Yes, our service is 100% free for businesses. We are compensated by our financial partners only if they contact you.',
    },
    {
      question: 'How many partners will contact me?',
      answer: 'It depends on your profile and request. On average, 1 to 3 partners contact you within 48-72h. Some profiles may receive more or fewer contacts.',
    },
    {
      question: 'Am I obligated to accept an offer?',
      answer: 'No, you have no obligation. You are free to compare offers and choose the one that suits you, or decline all offers.',
    },
    {
      question: 'Is my data protected?',
      answer: 'Yes, your data is protected in accordance with CCPA. It is only shared with partners you have authorized via the consent form.',
    },
    {
      question: 'What types of financial partners?',
      answer: 'We work with banks, fintechs, business loan brokers, and SME lending platforms. All our partners are verified and regulated.',
    },
    {
      question: 'How long to receive a response?',
      answer: 'Interested partners typically contact you within 48-72h. The timeframe may vary depending on the complexity of your request and partner availability.',
    },
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 px-6 bg-white">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#1E3A5F] mb-4">Frequently Asked Questions</h2>
          <p className="text-xl text-[#6B7280]">Everything you need to know about our service</p>
        </div>
        
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-gradient-to-br from-white to-[#F5F7FA] rounded-2xl shadow-md hover:shadow-xl overflow-hidden transition-all duration-300 border border-gray-100">
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-6 text-left flex justify-between items-center hover:bg-white/50 transition-colors group"
              >
                <span className="font-semibold text-lg text-[#1E3A5F] pr-4 group-hover:text-[#00B8A9] transition-colors">{faq.question}</span>
                <div className={`w-10 h-10 rounded-lg bg-[#00B8A9]/10 flex items-center justify-center flex-shrink-0 transition-all ${openIndex === index ? 'bg-[#00B8A9] rotate-180' : 'group-hover:bg-[#00B8A9]/20'}`}>
                  <svg
                    className={`w-6 h-6 transition-colors ${openIndex === index ? 'text-white' : 'text-[#00B8A9]'}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </button>
              
              {openIndex === index && (
                <div className="px-6 pb-6 animate-fade-in">
                  <div className="pl-4 border-l-4 border-[#00B8A9]">
                    <p className="text-[#6B7280] leading-relaxed">{faq.answer}</p>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

