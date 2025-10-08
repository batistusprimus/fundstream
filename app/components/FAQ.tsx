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
    <section className="py-16 px-6 bg-[#F5F7FA]">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-[#1E3A5F] text-center mb-12">Frequently Asked Questions</h2>
        
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-white rounded-xl shadow-sm overflow-hidden">
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-5 text-left flex justify-between items-center hover:bg-gray-50 transition-colors"
              >
                <span className="font-semibold text-lg text-[#1E3A5F] pr-4">{faq.question}</span>
                <svg
                  className={`w-6 h-6 text-[#00B8A9] flex-shrink-0 transition-transform ${
                    openIndex === index ? 'transform rotate-180' : ''
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              
              {openIndex === index && (
                <div className="px-6 pb-5">
                  <p className="text-[#6B7280] leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

