import { useState } from 'react'
import { motion } from 'framer-motion'

export default function Contact() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (email) setSubmitted(true)
  }

  return (
    <section id="contact" className="py-32 md:py-48 bg-navy relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[radial-gradient(circle_at_center,rgba(201,168,76,0.1)_0%,transparent_70%)] rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[radial-gradient(circle_at_center,rgba(201,168,76,0.05)_0%,transparent_70%)] rounded-full blur-3xl translate-y-1/3 -translate-x-1/3 pointer-events-none" />

      <div className="max-w-4xl mx-auto px-8 lg:px-12 relative z-10">
        <div className="text-center">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-gold text-xs md:text-sm tracking-[0.3em] uppercase font-semibold"
          >
            Get Started
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-serif text-cream text-5xl md:text-6xl lg:text-7xl font-bold mt-6 mb-8 tracking-tight"
          >
            Ready to Build Your Dream?
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-cream/50 text-lg md:text-xl max-w-2xl mx-auto mb-14 leading-relaxed font-light"
          >
            Share your email and we&apos;ll reach out to schedule a complimentary
            consultation. Let&apos;s turn your vision into reality.
          </motion.p>

          {/* Form */}
          <motion.form
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            onSubmit={handleSubmit}
            className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto mb-16"
          >
            {!submitted ? (
              <>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email address"
                  required
                  className="flex-1 px-8 py-5 bg-cream/5 border border-cream/10 text-cream placeholder:text-cream/30 focus:border-gold/50 focus:bg-cream/10 focus:outline-none transition-all duration-300 font-light"
                />
                <button
                  type="submit"
                  className="px-10 py-5 bg-gold text-navy font-semibold tracking-widest uppercase text-sm hover:bg-white transition-colors duration-500 whitespace-nowrap"
                >
                  Get In Touch
                </button>
              </>
            ) : (
              <div className="w-full text-center py-5 border border-gold/30 bg-gold/5">
                <span className="text-gold font-serif text-2xl">
                  Thank you! We&apos;ll be in touch soon.
                </span>
              </div>
            )}
          </motion.form>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-8 text-cream/50 mb-8 font-light"
          >
            <div className="flex items-center gap-3 group">
              <svg className="w-5 h-5 text-gold/70 group-hover:text-gold transition-colors duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
              </svg>
              <a href="tel:+16692229990" className="hover:text-gold transition-colors duration-300 text-lg">
                (669) 222-9990
              </a>
            </div>
            <span className="hidden sm:block text-gold/30">|</span>
            <div className="flex items-center gap-3 group">
              <svg className="w-5 h-5 text-gold/70 group-hover:text-gold transition-colors duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
              </svg>
              <a href="mailto:info@squarebuildersgroup.com" className="hover:text-gold transition-colors duration-300 text-lg">
                info@squarebuildersgroup.com
              </a>
            </div>
          </motion.div>

          {/* Address */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex items-center justify-center gap-3 text-cream/40 font-light group"
          >
            <svg className="w-5 h-5 text-gold/70 group-hover:text-gold transition-colors duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
            </svg>
            <span className="text-base tracking-wide">920 Saratoga Ave, Ste 107, San Jose, CA 95129</span>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
