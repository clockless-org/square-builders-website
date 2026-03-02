import { motion } from 'framer-motion'

const services = [
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 0h.008v.008h-.008V7.5Z" />
      </svg>
    ),
    title: 'Design Build',
    description: 'Seamless integration of design and construction under one roof. From concept sketches to move-in day, we manage every detail.',
    features: ['Architectural Design', 'Permit Management', 'Interior Design', 'Turnkey Delivery'],
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
      </svg>
    ),
    title: 'New Construction',
    description: 'Ground-up custom homes built to the highest standards. Your dream home, engineered and crafted from the foundation up.',
    features: ['Custom Floor Plans', 'Structural Engineering', 'Smart Home Integration', 'Energy Efficient'],
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17 17.25 21A2.652 2.652 0 0 0 21 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 1 1-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 0 0 4.486-6.336l-3.276 3.277a3.004 3.004 0 0 1-2.25-2.25l3.276-3.276a4.5 4.5 0 0 0-6.336 4.486c.049.58.025 1.193-.14 1.743" />
      </svg>
    ),
    title: 'Overall Improvement',
    description: 'Thoughtful remodeling that transforms your existing space. Kitchen, bathroom, ADU, or whole-house renovations done right.',
    features: ['Kitchen & Bath', 'ADU Construction', 'Room Additions', 'Whole-House Renovation'],
  },
]

export default function Services() {
  return (
    <section id="services" className="py-24 md:py-32 bg-navy">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-20">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-gold text-sm tracking-[0.3em] uppercase font-medium"
          >
            What We Do
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-serif text-cream text-3xl md:text-4xl lg:text-5xl font-bold mt-4"
          >
            Our Services
          </motion.h2>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              whileHover={{ y: -8 }}
              className="group relative bg-navy-light border border-cream/10 p-8 lg:p-10 hover:border-gold/30 transition-all duration-500"
            >
              {/* Gold top border */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gold scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />

              <div className="text-gold mb-6">{service.icon}</div>

              <h3 className="font-serif text-cream text-xl lg:text-2xl font-semibold mb-4">
                {service.title}
              </h3>

              <p className="text-cream/50 leading-relaxed mb-8">
                {service.description}
              </p>

              <ul className="space-y-3">
                {service.features.map((feat) => (
                  <li key={feat} className="flex items-center gap-3 text-cream/70 text-sm">
                    <div className="w-1.5 h-1.5 bg-gold rounded-full shrink-0" />
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
