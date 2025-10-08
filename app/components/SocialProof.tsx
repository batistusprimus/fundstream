export default function SocialProof() {
  const stats = [
    { number: 'Hundreds', label: 'Of applications processed monthly' },
    { number: 'Used by', label: 'Hundreds of businesses' },
    { number: '48-72h', label: 'Typical response time' },
  ];

  return (
    <section className="py-16 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-[#1E3A5F] text-center mb-12">What Our Clients Say</h2>
        
        {/* Stats */}
        <div className="grid md:grid-cols-3 gap-8 text-center">
          {stats.map((stat, index) => (
            <div key={index} className="bg-gradient-to-br from-[#1E3A5F] to-[#2C4F7C] rounded-xl p-8 text-white">
              <p className="text-5xl font-bold mb-2">{stat.number}</p>
              <p className="text-lg opacity-90">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

