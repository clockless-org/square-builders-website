import { useState } from 'react'
import { motion } from 'framer-motion'
import { useLang } from '../context/LangContext'

export default function Contact() {
  const { t } = useLang()
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (email) setSubmitted(true)
  }

  return (
    <section id="contact" className="py-32 md:py-48 bg-[var(--color-navy)] relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-gold/5 rounded-full blur-[80px] md:blur-[150px] -translate-y-1/2 translate-x-1/2 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-dark rounded-full blur-[50px] md:blur-[100px] translate-y-1/3 -translate-x-1/3 pointer-events-none" />

      <div className="max-w-4xl mx-auto px-8 lg:px-12 relative z-10">
        <div className="text-center">
          <motion.span initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-gold text-sm tracking-[0.4em] uppercase font-semibold block mb-6">{t.contact.tag}</motion.span>
          <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }} className="font-serif text-5xl md:text-6xl lg:text-7xl font-bold mb-8 tracking-tight text-gradient-cream">{t.contact.title}</motion.h2>
          <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.2 }} className="text-cream/60 text-lg md:text-xl max-w-2xl mx-auto mb-16 leading-relaxed font-light">{t.contact.desc}</motion.p>

          <motion.form initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.3 }} onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-2xl mx-auto mb-20 relative p-2 md:p-3 glass-panel rounded-lg">
            {!submitted ? (
              <>
                <div className="flex-1 relative">
                  <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder={t.contact.placeholder} required className="w-full h-full px-8 py-5 md:py-4 bg-transparent text-cream placeholder:text-cream/30 focus:outline-none transition-all duration-300 font-light text-lg rounded-md" />
                  <div className="absolute inset-0 bg-dark/40 rounded-md -z-10 shadow-inner" />
                  <div className="absolute inset-0 border border-gold/10 rounded-md pointer-events-none transition-colors duration-300 peer-focus:border-gold/50" />
                </div>
                <button type="submit" className="px-10 py-5 bg-gradient-to-r from-gold to-[#B8860B] text-dark font-bold tracking-[0.1em] uppercase text-sm transition-all duration-300 whitespace-nowrap rounded-md hover:shadow-[0_0_30px_rgba(212,175,55,0.4)] hover:-translate-y-0.5">{t.contact.cta}</button>
              </>
            ) : (
              <div className="w-full text-center py-6">
                <span className="text-gradient-gold font-serif text-3xl font-bold drop-shadow-lg">{t.contact.thanks}</span>
              </div>
            )}
          </motion.form>

          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.4 }} className="flex flex-col sm:flex-row items-center justify-center gap-10 text-cream/70 mb-10 font-light">
            <div className="flex items-center gap-4 group">
              <div className="w-10 h-10 flex flex-col justify-center items-center rounded-full bg-white/5 border border-white/10 group-hover:bg-gold/10 group-hover:border-gold/30 transition-all duration-300">
                <svg className="w-4 h-4 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" /></svg>
              </div>
              <a href="tel:+16692229990" className="hover:text-gold transition-colors duration-300 text-lg">(669) 222-9990</a>
            </div>
            <div className="flex items-center gap-4 group">
              <div className="w-10 h-10 flex flex-col justify-center items-center rounded-full bg-white/5 border border-white/10 group-hover:bg-gold/10 group-hover:border-gold/30 transition-all duration-300">
                <svg className="w-4 h-4 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" /></svg>
              </div>
              <a href="mailto:info@squarebuildersgroup.com" className="hover:text-gold transition-colors duration-300 text-lg">info@squarebuildersgroup.com</a>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.5 }} className="flex items-center justify-center gap-3 text-cream/40 font-medium group">
            <svg className="w-4 h-4 text-gold/70 group-hover:text-gold transition-colors duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" /><path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" /></svg>
            <span className="tracking-wide text-sm md:text-base">920 Saratoga Ave, Ste 107, San Jose, CA 95129</span>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
