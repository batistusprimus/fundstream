export default function HowItWorks() {
  const steps = [
    {
      number: '1',
      title: 'Describe Your Need',
      description: 'Fill out a simple form in 2 minutes: amount, purpose, industry.',
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
        </svg>
      ),
    },
    {
      number: '2',
      title: 'We Connect You',
      description: 'Your request is shared with financial partners suited to your profile.',
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
    },
    {
      number: '3',
      title: 'You Get Contacted',
      description: 'Interested partners contact you within 48-72h to review your application.',
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
    },
  ];

  return (
    <section id="how-it-works" className="py-20 px-6 bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#00B8A9]/5 rounded-full blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#1E3A5F] mb-4">How It Works</h2>
          <p className="text-xl text-[#6B7280] max-w-2xl mx-auto">
            Three simple steps to connect with the right financing partners for your business
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 md:gap-12">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              {/* Connecting Line (hidden on mobile) */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-16 left-[60%] w-[80%] h-1 bg-gradient-to-r from-[#00B8A9] to-transparent"></div>
              )}
              
              <div className="bg-gradient-to-br from-white to-[#F5F7FA] rounded-2xl p-8 text-center relative z-10 hover:shadow-2xl transition-all duration-300 border border-gray-100 group">
                {/* Step Number */}
                <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-[#00B8A9] to-[#00E5D0] text-white text-3xl font-bold rounded-2xl mb-6 shadow-lg group-hover:scale-110 transition-transform">
                  {step.number}
                </div>
                
                {/* Icon */}
                <div className="text-[#1E3A5F] flex justify-center mb-6 group-hover:text-[#00B8A9] transition-colors">
                  {step.icon}
                </div>
                
                <h3 className="text-2xl font-bold text-[#1E3A5F] mb-4">{step.title}</h3>
                <p className="text-[#6B7280] leading-relaxed">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

