export default function SocialProof() {
  const testimonials = [
    {
      quote: "We got contacted by 2 lenders within 48 hours. Saved us weeks of research.",
      author: "John M.",
      position: "Construction Company Owner",
      location: "Texas",
    },
    {
      quote: "Simple process, no hassle. Got the funding we needed for our expansion.",
      author: "Sarah L.",
      position: "Retail Business Owner",
      location: "California",
    },
  ];

  const stats = [
    { number: '1,247', label: 'Applications processed last month' },
    { number: '500+', label: 'Trusted by businesses' },
    { number: '48-72h', label: 'Average response time' },
  ];

  return (
    <section className="py-16 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Testimonials */}
        <div className="mb-16">
          <h2 className="text-4xl font-bold text-[#1E3A5F] text-center mb-12">What Our Clients Say</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-[#F5F7FA] rounded-xl p-8 relative">
                <svg className="w-12 h-12 text-[#00B8A9] opacity-20 absolute top-6 left-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
                <p className="text-lg text-[#1E3A5F] mb-6 relative z-10 italic">&ldquo;{testimonial.quote}&rdquo;</p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-[#00B8A9] rounded-full flex items-center justify-center text-white font-bold text-xl mr-4">
                    {testimonial.author[0]}
                  </div>
                  <div>
                    <p className="font-semibold text-[#1E3A5F]">{testimonial.author}</p>
                    <p className="text-sm text-[#6B7280]">{testimonial.position}, {testimonial.location}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

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

