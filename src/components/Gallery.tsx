const galleryImages = [
  {
    src: 'https://images.pexels.com/photos/1545743/pexels-photo-1545743.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1',
    alt: 'Полировка автомобиля',
    label: 'Полировка',
    span: 'lg:col-span-2 lg:row-span-2',
  },
  {
    src: 'https://images.pexels.com/photos/337909/pexels-photo-337909.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&dpr=1',
    alt: 'Детейлинг кузова',
    label: 'Покраска',
    span: '',
  },
  {
    src: 'https://images.pexels.com/photos/1164778/pexels-photo-1164778.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&dpr=1',
    alt: 'Тонировка',
    label: 'Тонировка',
    span: '',
  },
  {
    src: 'https://images.pexels.com/photos/170811/pexels-photo-170811.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&dpr=1',
    alt: 'Оклейка плёнкой',
    label: 'Оклейка плёнкой',
    span: '',
  },
  {
    src: 'https://images.pexels.com/photos/2127733/pexels-photo-2127733.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&dpr=1',
    alt: 'Химчистка салона',
    label: 'Химчистка',
    span: '',
  },
];

export default function Gallery() {
  return (
    <section id="gallery" className="py-24 relative carbon-bg">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse at center, rgba(176,38,255,0.05) 0%, transparent 70%)' }}
      />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 mb-4">
            <div className="h-px w-12" style={{ background: 'linear-gradient(90deg, transparent, #b026ff)' }} />
            <span className="text-xs font-bold tracking-widest uppercase" style={{ color: '#b026ff' }}>
              Наши работы
            </span>
            <div className="h-px w-12" style={{ background: 'linear-gradient(90deg, #b026ff, transparent)' }} />
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
            Портфолио <span className="text-glow" style={{ color: '#b026ff' }}>работ</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-xl mx-auto">
            Каждый автомобиль выходит от нас с безупречным результатом
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 auto-rows-[260px]">
          {galleryImages.map((img, i) => (
            <div
              key={i}
              className={`relative overflow-hidden rounded-2xl group cursor-pointer ${img.span}`}
              style={{ border: '1px solid rgba(176,38,255,0.15)' }}
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                style={{ filter: 'brightness(0.75) saturate(0.8)' }}
              />
              {/* Hover overlay */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-400"
                style={{
                  background: 'linear-gradient(to top, rgba(176,38,255,0.6) 0%, transparent 60%)',
                }}
              />
              {/* Label */}
              <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                <span className="text-white font-bold text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {img.label}
                </span>
              </div>
              {/* Corner accent */}
              <div
                className="absolute top-3 right-3 w-2 h-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                style={{ background: '#b026ff', boxShadow: '0 0 8px #b026ff' }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
