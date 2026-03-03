import { motion } from 'framer-motion'
import { useLang } from '../context/LangContext'

export default function Hero() {
  const { t } = useLang()

  return (
    <section className="relative h-screen min-h-[700px] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <motion.img initial={{ scale: 1.1 }} animate={{ scale: 1 }} transition={{ duration: 10, ease: 'easeOut' }} src="/images/hero-main.jpg" alt="Square Builders Group construction site" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-dark/90 via-dark/60 to-dark/95" />
      </div>

      <div className="absolute inset-0 overflow-hidden">
        <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
          <defs>
            <linearGradient id="goldLine" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#D4AF37" stopOpacity="0" />
              <stop offset="50%" stopColor="#D4AF37" stopOpacity="0.4" />
              <stop offset="100%" stopColor="#D4AF37" stopOpacity="0" />
            </linearGradient>
          </defs>
          {[...Array(8)].map((_, i) => (
            <motion.line key={`d${i}`} x1={`${-10 + i * 20}%`} y1="0%" x2={`${10 + i * 20}%`} y2="100%" stroke="url(#goldLine)" strokeWidth="1" initial={{ pathLength: 0, opacity: 0 }} animate={{ pathLength: 1, opacity: 1 }} transition={{ duration: 2.5, delay: i * 0.2, ease: 'easeInOut' }} />
          ))}
          {[...Array(4)].map((_, i) => (
            <motion.line key={`h${i}`} x1="0%" y1={`${20 + i * 20}%`} x2="100%" y2={`${20 + i * 20}%`} stroke="#D4AF37" strokeWidth="0.5" strokeOpacity="0.15" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 3.5, delay: 1 + i * 0.3 }} />
          ))}
        </svg>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] bg-gold/5 rounded-full blur-[100px]" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.5 }}>
          <span className="inline-block text-gold text-sm tracking-[0.4em] uppercase font-sans font-semibold mb-6">{t.hero.badge}</span>
        </motion.div>
        <motion.h1 initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.8 }} className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold leading-[1.1] mb-8 drop-shadow-2xl">
          <span className="text-gradient-cream">{t.hero.title1}</span><br />
          <span className="text-gradient-gold drop-shadow-lg">{t.hero.title2}</span>
        </motion.h1>
        <motion.p initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 1.1 }} className="text-cream/70 text-lg md:text-xl max-w-2xl mx-auto mb-12 font-light leading-relaxed">{t.hero.desc}</motion.p>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 1.4 }} className="flex flex-col sm:flex-row gap-6 justify-center">
          <a href="#contact" className="px-10 py-4 bg-gradient-to-r from-gold to-[#B8860B] text-dark font-bold text-base tracking-wider hover:shadow-[0_0_30px_rgba(212,175,55,0.4)] hover:-translate-y-1 transition-all duration-300 rounded-sm">{t.hero.cta1}</a>
          <a href="#projects" className="px-10 py-4 border border-cream/20 text-cream font-medium text-base tracking-wider hover:border-gold hover:text-gold hover:shadow-[0_0_30px_rgba(201,168,76,0.15)] hover:-translate-y-1 transition-all duration-300 rounded-sm glass-panel">{t.hero.cta2}</a>
        </motion.div>
      </div>

      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2 }} className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
        <span className="text-cream/50 text-xs tracking-[0.2em] uppercase font-medium">{t.hero.scroll}</span>
        <motion.div animate={{ y: [0, 8, 0] }} transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }} className="w-5 h-8 border border-cream/30 rounded-full flex justify-center pt-1.5">
          <div className="w-1 h-1.5 bg-gold rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  )
}
