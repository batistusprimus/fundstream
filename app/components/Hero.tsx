'use client';

export default function Hero() {
  const scrollToForm = () => {
    document.getElementById('application-form')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative bg-gradient-to-br from-[#1E3A5F] via-[#2C4F7C] to-[#1E3A5F] text-white pt-32 pb-20 px-6 md:pt-40 md:pb-28 overflow-hidden">
      {/* Animated background circles */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-[#00B8A9]/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-[#00B8A9]/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Main heading with gradient text */}
          <div className="mb-8">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              Find the <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00B8A9] to-[#00E5D0]">right financing</span> for your business
            </h1>
            <p className="text-xl md:text-2xl mb-10 text-gray-200 font-normal max-w-3xl mx-auto">
              We connect your request with qualified financial partners (banks, fintechs, brokers). <strong className="text-white">Free, fast, no obligation.</strong>
            </p>
          </div>
          
          {/* CTA Button with enhanced styling */}
          <div className="mb-12">
            <button
              onClick={scrollToForm}
              className="group bg-[#00B8A9] hover:bg-[#009688] text-white font-semibold px-10 py-5 rounded-xl text-lg transition-all duration-300 shadow-2xl hover:shadow-[#00B8A9]/50 transform hover:scale-105 inline-flex items-center space-x-2"
            >
              <span>Start My Application</span>
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </button>
            <p className="text-sm text-gray-300 mt-4">✓ Takes only 2 minutes · No credit check</p>
          </div>

          {/* Trust Signals - Redesigned */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/15 transition-all">
              <div className="flex flex-col items-center text-center">
                <div className="w-12 h-12 bg-[#00B8A9] rounded-lg flex items-center justify-center mb-3">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </div>
                <p className="font-semibold text-sm">100% Free</p>
              </div>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/15 transition-all">
              <div className="flex flex-col items-center text-center">
                <div className="w-12 h-12 bg-[#00B8A9] rounded-lg flex items-center justify-center mb-3">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                  </svg>
                </div>
                <p className="font-semibold text-sm">48-72h Response</p>
              </div>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/15 transition-all">
              <div className="flex flex-col items-center text-center">
                <div className="w-12 h-12 bg-[#00B8A9] rounded-lg flex items-center justify-center mb-3">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </div>
                <p className="font-semibold text-sm">CCPA Protected</p>
              </div>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/15 transition-all">
              <div className="flex flex-col items-center text-center">
                <div className="w-12 h-12 bg-[#00B8A9] rounded-lg flex items-center justify-center mb-3">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" />
                  </svg>
                </div>
                <p className="font-semibold text-sm">Verified Partners</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

