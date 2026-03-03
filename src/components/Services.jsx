import { motion } from 'framer-motion'

const services = [
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 0h.008v.008h-.008V7.5Z" />
      </svg>
    ),
    title: 'Design Build',
    description: 'A seamless, one-stop solution that combines design and construction for a cohesive, efficient process from start to finish.',
    features: ['Architectural Design', 'Permit Management', 'Interior Design', 'Turnkey Delivery'],
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
      </svg>
    ),
    title: 'New Construction',
    description: 'Custom homes built with precision, quality craftsmanship, and attention to detail—creating spaces that meet your every expectation.',
    features: ['Custom Floor Plans', 'Structural Engineering', 'Smart Home Integration', 'Energy Efficient'],
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17 17.25 21A2.652 2.652 0 0 0 21 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 1 1-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 0 0 4.486-6.336l-3.276 3.277a3.004 3.004 0 0 1-2.25-2.25l3.276-3.276a4.5 4.5 0 0 0-6.336 4.486c.049.58.025 1.193-.14 1.743" />
      </svg>
    ),
    title: 'Overall Improvement',
    description: 'Renovations and enhancements that elevate your space—whether a kitchen remodel, home extension, or structural upgrades.',
    features: ['Kitchen & Bath Remodel', 'ADU Construction', 'Room Additions', 'Whole-House Renovation'],
  },
]

export default function Services() {
  return (
    <section id="services" className="py-32 md:py-40 bg-dark relative overflow-hidden">
      {/* Background glow effects */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-navy-light/40 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/3" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-gold/5 rounded-full blur-[120px] translate-y-1/2 -translate-x-1/3" />

      <div className="max-w-6xl mx-auto px-8 lg:px-12 relative z-10">
        {/* Header */}
        <div className="text-center mb-20 flex flex-col items-center">
          <motion.span
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="text-gold text-sm tracking-[0.4em] uppercase font-semibold mb-4"
          >
            What We Do
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-serif text-5xl md:text-6xl font-bold text-gradient-cream"
          >
            Our Services
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-cream/50 text-lg mt-6 max-w-xl mx-auto leading-relaxed"
          >
            From the first sketch to the final walkthrough, we handle every phase of your project.
          </motion.p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, delay: i * 0.15 + 0.2 }}
              whileHover={{ y: -8 }}
              className="group flex flex-col rounded-xl glass-panel glow-border p-10 h-full"
            >
              <div className="text-gold mb-8 opacity-90 group-hover:scale-110 group-hover:opacity-100 transition-all duration-500 drop-shadow-[0_0_15px_rgba(212,175,55,0.4)]">
                {service.icon}
              </div>

              <h3 className="font-serif text-2xl font-bold mb-4 text-cream">
                {service.title}
              </h3>

              <p className="text-cream/60 text-base leading-relaxed mb-8 flex-1">
                {service.description}
              </p>

              <ul className="space-y-3 mt-auto">
                {service.features.map((feat) => (
                  <li key={feat} className="flex items-center gap-3 text-cream/70 text-sm font-medium">
                    <div className="w-1.5 h-1.5 bg-gradient-to-r from-gold to-[#B8860B] rounded-full shrink-0 shadow-[0_0_8px_rgba(212,175,55,0.6)]" />
                    {feat}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
