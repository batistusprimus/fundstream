export default function WhyFundStream() {
  const benefits = [
    {
      title: 'Save Time',
      description: 'Avoid contacting multiple banks and brokers. We do it for you.',
      icon: (
        <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      color: 'text-[#00B8A9]',
      bgColor: 'bg-[#00B8A9]/10',
    },
    {
      title: 'Easy Access',
      description: 'Access a network of financial partners (banks, fintechs, brokers) in one request.',
      icon: (
        <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      ),
      color: 'text-[#1E3A5F]',
      bgColor: 'bg-[#1E3A5F]/10',
    },
    {
      title: 'Free & No Obligation',
      description: 'Our service is 100% free. You\'re never obligated to accept an offer.',
      icon: (
        <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      color: 'text-[#00B8A9]',
      bgColor: 'bg-[#00B8A9]/10',
    },
    {
      title: 'Data Protected',
      description: 'Your data is protected and only shared with partners you authorize.',
      icon: (
        <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
        </svg>
      ),
      color: 'text-[#1E3A5F]',
      bgColor: 'bg-[#1E3A5F]/10',
    },
  ];

  return (
    <section id="why-us" className="py-20 px-6 bg-gradient-to-b from-[#F5F7FA] to-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#1E3A5F] mb-4">Why fund-stream?</h2>
          <p className="text-xl text-[#6B7280] max-w-2xl mx-auto">
            We make business financing simple, fast, and transparent
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="bg-white rounded-2xl p-8 text-center hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 border border-gray-100 group">
              <div className={`${benefit.bgColor} ${benefit.color} w-24 h-24 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform shadow-lg`}>
                {benefit.icon}
              </div>
              <h3 className="text-xl font-bold text-[#1E3A5F] mb-3">{benefit.title}</h3>
              <p className="text-[#6B7280] leading-relaxed">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

