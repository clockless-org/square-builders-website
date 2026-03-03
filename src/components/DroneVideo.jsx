import { motion } from 'framer-motion'
import { useLang } from '../context/LangContext'

const i18n = {
  en: { tag: 'Aerial View', title: 'See Our Work From Above' },
  zh: { tag: '航拍视角', title: '从空中俯瞰我们的作品' },
  es: { tag: 'Vista Aérea', title: 'Vea Nuestro Trabajo Desde Arriba' },
}

export default function DroneVideo() {
  const { lang } = useLang()
  const t = i18n[lang] || i18n.en

  return (
    <section className="relative bg-dark overflow-hidden">
      <div className="max-w-7xl mx-auto px-8 lg:px-12 pt-20 pb-4 text-center">
        <motion.span
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-gold text-sm tracking-[0.4em] uppercase font-semibold block mb-4"
        >{t.tag}</motion.span>
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="font-serif text-4xl md:text-5xl font-bold text-gradient-cream mb-10"
        >{t.title}</motion.h2>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="relative max-w-7xl mx-auto px-8 lg:px-12 pb-20"
      >
        <div className="relative rounded-2xl overflow-hidden glow-border aspect-video">
          <video
            autoPlay
            muted
            loop
            playsInline
            poster="/images/hero-main.jpg"
            className="w-full h-full object-cover"
          >
            <source src="/images/hero-video.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-t from-dark/30 via-transparent to-dark/20 pointer-events-none" />
        </div>
      </motion.div>
    </section>
  )
}
