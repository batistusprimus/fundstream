import Image from 'next/image';

export default function IndustryCoverage() {
  const mediaLogos = [
    { name: 'TechCrunch', src: '/Press/techcrunch.png', height: 40 },
    { name: 'Forbes', src: '/Press/forbes.png', height: 35 },
    { name: 'Reuters', src: '/Press/reuters.png', height: 30 },
    { name: 'WSJ', src: '/Press/wsj.png', height: 35 },
  ];

  return (
    <section className="py-16 px-6 bg-[#F5F7FA]">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-[#1E3A5F] text-center mb-10">
          Industry coverage from
        </h2>
        
        <div className="flex flex-wrap justify-center items-center gap-12 md:gap-16">
          {mediaLogos.map((logo, index) => (
            <div 
              key={index} 
              className="opacity-40 hover:opacity-60 transition-opacity grayscale"
            >
              <Image
                src={logo.src}
                alt={`${logo.name} logo`}
                width={150}
                height={logo.height}
                className="h-auto"
                style={{ height: `${logo.height}px`, width: 'auto' }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

