'use client';

import Image from 'next/image';

export default function Hero() {
  const scrollToForm = () => {
    document.getElementById('application-form')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="bg-gradient-to-br from-[#1E3A5F] to-[#2C4F7C] text-white py-16 px-6 md:py-24">
      <div className="max-w-7xl mx-auto">
        {/* Logo */}
        <div className="mb-12">
          <Image 
            src="/fundstream_transparent.png" 
            alt="fund-stream logo" 
            width={250} 
            height={80}
            priority
            className="h-16 w-auto"
          />
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Find the right financing for your business in just a few clicks.
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-200 font-normal">
              We connect your request with qualified financial partners (banks, fintechs, brokers). Free, fast, no obligation.
            </p>
            
            <button
              onClick={scrollToForm}
              className="bg-[#00B8A9] hover:bg-[#009688] text-white font-semibold px-8 py-4 rounded-lg text-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
            >
              Start My Application
            </button>

            {/* Trust Signals */}
            <div className="grid grid-cols-2 gap-4 mt-12">
              <div className="flex items-start space-x-3">
                <svg className="w-6 h-6 text-[#00B8A9] flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <div>
                  <p className="font-semibold">Free & No Obligation</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <svg className="w-6 h-6 text-[#00B8A9] flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <div>
                  <p className="font-semibold">Response in 48-72h</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <svg className="w-6 h-6 text-[#00B8A9] flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <div>
                  <p className="font-semibold">CCPA Compliant</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <svg className="w-6 h-6 text-[#00B8A9] flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <div>
                  <p className="font-semibold">Verified Partners</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Visual Placeholder */}
          <div className="hidden md:block">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 shadow-2xl">
              <div className="aspect-square bg-gradient-to-br from-[#00B8A9]/20 to-[#00B8A9]/5 rounded-xl flex items-center justify-center">
                <svg className="w-48 h-48 text-white/30" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

