import { motion } from 'framer-motion'

const cities = [
  'Palo Alto', 'Saratoga', 'Sunnyvale', 'Mountain View', 'San Jose',
  'Atherton', 'Los Altos', 'Cupertino', 'Campbell', 'Burlingame',
  'Hillsborough', 'Menlo Park', 'Belmont',
]

export default function Areas() {
  return (
    <section className="py-32 md:py-40 bg-dark relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute inset-0 bg-gradient-to-t from-dark via-navy-light/10 to-dark pointer-events-none" />

      <div className="max-w-5xl mx-auto px-8 lg:px-12 relative z-10">
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-gold text-sm tracking-[0.4em] uppercase font-semibold"
          >
            Where We Build
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-serif text-5xl md:text-6xl font-bold mt-4 mb-4 text-gradient-cream"
          >
            Service Areas
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-cream/50 text-lg leading-relaxed"
          >
            2025–present project locations
          </motion.p>
        </div>

        <div className="flex flex-wrap justify-center gap-4">
          {cities.map((city, i) => (
            <motion.div
              key={city}
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="px-8 py-3.5 glass-panel rounded-full text-cream/80 text-sm md:text-base font-medium tracking-wide hover:border-gold hover:text-gold hover:shadow-[0_0_20px_rgba(212,175,55,0.2)] hover:-translate-y-1 transition-all duration-300 cursor-default"
            >
              {city}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
