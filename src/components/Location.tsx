import { MapPin, Clock, Phone, Navigation, Car } from 'lucide-react';

const info = [
  { icon: MapPin, label: 'Адрес', value: 'ГСК 17, место 218, Витебск' },
  { icon: Clock, label: 'Часы работы', value: 'Пн–Пт: 9:00–19:00 / Сб–Вс: 10:00–17:00' },
  { icon: Phone, label: 'Телефон', value: '+375 (XX) XXX-XX-XX' },
  { icon: Navigation, label: 'Ориентир', value: 'Рядом с автовокзалом Витебска' },
];

export default function Location() {
  return (
    <section id="location" className="py-24 relative" style={{ background: '#050507' }}>
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{ background: 'linear-gradient(90deg, transparent, #b026ff44, transparent)' }}
      />
      <div
        className="absolute bottom-0 left-0 right-0 h-px"
        style={{ background: 'linear-gradient(90deg, transparent, #b026ff22, transparent)' }}
      />

      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 mb-4">
            <div className="h-px w-12" style={{ background: 'linear-gradient(90deg, transparent, #b026ff)' }} />
            <span className="text-xs font-bold tracking-widest uppercase" style={{ color: '#b026ff' }}>
              Как нас найти
            </span>
            <div className="h-px w-12" style={{ background: 'linear-gradient(90deg, #b026ff, transparent)' }} />
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
            Наше <span className="text-glow" style={{ color: '#b026ff' }}>расположение</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-xl mx-auto">
            Находимся в гаражном кооперативе в удобной точке города
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          {/* Map placeholder */}
          <div
            className="relative rounded-3xl overflow-hidden min-h-[420px] group"
            style={{ border: '1px solid rgba(176,38,255,0.25)' }}
          >
            {/* Stylized map background */}
            <div
              className="absolute inset-0 grid-overlay"
              style={{ background: '#0a0a14' }}
            />
            {/* Purple glow center */}
            <div
              className="absolute inset-0"
              style={{ background: 'radial-gradient(circle at 50% 50%, rgba(176,38,255,0.12) 0%, transparent 60%)' }}
            />

            {/* Map grid lines */}
            <svg className="absolute inset-0 w-full h-full opacity-20" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern id="mapgrid" width="40" height="40" patternUnits="userSpaceOnUse">
                  <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#b026ff" strokeWidth="0.5" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#mapgrid)" />
              {/* Horizontal roads */}
              <line x1="0" y1="30%" x2="100%" y2="30%" stroke="#b026ff" strokeWidth="2" opacity="0.3" />
              <line x1="0" y1="55%" x2="100%" y2="55%" stroke="#b026ff" strokeWidth="1" opacity="0.2" />
              <line x1="0" y1="75%" x2="100%" y2="75%" stroke="#b026ff" strokeWidth="1" opacity="0.2" />
              {/* Vertical roads */}
              <line x1="25%" y1="0" x2="25%" y2="100%" stroke="#b026ff" strokeWidth="2" opacity="0.3" />
              <line x1="60%" y1="0" x2="60%" y2="100%" stroke="#b026ff" strokeWidth="1" opacity="0.2" />
              <line x1="80%" y1="0" x2="80%" y2="100%" stroke="#b026ff" strokeWidth="1" opacity="0.15" />
            </svg>

            {/* Location pin */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="flex flex-col items-center animate-float">
                <div
                  className="w-16 h-16 rounded-full flex items-center justify-center mb-3 glow-purple-strong"
                  style={{
                    background: 'linear-gradient(135deg, #b026ff, #7a1ab8)',
                  }}
                >
                  <MapPin size={28} fill="white" className="text-white" />
                </div>
                <div
                  className="glass-dark rounded-2xl px-5 py-3 text-center"
                  style={{ boxShadow: '0 0 20px rgba(176,38,255,0.3)' }}
                >
                  <p className="text-white font-black text-sm">ГСК 17</p>
                  <p className="text-gray-400 text-xs mt-0.5">Место 218</p>
                </div>
                {/* Ping animation */}
                <div
                  className="absolute top-0 w-16 h-16 rounded-full animate-ping"
                  style={{ background: 'rgba(176,38,255,0.2)' }}
                />
              </div>
            </div>

            {/* Corner decorations */}
            <div
              className="absolute top-4 left-4 w-8 h-8"
              style={{
                borderTop: '2px solid #b026ff',
                borderLeft: '2px solid #b026ff',
              }}
            />
            <div
              className="absolute top-4 right-4 w-8 h-8"
              style={{
                borderTop: '2px solid #b026ff',
                borderRight: '2px solid #b026ff',
              }}
            />
            <div
              className="absolute bottom-4 left-4 w-8 h-8"
              style={{
                borderBottom: '2px solid #b026ff',
                borderLeft: '2px solid #b026ff',
              }}
            />
            <div
              className="absolute bottom-4 right-4 w-8 h-8"
              style={{
                borderBottom: '2px solid #b026ff',
                borderRight: '2px solid #b026ff',
              }}
            />

            {/* Label */}
            <div className="absolute top-6 left-1/2 -translate-x-1/2">
              <span
                className="text-xs font-bold tracking-widest uppercase px-3 py-1 rounded-full"
                style={{ color: '#b026ff', background: 'rgba(176,38,255,0.1)', border: '1px solid rgba(176,38,255,0.3)' }}
              >
                Витебск
              </span>
            </div>
          </div>

          {/* Info cards */}
          <div className="flex flex-col gap-4">
            {info.map(({ icon: Icon, label, value }, i) => (
              <div
                key={i}
                className="glass-dark rounded-2xl p-5 flex items-start gap-4 neon-border group"
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 transition-all duration-300 group-hover:scale-110"
                  style={{ background: 'rgba(176,38,255,0.15)', border: '1px solid rgba(176,38,255,0.3)' }}
                >
                  <Icon size={20} style={{ color: '#b026ff' }} />
                </div>
                <div>
                  <p className="text-xs text-gray-500 font-semibold uppercase tracking-wider mb-1">{label}</p>
                  <p className="text-white font-semibold text-sm leading-relaxed">{value}</p>
                </div>
              </div>
            ))}

            {/* CTA */}
            <div
              className="rounded-2xl p-6 relative overflow-hidden"
              style={{
                background: 'linear-gradient(135deg, rgba(176,38,255,0.15) 0%, rgba(176,38,255,0.05) 100%)',
                border: '1px solid rgba(176,38,255,0.35)',
              }}
            >
              <div
                className="absolute -right-6 -top-6 w-32 h-32 rounded-full pointer-events-none"
                style={{ background: 'radial-gradient(circle, rgba(176,38,255,0.2) 0%, transparent 70%)' }}
              />
              <div className="flex items-center gap-3 mb-3">
                <Car size={20} style={{ color: '#b026ff' }} />
                <p className="text-white font-bold">Предварительная запись</p>
              </div>
              <p className="text-gray-400 text-sm mb-4">
                Запишитесь заранее — выберите удобное время без ожидания
              </p>
              <a
                href="https://wa.me/375000000000"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-neon inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-bold text-white w-full justify-center"
              >
                Записаться в WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
