import { useLang } from '../context/LangContext'

export default function Footer() {
  const { t } = useLang()
  const year = new Date().getFullYear()

  return (
    <footer className="bg-dark relative">
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-dark via-gold/20 to-dark" />
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 mb-16">
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <img src="/images/logo.png" alt="Square Builders Group" className="w-14 h-14 object-contain" />
              <div>
                <span className="block text-gradient-cream font-serif font-bold text-lg leading-none">Square Builders</span>
                <span className="block text-gold/80 text-[10px] tracking-[0.3em] uppercase mt-1">Group</span>
              </div>
            </div>
            <p className="text-cream/50 text-sm leading-relaxed font-light">{t.footer.desc}</p>
          </div>

          <div>
            <h4 className="text-gold text-xs tracking-[0.2em] uppercase font-semibold mb-6">{t.footer.servicesTitle}</h4>
            <ul className="space-y-3">
              {t.footer.serviceItems.map((item) => (
                <li key={item}><a href="#services" className="text-cream/50 text-sm font-light hover:text-gold transition-colors duration-300">{item}</a></li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-gold text-xs tracking-[0.2em] uppercase font-semibold mb-6">{t.footer.areasTitle}</h4>
            <ul className="space-y-3">
              {['Palo Alto', 'Saratoga', 'Sunnyvale', 'Mountain View', 'San Jose'].map((item) => (
                <li key={item} className="text-cream/50 text-sm font-light hover:text-gold cursor-default transition-colors duration-300">{item}</li>
              ))}
              <li className="text-cream/30 text-sm font-light italic">{t.footer.moreAreas}</li>
            </ul>
          </div>

          <div>
            <h4 className="text-gold text-xs tracking-[0.2em] uppercase font-semibold mb-6">{t.footer.contactTitle}</h4>
            <ul className="space-y-3 text-cream/50 text-sm font-light">
              <li><a href="tel:+16692229990" className="hover:text-gold transition-colors duration-300 flex items-center gap-2">(669) 222-9990</a></li>
              <li><a href="mailto:info@squarebuildersgroup.com" className="hover:text-gold transition-colors duration-300 flex items-center gap-2">info@squarebuildersgroup.com</a></li>
              <li className="pt-2">920 Saratoga Ave, Ste 107</li>
              <li>San Jose, CA 95129</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-cream/30 text-xs tracking-wide">&copy; {year} {t.footer.copyright}</p>
          <div className="flex gap-8">
            {t.footer.links.map((item) => (
              <a key={item} href="#" className="text-cream/30 text-xs tracking-wide hover:text-gold transition-colors duration-300">{item}</a>
            ))}
          </div>
        </div>

        <div className="absolute bottom-4 right-6 text-cream/20 text-[10px] font-mono tracking-wider">{__GIT_HASH__}</div>
      </div>
    </footer>
  )
}
