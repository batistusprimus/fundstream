'use client';

export default function FinalCTA() {
  const scrollToForm = () => {
    document.getElementById('application-form')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative py-24 px-6 bg-gradient-to-br from-[#1E3A5F] via-[#2C4F7C] to-[#1E3A5F] overflow-hidden">
      {/* Animated background circles */}
      <div className="absolute top-10 left-10 w-72 h-72 bg-[#00B8A9]/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-[#00B8A9]/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      
      <div className="max-w-4xl mx-auto text-center text-white relative z-10">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
          Ready to find your <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00B8A9] to-[#00E5D0]">financing</span>?
        </h2>
        <p className="text-xl md:text-2xl mb-10 text-gray-200">
          Start your application in 2 minutes. <strong className="text-white">Free, fast, no obligation.</strong>
        </p>
        <button
          onClick={scrollToForm}
          className="group bg-gradient-to-r from-[#00B8A9] to-[#00E5D0] hover:shadow-2xl hover:shadow-[#00B8A9]/50 text-white font-semibold px-12 py-5 rounded-xl text-lg transition-all duration-300 transform hover:scale-105 inline-flex items-center space-x-2"
        >
          <span>Start My Application</span>
          <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
          </svg>
        </button>
      </div>
    </section>
  );
}

