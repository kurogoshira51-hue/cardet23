import { Paintbrush, Sun, Sparkles, Droplets, Layers, ArrowRight } from 'lucide-react';

const services = [
  {
    icon: Paintbrush,
    title: 'Покраска',
    subtitle: 'Кузовные работы',
    description: 'Полное перекрашивание, локальный ремонт сколов и царапин. Камерные технологии нанесения.',
    features: ['Подбор цвета', 'Антикоррозийная обработка', 'Полировка после покраски'],
    price: 'от 150 BYN',
  },
  {
    icon: Sun,
    title: 'Тонировка',
    subtitle: 'Солнечная защита',
    description: 'Профессиональная тонировка плёнками LLumar и SunTek. Любой уровень затемнения.',
    features: ['Плёнки премиум-класса', 'Точный крой по марке', 'Гарантия 3 года'],
    price: 'от 80 BYN',
  },
  {
    icon: Sparkles,
    title: 'Полировка',
    subtitle: 'Кристальный блеск',
    description: 'Трёхступенчатая машинная полировка. Устранение царапин, потёртостей и водяных пятен.',
    features: ['Абразивная полировка', 'Нанесение защитного воска', 'Керамическое покрытие'],
    price: 'от 120 BYN',
  },
  {
    icon: Droplets,
    title: 'Химчистка',
    subtitle: 'Глубокое очищение',
    description: 'Профессиональная химчистка салона с использованием безопасной европейской химии.',
    features: ['Удаление пятен и запахов', 'Очистка кожи и ткани', 'Антибактериальная обработка'],
    price: 'от 100 BYN',
  },
  {
    icon: Layers,
    title: 'Оклейка плёнкой',
    subtitle: 'Защита и стиль',
    description: 'Бронирование кузова полиуретановой плёнкой (PPF) и виниловый рестайлинг.',
    features: ['PPF бронирование', 'Мат/глянец/хром', 'Самовосстановление'],
    price: 'от 200 BYN',
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 relative" style={{ background: '#050507' }}>
      {/* Background accents */}
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{ background: 'linear-gradient(90deg, transparent, #b026ff44, transparent)' }}
      />
      <div
        className="absolute top-20 left-1/2 -translate-x-1/2 w-96 h-96 rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(176,38,255,0.08) 0%, transparent 70%)' }}
      />

      <div className="max-w-7xl mx-auto px-6">
        {/* Section header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 mb-4">
            <div
              className="h-px w-12"
              style={{ background: 'linear-gradient(90deg, transparent, #b026ff)' }}
            />
            <span className="text-xs font-bold tracking-widest uppercase" style={{ color: '#b026ff' }}>
              Что мы делаем
            </span>
            <div
              className="h-px w-12"
              style={{ background: 'linear-gradient(90deg, #b026ff, transparent)' }}
            />
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
            Наши <span className="text-glow" style={{ color: '#b026ff' }}>услуги</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Полный спектр детейлинговых услуг для любых автомобилей — от городских авто до суперкаров
          </p>
        </div>

        {/* Services grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => {
            const Icon = service.icon;
            return (
              <div
                key={i}
                className="service-card glass-dark rounded-2xl p-6 group cursor-pointer"
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                {/* Icon */}
                <div className="flex items-start justify-between mb-6">
                  <div
                    className="w-14 h-14 rounded-2xl flex items-center justify-center transition-all duration-300 group-hover:scale-110"
                    style={{
                      background: 'linear-gradient(135deg, rgba(176,38,255,0.2), rgba(176,38,255,0.05))',
                      border: '1px solid rgba(176,38,255,0.3)',
                    }}
                  >
                    <Icon size={24} style={{ color: '#b026ff' }} />
                  </div>
                  <span
                    className="text-xs font-bold px-3 py-1 rounded-full"
                    style={{
                      color: '#b026ff',
                      background: 'rgba(176,38,255,0.1)',
                      border: '1px solid rgba(176,38,255,0.2)',
                    }}
                  >
                    {service.price}
                  </span>
                </div>

                <p className="text-xs font-semibold tracking-widest uppercase text-gray-500 mb-1">
                  {service.subtitle}
                </p>
                <h3 className="text-xl font-black text-white mb-3">{service.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-5">{service.description}</p>

                {/* Features */}
                <ul className="flex flex-col gap-2 mb-6">
                  {service.features.map((feat, fi) => (
                    <li key={fi} className="flex items-center gap-2 text-sm text-gray-400">
                      <span
                        className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                        style={{ background: '#b026ff', boxShadow: '0 0 6px #b026ff' }}
                      />
                      {feat}
                    </li>
                  ))}
                </ul>

                <button
                  className="w-full flex items-center justify-center gap-2 py-3 rounded-xl text-sm font-semibold text-white transition-all duration-300 group-hover:bg-opacity-100"
                  style={{
                    background: 'rgba(176,38,255,0.1)',
                    border: '1px solid rgba(176,38,255,0.25)',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = 'rgba(176,38,255,0.25)';
                    e.currentTarget.style.borderColor = 'rgba(176,38,255,0.6)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = 'rgba(176,38,255,0.1)';
                    e.currentTarget.style.borderColor = 'rgba(176,38,255,0.25)';
                  }}
                >
                  Подробнее
                  <ArrowRight size={14} />
                </button>
              </div>
            );
          })}
        </div>
      </div>

      {/* Bottom fade */}
      <div
        className="absolute bottom-0 left-0 right-0 h-px"
        style={{ background: 'linear-gradient(90deg, transparent, #b026ff22, transparent)' }}
      />
    </section>
  );
}
