import { motion } from 'framer-motion'

export default function About() {
  return (
    <section id="about" className="py-32 md:py-40 bg-cream">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-20 items-start">

          {/* Left: Quote */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="absolute -left-4 top-0 h-full w-px bg-gold opacity-40" />
            <blockquote className="pl-10">
              <p className="font-serif text-navy text-xl italic leading-relaxed mb-8">
                &ldquo;For over two decades, I&apos;ve been guided by one simple idea: building spaces that reflect people&apos;s vision. Every project is a chance to create something lasting and personal, shaped by the Bay Area&apos;s spirit of innovation.&rdquo;
              </p>
              <footer>
                <div className="text-navy font-semibold text-base">Edwin Li</div>
                <div className="text-navy/50 text-sm mt-1">CEO &amp; Founder, Square Builders Group</div>
              </footer>
            </blockquote>
          </motion.div>

          {/* Right: Story */}
          <div>
            <motion.span
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-gold text-xs tracking-[0.3em] uppercase font-medium"
            >
              Our Story
            </motion.span>

            <motion.h2
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-serif text-navy text-3xl md:text-4xl font-bold leading-tight mt-4 mb-6"
            >
              Building Excellence<br />Since 2000
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-charcoal/70 text-base leading-relaxed mb-5"
            >
              At Square Builders Group, we&apos;re redefining what it means to build well—combining expert craftsmanship, honest collaboration, and a deep respect for our clients&apos; visions.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-charcoal/70 text-base leading-relaxed mb-8"
            >
              We believe in building with purpose. Every project begins with listening, proceeds with precision, and concludes with the kind of quality that speaks for itself.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="space-y-4"
            >
              {[
                { title: 'One-Step Solutions', desc: 'Design, permits, and construction under one roof for a seamless experience.' },
                { title: 'Advanced Project Management', desc: 'Individualized support, on schedule and within budget.' },
                { title: 'Exceptional Quality Standards', desc: 'Top-tier craftsmanship using the best materials, ensuring lasting beauty.' },
              ].map((item) => (
                <div key={item.title} className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 bg-gold rotate-45 shrink-0 mt-[7px]" />
                  <div>
                    <span className="text-navy font-semibold text-sm">{item.title}</span>
                    <p className="text-charcoal/50 text-sm mt-0.5">{item.desc}</p>
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
