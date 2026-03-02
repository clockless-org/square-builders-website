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
      <div className="max-w-5xl mx-auto px-8 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-gold/15">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="text-center py-8 md:py-0 px-6"
            >
              <div className="text-gold font-serif text-5xl md:text-6xl font-bold mb-2">
                {stat.value}
              </div>
              <div className="text-cream/40 text-xs tracking-widest uppercase">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
