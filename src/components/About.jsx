import { motion } from 'framer-motion'

export default function About() {
  return (
    <section id="about" className="py-32 md:py-40 bg-cream">
      <div className="max-w-6xl mx-auto px-8 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">

          {/* Left: Quote */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative pl-8 border-l-2 border-gold/50"
          >
            <span className="text-gold/20 font-serif text-[8rem] leading-none block -mb-10 -ml-4 select-none">
              &ldquo;
            </span>
            <p className="font-serif text-navy text-xl md:text-2xl italic leading-[1.7] mb-8">
              For over two decades, I&apos;ve been guided by one simple idea: building spaces that reflect people&apos;s vision. Every project is a chance to create something lasting and personal, shaped by the Bay Area&apos;s spirit of innovation.
            </p>
            <div>
              <div className="text-navy font-semibold text-base">Edwin Li</div>
              <div className="text-navy/40 text-xs tracking-widest uppercase mt-1">CEO &amp; Founder, Square Builders Group</div>
            </div>
          </motion.div>

          {/* Right: Story */}
          <div className="space-y-6">
            <motion.span
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-gold text-xs tracking-[0.3em] uppercase font-semibold block"
            >
              Our Story
            </motion.span>

            <motion.h2
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-serif text-navy text-4xl md:text-5xl font-bold leading-tight"
            >
              Building Excellence<br />Since 2000
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-charcoal/70 text-base leading-relaxed"
            >
              At Square Builders Group, we&apos;re redefining what it means to build well—combining expert craftsmanship, honest collaboration, and a deep respect for our clients&apos; visions.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-charcoal/70 text-base leading-relaxed"
            >
              We believe in building with purpose. Every project begins with listening, proceeds with precision, and concludes with the kind of quality that speaks for itself.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="space-y-4 pt-2"
            >
              {[
                { title: 'One-Step Solutions', desc: 'Design, permits, and construction under one roof for a seamless experience.' },
                { title: 'Advanced Project Management', desc: 'Individualized support, on schedule and within budget.' },
                { title: 'Exceptional Quality Standards', desc: 'Top-tier craftsmanship using the best materials, ensuring lasting beauty.' },
              ].map((item) => (
                <div key={item.title} className="flex items-start gap-4">
                  <div className="w-1.5 h-1.5 bg-gold rotate-45 shrink-0 mt-2" />
                  <div>
                    <span className="text-navy font-semibold text-sm">{item.title}</span>
                    <p className="text-charcoal/50 text-sm mt-1 leading-relaxed">{item.desc}</p>
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
