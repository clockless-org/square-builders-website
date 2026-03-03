import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useLang } from '../context/LangContext'

export default function Nav() {
  const { t, lang, toggleLang, langLabel } = useLang()
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  const links = [
    { label: t.nav.about, href: '#about' },
    { label: t.nav.services, href: '#services' },
    { label: t.nav.projects, href: '#projects' },
    { label: t.nav.testimonials, href: '#testimonials' },
    { label: t.nav.contact, href: '#contact' },
  ]

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? 'glass-nav py-2' : 'bg-transparent py-4'}`}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between px-6 lg:px-8 h-16">
          <a href="#" className="flex items-center gap-3 group">
            <img src="/images/logo.png" alt="Square Builders Group" className="w-10 h-10 object-contain transition-transform duration-500 group-hover:scale-110" />
            <div className="hidden sm:block">
              <span className="text-gradient-cream font-serif text-xl font-bold tracking-wide">Square Builders</span>
              <span className="block text-gold/80 text-[10px] tracking-[0.3em] uppercase font-sans mt-0.5">Group</span>
            </div>
          </a>

          <div className="hidden lg:flex items-center gap-8">
            {links.map((link) => (
              <a key={link.label} href={link.href} className="gold-underline text-cream/80 hover:text-cream text-sm font-medium tracking-wide transition-colors duration-200">
                {link.label}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-4">
            <button
              onClick={toggleLang}
              className="px-3 py-1.5 text-xs font-semibold tracking-wider text-gold border border-gold/30 rounded-sm hover:bg-gold/10 transition-all duration-300 uppercase"
            >
              {lang === 'en' ? '中文' : lang === 'zh' ? 'ES' : 'EN'}
            </button>
            <a href="#contact" className="hidden md:inline-flex items-center px-6 py-2.5 bg-gradient-to-r from-gold to-[#B8860B] text-dark font-semibold text-sm tracking-wide hover:shadow-[0_0_20px_rgba(212,175,55,0.4)] transition-all duration-300 rounded-sm">
              {t.nav.cta}
            </a>
            <button onClick={() => setMobileOpen(!mobileOpen)} className="lg:hidden text-cream p-2" aria-label="Toggle menu">
              <div className="w-6 flex flex-col gap-1.5">
                <span className={`block h-0.5 bg-current transition-all duration-300 ${mobileOpen ? 'rotate-45 translate-y-2' : ''}`} />
                <span className={`block h-0.5 bg-current transition-all duration-300 ${mobileOpen ? 'opacity-0' : ''}`} />
                <span className={`block h-0.5 bg-current transition-all duration-300 ${mobileOpen ? '-rotate-45 -translate-y-2' : ''}`} />
              </div>
            </button>
          </div>
        </div>
      </motion.nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} className="fixed inset-0 z-40 bg-dark/98 backdrop-blur-xl flex flex-col items-center justify-center gap-8 lg:hidden">
            {links.map((link, i) => (
              <motion.a key={link.label} href={link.href} onClick={() => setMobileOpen(false)} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }} className="text-cream text-3xl font-serif tracking-wide hover:text-gold transition-colors">
                {link.label}
              </motion.a>
            ))}
            <motion.button onClick={toggleLang} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.45 }} className="text-gold text-xl border border-gold/30 px-6 py-2 rounded-sm">
              {lang === 'en' ? '中文 / ES' : lang === 'zh' ? 'EN / ES' : 'EN / 中文'}
            </motion.button>
            <motion.a href="#contact" onClick={() => setMobileOpen(false)} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }} className="mt-6 px-10 py-4 bg-gradient-to-r from-gold to-[#B8860B] text-dark font-semibold tracking-wide rounded-sm">
              {t.nav.cta}
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
