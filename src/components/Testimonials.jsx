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
    <section id="testimonials" className="py-32 md:py-40 bg-cream">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-20">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-gold text-sm tracking-[0.3em] uppercase font-medium"
          >
            Client Stories
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-serif text-navy text-3xl md:text-4xl lg:text-5xl font-bold mt-4"
          >
            What Our Clients Say
          </motion.h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.author}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="bg-white p-8 lg:p-10 border border-navy/5 hover:shadow-xl hover:shadow-navy/5 transition-shadow duration-500"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-6">
                {[...Array(t.rating)].map((_, j) => (
                  <svg key={j} className="w-4 h-4 text-gold" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              {/* Quote */}
              <p className="font-serif text-navy text-lg leading-relaxed mb-8 italic">
                <span className="text-gold text-3xl not-italic leading-none">&ldquo;</span>
                {t.quote}
              </p>

              {/* Author */}
              <div className="border-t border-navy/10 pt-6">
                <div className="font-semibold text-navy">{t.author}</div>
                <div className="text-charcoal/50 text-sm">{t.location}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
