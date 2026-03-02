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
    <div className="border-b border-navy/10">
      <button
        onClick={toggle}
        className="w-full flex items-center justify-between py-6 text-left group"
      >
        <span className="font-serif text-navy text-lg md:text-xl pr-8 group-hover:text-gold transition-colors duration-200">
          {faq.q}
        </span>
        <motion.span
          animate={{ rotate: isOpen ? 45 : 0 }}
          transition={{ duration: 0.3 }}
          className="text-gold text-2xl shrink-0 leading-none"
        >
          +
        </motion.span>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="overflow-hidden"
          >
            <p className="pb-6 text-charcoal/70 leading-relaxed max-w-3xl">
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
    <section className="py-24 md:py-32 bg-cream">
      <div className="max-w-3xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-gold text-sm tracking-[0.3em] uppercase font-medium"
          >
            Common Questions
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-serif text-navy text-3xl md:text-4xl lg:text-5xl font-bold mt-4"
          >
            Frequently Asked
          </motion.h2>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="border-t border-navy/10"
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
