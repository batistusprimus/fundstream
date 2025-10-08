'use client';

export default function FinalCTA() {
  const scrollToForm = () => {
    document.getElementById('application-form')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="py-16 px-6 bg-gradient-to-br from-[#1E3A5F] to-[#2C4F7C]">
      <div className="max-w-4xl mx-auto text-center text-white">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to find your financing?</h2>
        <p className="text-xl md:text-2xl mb-8 text-gray-200">
          Start your application in 2 minutes. Free, fast, no obligation.
        </p>
        <button
          onClick={scrollToForm}
          className="bg-[#00B8A9] hover:bg-[#009688] text-white font-semibold px-10 py-4 rounded-lg text-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 inline-block"
        >
          Start My Application
        </button>
      </div>
    </section>
  );
}

