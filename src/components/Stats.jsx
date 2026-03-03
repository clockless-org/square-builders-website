import { motion } from 'framer-motion'

const stats = [
  { value: '20+', label: 'Years Experience' },
  { value: '150+', label: 'Projects Completed' },
  { value: '5★', label: 'Client Rating' },
  { value: '100%', label: 'Bay Area Local' },
]

export default function Stats() {
  return (
    <section className="bg-dark relative z-10">
      <div className="absolute inset-0 bg-gradient-to-b from-dark via-navy/20 to-dark pointer-events-none" />
      <div className="max-w-6xl mx-auto px-8 py-16 relative">
        <div className="glass-panel rounded-2xl grid grid-cols-2 md:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-gold/20 overflow-hidden shadow-[0_0_30px_rgba(0,0,0,0.5)]">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="text-center py-10 px-6 group hover:bg-white/5 transition-colors duration-500 cursor-default"
            >
              <div className="text-gradient-gold font-serif text-5xl md:text-6xl font-bold mb-3 drop-shadow-[0_0_15px_rgba(212,175,55,0.3)] group-hover:drop-shadow-[0_0_25px_rgba(212,175,55,0.6)] transition-all duration-500">
                {stat.value}
              </div>
              <div className="text-cream/50 text-xs tracking-[0.2em] font-medium uppercase group-hover:text-gold transition-colors duration-500">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
