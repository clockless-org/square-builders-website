import { motion } from 'framer-motion'

const stats = [
  { value: '20+', label: 'Years Experience' },
  { value: '150+', label: 'Projects Completed' },
  { value: '5★', label: 'Client Rating' },
  { value: '100%', label: 'Bay Area Local' },
]

export default function Stats() {
  return (
    <section className="bg-navy relative overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(201,168,76,0.05)_0%,transparent_70%)] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 py-32 md:py-40 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-y-16 gap-x-8 md:gap-x-0 md:divide-x divide-gold/20">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: i * 0.15 }}
              className="text-center group"
            >
              <div className="text-gold font-serif text-5xl md:text-6xl lg:text-8xl font-bold mb-4 md:mb-6 tracking-tight group-hover:scale-105 transition-transform duration-500">
                {stat.value}
              </div>
              <div className="text-cream/50 text-sm md:text-base tracking-[0.2em] uppercase leading-relaxed font-light">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      
      {/* Elegant border lines */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />
    </section>
  )
}
