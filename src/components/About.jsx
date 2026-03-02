import { motion } from 'framer-motion'

export default function About() {
  return (
    <section id="about" className="py-32 md:py-48 bg-cream overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-16 lg:gap-24 items-center">

          {/* Left: Quote */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="lg:col-span-5 relative"
          >
            {/* Magazine-style large quotation mark */}
            <span className="absolute -top-16 -left-6 md:-top-24 md:-left-12 text-[10rem] md:text-[14rem] text-gold/10 font-serif leading-none select-none pointer-events-none">
              &ldquo;
            </span>
            
            <div className="relative z-10 pl-4 md:pl-8 border-l-2 border-gold/40">
              <blockquote className="space-y-8">
                <p className="font-serif text-navy text-2xl md:text-3xl lg:text-4xl italic leading-snug">
                  &ldquo;For over two decades, I&apos;ve been guided by one simple idea: building spaces that reflect people&apos;s vision. Every project is a chance to create something lasting and personal, shaped by the Bay Area&apos;s spirit of innovation.&rdquo;
                </p>
                <footer>
                  <div className="text-navy font-semibold text-lg md:text-xl">Edwin Li</div>
                  <div className="text-charcoal/50 text-xs md:text-sm tracking-widest uppercase mt-1.5 font-medium">CEO &amp; Founder, Square Builders Group</div>
                </footer>
              </blockquote>
            </div>
          </motion.div>

          {/* Right: Story */}
          <div className="lg:col-span-7">
            <motion.span
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-gold text-xs md:text-sm tracking-[0.2em] uppercase font-semibold"
            >
              Our Story
            </motion.span>

            <motion.h2
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="font-serif text-navy text-5xl md:text-6xl font-bold leading-[1.1] tracking-tight mt-6 mb-8"
            >
              Building Excellence<br />Since 2000
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-charcoal/70 text-lg md:text-xl leading-relaxed mb-6 font-light"
            >
              At Square Builders Group, we&apos;re redefining what it means to build well—combining expert craftsmanship, honest collaboration, and a deep respect for our clients&apos; visions.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-charcoal/70 text-lg md:text-xl leading-relaxed mb-10 font-light"
            >
              We believe in building with purpose. Every project begins with listening, proceeds with precision, and concludes with the kind of quality that speaks for itself.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="space-y-6"
            >
              {[
                { title: 'One-Step Solutions', desc: 'Design, permits, and construction under one roof for a seamless experience.' },
                { title: 'Advanced Project Management', desc: 'Individualized support, on schedule and within budget.' },
                { title: 'Exceptional Quality Standards', desc: 'Top-tier craftsmanship using the best materials, ensuring lasting beauty.' },
              ].map((item) => (
                <div key={item.title} className="flex items-start gap-4">
                  <div className="w-2 h-2 bg-gold rotate-45 shrink-0 mt-[8px]" />
                  <div>
                    <span className="text-navy font-semibold text-base md:text-lg">{item.title}</span>
                    <p className="text-charcoal/60 text-sm md:text-base mt-1 leading-relaxed font-light">{item.desc}</p>
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
