import { motion } from 'framer-motion'

const cities = [
  'Palo Alto',
  'Saratoga',
  'Sunnyvale',
  'Mountain View',
  'San Jose',
]

export default function Areas() {
  return (
    <section className="py-20 bg-navy overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="text-gold text-sm tracking-[0.3em] uppercase font-medium">
            Where We Build
          </span>
          <h2 className="font-serif text-cream text-3xl md:text-4xl font-bold mt-4">
            Service Areas
          </h2>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-4 md:gap-6">
          {cities.map((city, i) => (
            <motion.div
              key={city}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ scale: 1.05, borderColor: '#C9A84C' }}
              className="px-8 py-4 border border-cream/15 text-cream font-serif text-lg md:text-xl tracking-wide cursor-default transition-colors duration-300 hover:text-gold"
            >
              {city}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
