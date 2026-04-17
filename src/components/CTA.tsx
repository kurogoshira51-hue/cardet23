import { ArrowRight, Zap } from 'lucide-react';

export default function CTA() {
  return (
    <section id="contact" className="py-24 relative overflow-hidden carbon-bg">
      {/* Glow effects */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse at 30% 50%, rgba(176,38,255,0.12) 0%, transparent 60%)' }}
      />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse at 70% 50%, rgba(176,38,255,0.08) 0%, transparent 60%)' }}
      />
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{ background: 'linear-gradient(90deg, transparent, #b026ff55, transparent)' }}
      />

      <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl mb-8 mx-auto"
          style={{
            background: 'linear-gradient(135deg, rgba(176,38,255,0.3), rgba(176,38,255,0.1))',
            border: '1px solid rgba(176,38,255,0.4)',
            boxShadow: '0 0 30px rgba(176,38,255,0.3)',
          }}
        >
          <Zap size={28} style={{ color: '#b026ff' }} fill="#b026ff" />
        </div>

        <h2 className="text-4xl md:text-6xl font-black text-white mb-6 leading-tight">
          Готовы преобразить
          <br />
          <span className="text-glow" style={{ color: '#b026ff' }}>ваш автомобиль?</span>
        </h2>
        <p className="text-gray-400 text-lg md:text-xl mb-10 max-w-2xl mx-auto leading-relaxed">
          Запишитесь прямо сейчас и получите бесплатную консультацию по детейлингу вашего авто
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="https://wa.me/375000000000?text=Хочу%20записаться%20на%20детейлинг!"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-neon inline-flex items-center gap-3 px-10 py-4 rounded-2xl text-base font-bold text-white"
          >
            Записаться в WhatsApp
            <ArrowRight size={18} />
          </a>
          <a
            href="tel:+375000000000"
            className="inline-flex items-center gap-3 px-10 py-4 rounded-2xl text-base font-semibold text-gray-300 hover:text-white transition-colors neon-border"
            style={{ background: 'rgba(255,255,255,0.02)' }}
          >
            Позвонить нам
          </a>
        </div>

        <p className="text-gray-600 text-sm mt-8">
          Витебск · ГСК 17, место 218 · Работаем ежедневно
        </p>
      </div>
    </section>
  );
}
