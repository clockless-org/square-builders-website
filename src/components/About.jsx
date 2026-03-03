import { motion } from 'framer-motion'
import { useLang } from '../context/LangContext'

export default function About() {
  const { t } = useLang()

  return (
    <section id="about" className="py-32 md:py-40 bg-[var(--color-navy)] overflow-hidden relative">
      <div className="absolute top-1/4 left-0 w-[400px] h-[400px] bg-gold/5 rounded-full blur-[50px] md:blur-[100px] -translate-x-1/2" />
      <div className="absolute bottom-1/4 right-0 w-[500px] h-[500px] bg-navy-light/30 rounded-full blur-[60px] md:blur-[120px] translate-x-1/3" />

      <div className="max-w-6xl mx-auto px-8 lg:px-12 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="relative pl-10 border-l-2 border-gold/40 shadow-[-10px_0_20px_rgba(212,175,55,0.05)]">
            <span className="text-gradient-gold font-serif text-[8rem] leading-none block -mb-10 -ml-4 select-none opacity-40">&ldquo;</span>
            <p className="font-serif text-cream text-2xl md:text-3xl italic leading-[1.6] mb-8">{t.about.quote}</p>
            <div>
              <div className="text-cream font-bold text-lg">{t.about.quoteName}</div>
              <div className="text-gold tracking-[0.2em] text-xs uppercase mt-1">{t.about.quoteTitle}</div>
            </div>
          </motion.div>

          <div className="space-y-8">
            <motion.span initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-gold text-sm tracking-[0.4em] uppercase font-semibold block">{t.about.tag}</motion.span>
            <motion.h2 initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }} className="font-serif text-5xl md:text-6xl font-bold leading-tight text-gradient-cream">{t.about.title}<br />{t.about.titleBreak}</motion.h2>
            <motion.p initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.2 }} className="text-cream/70 text-lg leading-relaxed">{t.about.p1}</motion.p>
            <motion.p initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.3 }} className="text-cream/70 text-lg leading-relaxed">{t.about.p2}</motion.p>
            <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.4 }} className="space-y-6 pt-4">
              {t.about.features.map((item) => (
                <div key={item.title} className="flex items-start gap-5 p-4 rounded-lg hover:bg-white/5 transition-colors duration-300 border border-transparent hover:border-gold/10">
                  <div className="w-2 h-2 bg-gradient-to-br from-gold to-[#B8860B] rotate-45 shrink-0 mt-2 shadow-[0_0_10px_rgba(212,175,55,0.5)]" />
                  <div>
                    <span className="text-cream font-bold text-base">{item.title}</span>
                    <p className="text-cream/50 text-sm mt-1.5 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
