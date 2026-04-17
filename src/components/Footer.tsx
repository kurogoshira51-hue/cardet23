import { Zap, MapPin, Phone, Clock } from 'lucide-react';

const links = [
  { label: 'Услуги', href: '#services' },
  { label: 'Работы', href: '#gallery' },
  { label: 'Локация', href: '#location' },
  { label: 'Записаться', href: '#contact' },
];

const services = ['Покраска', 'Тонировка', 'Полировка', 'Химчистка', 'Оклейка плёнкой'];

export default function Footer() {
  return (
    <footer
      className="relative pt-16 pb-8"
      style={{
        background: '#030305',
        borderTop: '1px solid rgba(176,38,255,0.15)',
      }}
    >
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{ background: 'linear-gradient(90deg, transparent, #b026ff55, transparent)' }}
      />

      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div
                className="w-9 h-9 rounded-lg flex items-center justify-center"
                style={{ background: 'linear-gradient(135deg,#b026ff,#7a1ab8)', boxShadow: '0 0 15px #b026ff44' }}
              >
                <Zap size={18} fill="white" className="text-white" />
              </div>
              <span className="text-xl font-black text-white">
                TTR<span style={{ color: '#b026ff' }}>.</span>
              </span>
            </div>
            <p className="text-gray-500 text-sm leading-relaxed">
              Профессиональный детейлинг в Витебске. Качество, которое говорит само за себя.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-white font-bold text-sm tracking-wider uppercase mb-4">Навигация</h4>
            <ul className="flex flex-col gap-3">
              {links.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="text-gray-500 hover:text-white transition-colors text-sm">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-bold text-sm tracking-wider uppercase mb-4">Услуги</h4>
            <ul className="flex flex-col gap-3">
              {services.map((s) => (
                <li key={s} className="text-gray-500 text-sm flex items-center gap-2">
                  <span
                    className="w-1 h-1 rounded-full flex-shrink-0"
                    style={{ background: '#b026ff' }}
                  />
                  {s}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-bold text-sm tracking-wider uppercase mb-4">Контакты</h4>
            <ul className="flex flex-col gap-4">
              {[
                { icon: MapPin, text: 'ГСК 17, место 218, Витебск' },
                { icon: Phone, text: '+375 (XX) XXX-XX-XX' },
                { icon: Clock, text: 'Пн–Вс: 9:00–19:00' },
              ].map(({ icon: Icon, text }, i) => (
                <li key={i} className="flex items-start gap-3">
                  <Icon size={14} className="mt-0.5 flex-shrink-0" style={{ color: '#b026ff' }} />
                  <span className="text-gray-500 text-sm">{text}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4"
          style={{ borderTop: '1px solid rgba(255,255,255,0.05)' }}
        >
          <p className="text-gray-600 text-sm">
            © 2024 TTR Detailing — Витебск. Все права защищены.
          </p>
          <p className="text-gray-700 text-xs">
            Профессиональный уход за автомобилями
          </p>
        </div>
      </div>
    </footer>
  );
}
