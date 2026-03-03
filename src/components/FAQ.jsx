import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useLang } from '../context/LangContext'

function AccordionItem({ faq, isOpen, toggle }) {
  return (
    <div className="border-b border-white/10 last:border-0 relative overflow-hidden group">
      <div className="absolute inset-0 bg-gradient-to-r from-gold/0 via-gold/5 to-gold/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
      <button onClick={toggle} className="w-full flex items-center justify-between py-8 text-left relative z-10">
        <span className="font-serif text-cream text-xl md:text-2xl pr-8 group-hover:text-gold transition-colors duration-300 drop-shadow-sm">{faq.q}</span>
        <motion.div animate={{ rotate: isOpen ? 45 : 0 }} transition={{ duration: 0.4, ease: "backOut" }} className="text-gold w-8 h-8 flex items-center justify-center shrink-0 border border-gold/30 rounded-full bg-white/5">
          <span className="text-xl font-light leading-none relative -top-[1px]">+</span>
        </motion.div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.4, ease: 'easeInOut' }} className="overflow-hidden">
            <p className="pb-8 text-cream/70 text-lg leading-relaxed max-w-3xl pr-12 relative z-10">{faq.a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default function FAQ() {
  const { t } = useLang()
  const [openIdx, setOpenIdx] = useState(null)

  return (
    <section className="py-24 md:py-32 bg-dark">
      <div className="max-w-4xl mx-auto px-8 lg:px-12">
        <div className="text-center mb-20">
          <motion.span initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-gold text-sm tracking-[0.4em] uppercase font-semibold block mb-4">{t.faq.tag}</motion.span>
          <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }} className="font-serif text-5xl md:text-6xl font-bold text-gradient-cream">{t.faq.title}</motion.h2>
        </div>
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="glass-panel p-6 md:p-10 rounded-2xl">
          {t.faq.items.map((faq, i) => (
            <AccordionItem key={i} faq={faq} isOpen={openIdx === i} toggle={() => setOpenIdx(openIdx === i ? null : i)} />
          ))}
        </motion.div>
      </div>
    </section>
  )
}
