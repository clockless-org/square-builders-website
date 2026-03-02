import { motion } from 'framer-motion'

export default function About() {
  return (
    <section id="about" className="py-24 md:py-32 bg-cream">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left: Quote */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="absolute -left-4 top-0 bottom-0 w-1 bg-gold" />
            <blockquote className="pl-8 md:pl-12">
              <span className="text-gold/30 font-serif text-8xl leading-none block -mb-8">
                &ldquo;
              </span>
              <p className="font-serif text-navy text-2xl md:text-3xl lg:text-4xl italic leading-relaxed">
                Building isn&apos;t just construction&mdash;it&apos;s about understanding
                how people want to live, and creating spaces that elevate every
                moment of that life.
              </p>
              <footer className="mt-8">
                <div className="text-navy font-semibold text-lg">Edwin Li</div>
                <div className="text-navy/50 text-sm tracking-wide">
                  CEO &amp; Founder, Square Builders Group
                </div>
              </footer>
            </blockquote>
          </motion.div>

          {/* Right: Story */}
          <div className="space-y-6">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-gold text-sm tracking-[0.3em] uppercase font-medium"
            >
              Our Story
            </motion.span>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-serif text-navy text-3xl md:text-4xl lg:text-5xl font-bold leading-tight"
            >
              Two Decades of
              <br />
              Building Excellence
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-charcoal/70 text-lg leading-relaxed"
            >
              Founded by Edwin Li, Square Builders Group has spent over 20 years
              shaping the Bay Area&apos;s most extraordinary residences. We&apos;re not
              just contractors&mdash;we&apos;re partners in realizing the homes our
              clients have always envisioned.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-charcoal/70 text-lg leading-relaxed"
            >
              Our approach combines advanced project management with a deeply
              personal touch. Every project begins with listening, proceeds with
              precision, and concludes with the kind of quality that speaks for itself.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-wrap gap-6 pt-4"
            >
              {['One-Step Solutions', 'Advanced PM', 'Exceptional Quality'].map(
                (item) => (
                  <div key={item} className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-gold rotate-45" />
                    <span className="text-navy font-medium text-sm tracking-wide">
                      {item}
                    </span>
                  </div>
                )
              )}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
