import { MessageCircle } from 'lucide-react';

export default function FloatingWhatsApp() {
  return (
    <a
      href="https://wa.me/375000000000?text=Здравствуйте!%20Хочу%20записаться%20на%20детейлинг."
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-8 right-8 z-50 flex items-center gap-3 group"
      aria-label="WhatsApp"
    >
      {/* Tooltip */}
      <div
        className="glass-dark rounded-xl px-4 py-2 opacity-0 group-hover:opacity-100 translate-x-2 group-hover:translate-x-0 transition-all duration-300 pointer-events-none"
        style={{ boxShadow: '0 0 15px rgba(176,38,255,0.3)' }}
      >
        <p className="text-white text-sm font-semibold whitespace-nowrap">Предварительная запись</p>
      </div>

      {/* Button */}
      <div
        className="w-16 h-16 rounded-full flex items-center justify-center relative animate-float"
        style={{
          background: 'linear-gradient(135deg, #b026ff, #7a1ab8)',
          boxShadow: '0 0 25px rgba(176,38,255,0.6), 0 0 50px rgba(176,38,255,0.3)',
        }}
      >
        <MessageCircle size={26} fill="white" className="text-white" />
        {/* Ping ring */}
        <span
          className="absolute inset-0 rounded-full animate-ping"
          style={{ background: 'rgba(176,38,255,0.4)' }}
        />
      </div>
    </a>
  );
}
