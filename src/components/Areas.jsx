import { motion } from 'framer-motion'

const cities = [
  'Palo Alto', 'Saratoga', 'Sunnyvale', 'Mountain View', 'San Jose',
  'Atherton', 'Los Altos', 'Cupertino', 'Campbell', 'Burlingame',
  'Hillsborough', 'Menlo Park', 'Belmont',
]

export default function Areas() {
  return (
    <section className="py-20 bg-navy">
      <div className="max-w-5xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="text-gold text-xs tracking-[0.3em] uppercase font-medium">
            Where We Build
          </span>
          <h2 className="font-serif text-cream text-3xl md:text-4xl font-bold mt-4 mb-3">
            Service Areas
          </h2>
          <p className="text-cream/40 text-sm">2025–present project locations</p>
        </div>

        <div className="flex flex-wrap justify-center gap-3">
          {cities.map((city, i) => (
            <motion.div
              key={city}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="px-6 py-3 border border-cream/15 text-cream/80 text-sm tracking-wide hover:border-gold hover:text-gold transition-all duration-300 cursor-default"
            >
              {city}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
