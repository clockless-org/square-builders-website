import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const faqs = [
  {
    q: 'How long does a typical project take?',
    a: 'Project timelines vary based on scope. A kitchen remodel typically takes 8-12 weeks, while new construction can range from 10-18 months. We provide detailed timelines during consultation and keep you updated throughout.',
  },
  {
    q: 'Do you handle permits and design?',
    a: 'Absolutely. We offer true design-build service, managing everything from initial architectural design through permitting, construction, and final inspection. One team, one point of contact, zero hassle.',
  },
  {
    q: 'What areas do you serve?',
    a: 'We serve the greater Bay Area with a focus on Palo Alto, Saratoga, Sunnyvale, Mountain View, and San Jose. For exceptional projects, we consider locations throughout Silicon Valley.',
  },
  {
    q: 'How does your pricing work?',
    a: 'We provide transparent, detailed estimates after an initial consultation and site visit. Our pricing is competitive and reflects the premium quality materials and craftsmanship we deliver. No hidden fees, no surprises.',
  },
  {
    q: 'Can I see examples of your past work?',
    a: 'Yes! Beyond our featured projects above, we maintain a comprehensive portfolio and can arrange visits to completed projects with client permission. Schedule a consultation and we\'ll walk you through relevant examples.',
  },
]

function AccordionItem({ faq, isOpen, toggle }) {
  return (
    <div className="border-b border-white/10 last:border-0 relative overflow-hidden group">
      {/* Background glow on hover */}
      <div className="absolute inset-0 bg-gradient-to-r from-gold/0 via-gold/5 to-gold/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

      <button
        onClick={toggle}
        className="w-full flex items-center justify-between py-8 text-left relative z-10"
      >
        <span className="font-serif text-cream text-xl md:text-2xl pr-8 group-hover:text-gold transition-colors duration-300 drop-shadow-sm">
          {faq.q}
        </span>
        <motion.div
          animate={{ rotate: isOpen ? 45 : 0 }}
          transition={{ duration: 0.4, ease: "backOut" }}
          className="text-gold w-8 h-8 flex items-center justify-center shrink-0 border border-gold/30 rounded-full bg-white/5"
        >
          <span className="text-xl font-light leading-none relative -top-[1px]">+</span>
        </motion.div>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: 'easeInOut' }}
            className="overflow-hidden"
          >
            <p className="pb-8 text-cream/70 text-lg leading-relaxed max-w-3xl pr-12 relative z-10">
              {faq.a}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default function FAQ() {
  const [openIdx, setOpenIdx] = useState(null)

  return (
    <section className="py-24 md:py-32 bg-dark">
      <div className="max-w-4xl mx-auto px-8 lg:px-12">
        <div className="text-center mb-20">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-gold text-sm tracking-[0.4em] uppercase font-semibold block mb-4"
          >
            Common Questions
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-serif text-5xl md:text-6xl font-bold text-gradient-cream"
          >
            Frequently Asked
          </motion.h2>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="glass-panel p-6 md:p-10 rounded-2xl"
        >
          {faqs.map((faq, i) => (
            <AccordionItem
              key={i}
              faq={faq}
              isOpen={openIdx === i}
              toggle={() => setOpenIdx(openIdx === i ? null : i)}
            />
          ))}
        </motion.div>
      </div>
    </section>
  )
}
