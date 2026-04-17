import { ArrowRight, Star, Shield, Clock } from 'lucide-react';

const stats = [
  { value: '500+', label: 'Автомобилей' },
  { value: '5★', label: 'Рейтинг' },
  { value: '8 лет', label: 'Опыта' },
];

export default function Hero() {
  return (
    <section
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{ background: '#050507' }}
    >
      {/* Background image with overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.pexels.com/photos/3802510/pexels-photo-3802510.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&dpr=1"
          alt="Luxury car"
          className="w-full h-full object-cover"
          style={{ opacity: 0.2 }}
        />
        <div
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(135deg, rgba(5,5,7,0.97) 0%, rgba(5,5,7,0.7) 50%, rgba(176,38,255,0.08) 100%)',
          }}
        />
        {/* Grid overlay */}
        <div className="absolute inset-0 grid-overlay opacity-60" />
        {/* Purple glow spots */}
        <div
          className="absolute top-1/3 right-1/4 w-96 h-96 rounded-full pointer-events-none"
          style={{
            background: 'radial-gradient(circle, rgba(176,38,255,0.15) 0%, transparent 70%)',
          }}
        />
        <div
          className="absolute bottom-1/4 left-1/3 w-64 h-64 rounded-full pointer-events-none"
          style={{
            background: 'radial-gradient(circle, rgba(176,38,255,0.1) 0%, transparent 70%)',
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-28 pb-20 w-full">
        <div className="max-w-3xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 mb-8">
            <div className="glass neon-border rounded-full px-4 py-1.5 flex items-center gap-2">
              <span
                className="w-2 h-2 rounded-full animate-pulse"
                style={{ background: '#b026ff', boxShadow: '0 0 6px #b026ff' }}
              />
              <span className="text-xs font-semibold tracking-widest uppercase text-gray-300">
                Премиум детейлинг — Витебск
              </span>
            </div>
          </div>

          {/* Main heading */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-black leading-tight tracking-tight mb-6">
            <span className="text-white">TTR</span>
            <br />
            <span
              className="text-glow"
              style={{ color: '#b026ff' }}
            >
              Detailing
            </span>
            <br />
            <span className="text-white text-4xl md:text-5xl lg:text-6xl font-bold">
              Профессиональный
            </span>
            <br />
            <span className="text-gray-300 text-3xl md:text-4xl lg:text-5xl font-semibold">
              уход за вашим авто
            </span>
          </h1>

          <p className="text-lg md:text-xl text-gray-400 mb-10 max-w-xl leading-relaxed font-light">
            Покраска, полировка, химчистка и оклейка плёнкой — <span className="text-white font-medium">на высшем уровне в Витебске</span>
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mb-16">
            <a
              href="#contact"
              className="btn-neon inline-flex items-center justify-center gap-3 px-8 py-4 rounded-2xl text-base font-bold text-white"
            >
              Рассчитать стоимость
              <ArrowRight size={18} />
            </a>
            <a
              href="#services"
              className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-2xl text-base font-semibold text-gray-300 hover:text-white transition-colors neon-border"
              style={{ background: 'rgba(255,255,255,0.03)' }}
            >
              Наши услуги
            </a>
          </div>

          {/* Stats */}
          <div className="flex flex-wrap gap-8">
            {stats.map((stat, i) => (
              <div key={i} className="flex flex-col">
                <span
                  className="text-3xl font-black text-glow-sm"
                  style={{ color: '#b026ff' }}
                >
                  {stat.value}
                </span>
                <span className="text-sm text-gray-500 mt-1 font-medium">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Floating trust badges */}
        <div className="absolute bottom-12 right-6 hidden lg:flex flex-col gap-3">
          {[
            { icon: Shield, text: 'Гарантия качества' },
            { icon: Star, text: 'Топ мастера Витебска' },
            { icon: Clock, text: 'Срочный детейлинг' },
          ].map(({ icon: Icon, text }, i) => (
            <div
              key={i}
              className="glass-dark rounded-xl px-4 py-3 flex items-center gap-3 animate-float"
              style={{ animationDelay: `${i * 0.8}s` }}
            >
              <Icon size={16} style={{ color: '#b026ff' }} />
              <span className="text-sm text-gray-300 font-medium">{text}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom fade */}
      <div
        className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none"
        style={{ background: 'linear-gradient(to bottom, transparent, #050507)' }}
      />
    </section>
  );
}
