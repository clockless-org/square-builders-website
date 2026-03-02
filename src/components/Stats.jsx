import { motion } from 'framer-motion'

const stats = [
  { value: '20+', label: 'Years Experience' },
  { value: '150+', label: 'Projects Completed' },
  { value: '5★', label: 'Client Rating' },
  { value: '100%', label: 'Bay Area Local' },
]

export default function Stats() {
  return (
    <section className="bg-navy border-t border-gold/10">
      <div className="max-w-5xl mx-auto px-6 py-32 md:py-40">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="text-center"
            >
              <div className="text-gold font-serif text-4xl md:text-5xl font-bold mb-2">
                {stat.value}
              </div>
              <div className="text-cream/40 text-base tracking-widest uppercase leading-relaxed">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
