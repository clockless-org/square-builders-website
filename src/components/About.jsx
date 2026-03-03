import { motion } from 'framer-motion'

export default function About() {
  return (
    <section id="about" className="py-32 md:py-40 bg-[var(--color-navy)] overflow-hidden relative">
      {/* Abstract Background Elements */}
      <div className="absolute top-1/4 left-0 w-[400px] h-[400px] bg-gold/5 rounded-full blur-[100px] -translate-x-1/2" />
      <div className="absolute bottom-1/4 right-0 w-[500px] h-[500px] bg-navy-light/30 rounded-full blur-[120px] translate-x-1/3" />

      <div className="max-w-6xl mx-auto px-8 lg:px-12 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">

          {/* Left: Quote */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative pl-10 border-l-2 border-gold/40 shadow-[-10px_0_20px_rgba(212,175,55,0.05)]"
          >
            <span className="text-gradient-gold font-serif text-[8rem] leading-none block -mb-10 -ml-4 select-none opacity-40">
              &ldquo;
            </span>
            <p className="font-serif text-cream text-2xl md:text-3xl italic leading-[1.6] mb-8">
              For over two decades, I&apos;ve been guided by one simple idea: building spaces that reflect people&apos;s vision. Every project is a chance to create something lasting and personal, shaped by the Bay Area&apos;s spirit of innovation.
            </p>
            <div>
              <div className="text-cream font-bold text-lg">Edwin Li</div>
              <div className="text-gold tracking-[0.2em] text-xs uppercase mt-1">CEO &amp; Founder, Square Builders Group</div>
            </div>
          </motion.div>

          {/* Right: Story */}
          <div className="space-y-8">
            <motion.span
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-gold text-sm tracking-[0.4em] uppercase font-semibold block"
            >
              Our Story
            </motion.span>

            <motion.h2
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-serif text-5xl md:text-6xl font-bold leading-tight text-gradient-cream"
            >
              Building Excellence<br />Since 2000
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-cream/70 text-lg leading-relaxed"
            >
              At Square Builders Group, we&apos;re redefining what it means to build well—combining expert craftsmanship, honest collaboration, and a deep respect for our clients&apos; visions.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-cream/70 text-lg leading-relaxed"
            >
              We believe in building with purpose. Every project begins with listening, proceeds with precision, and concludes with the kind of quality that speaks for itself.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="space-y-6 pt-4"
            >
              {[
                { title: 'One-Step Solutions', desc: 'Design, permits, and construction under one roof for a seamless experience.' },
                { title: 'Advanced Project Management', desc: 'Individualized support, on schedule and within budget.' },
                { title: 'Exceptional Quality Standards', desc: 'Top-tier craftsmanship using the best materials, ensuring lasting beauty.' },
              ].map((item) => (
                <div key={item.title} className="flex items-start gap-5 p-4 rounded-lg hover:bg-white/5 transition-colors duration-300 border border-transparent hover:border-gold/10">
                  <div className="w-2 h-2 bg-gradient-to-br from-gold to-[#B8860B] rotate-45 shrink-0 mt-2 shadow-[0_0_10px_rgba(212,175,55,0.5)]" />
                  <div>
                    <span className="text-cream font-bold text-base">{item.title}</span>
                    <p className="text-cream/50 text-sm mt-1.5 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
