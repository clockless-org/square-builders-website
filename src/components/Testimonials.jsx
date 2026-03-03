import { motion } from 'framer-motion'

const testimonials = [
  {
    quote: 'Square Builders transformed our dated Palo Alto ranch into a modern masterpiece. Edwin and his team exceeded every expectation.',
    author: 'Michael & Sarah T.',
    location: 'Palo Alto',
    rating: 5,
  },
  {
    quote: 'From design to final walkthrough, the process was seamless. Their attention to detail is unmatched in the Bay Area.',
    author: 'Jennifer L.',
    location: 'Saratoga',
    rating: 5,
  },
  {
    quote: 'We trusted them with our dream home build and they delivered beyond what we imagined. True craftsmen with integrity.',
    author: 'David & Amy K.',
    location: 'Mountain View',
    rating: 5,
  },
]

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-32 md:py-40 bg-[var(--color-navy)] relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gold/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-8 lg:px-12 relative z-10">
        <div className="text-center mb-24">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-gold text-sm tracking-[0.4em] uppercase font-semibold block mb-4"
          >
            Client Stories
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-serif text-5xl md:text-6xl font-bold text-gradient-cream"
          >
            What Our Clients Say
          </motion.h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.author}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="glass-panel p-10 rounded-2xl border hover:border-gold/30 hover:shadow-[0_0_30px_rgba(212,175,55,0.15)] hover:-translate-y-2 transition-all duration-500 relative group"
            >
              {/* Subtle top border highlight */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-gold to-[#B8860B] rounded-t-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              {/* Stars */}
              <div className="flex gap-1.5 mb-8">
                {[...Array(t.rating)].map((_, j) => (
                  <svg key={j} className="w-5 h-5 text-gold drop-shadow-[0_0_8px_rgba(212,175,55,0.8)]" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              {/* Quote */}
              <p className="font-serif text-cream/90 text-xl leading-relaxed mb-10 italic">
                <span className="text-transparent bg-clip-text bg-gradient-to-b from-gold to-gold/30 text-5xl not-italic leading-[0] absolute -top-2 -left-2 tracking-tighter opacity-70">
                  &ldquo;
                </span>
                <span className="relative z-10">{t.quote}</span>
              </p>

              {/* Author */}
              <div className="pt-6 border-t border-white/10 flex items-center justify-between">
                <div>
                  <div className="font-bold text-cream tracking-wide">{t.author}</div>
                  <div className="text-gold/80 text-sm mt-1 uppercase tracking-widest">{t.location}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
