import { motion } from 'framer-motion'

const projects = [
  {
    title: 'The Vista Room',
    category: 'Remodel',
    description: 'A serene living space with expansive valley views, designed for elevated everyday living.',
    image: '/images/project-vista.jpg',
  },
  {
    title: 'The Overlook',
    category: 'New Construction',
    description: 'An elegant 7,488 sq ft hilltop residence with breathtaking panoramic views and outdoor living spaces.',
    image: '/images/project-overlook.jpg',
  },
  {
    title: 'The Daylight Kitchen',
    category: 'Design Build',
    description: 'Spacious, sun-filled kitchen featuring an overhead skylight, warm finishes, and a large central island.',
    image: '/images/project-kitchen.jpg',
  },
]

export default function Projects() {
  return (
    <section id="projects" className="py-32 md:py-40 bg-[var(--color-navy)] relative">
      <div className="max-w-7xl mx-auto px-8 lg:px-12 relative z-10">
        {/* Header */}
        <div className="mb-16">
          <motion.span
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="text-gold text-sm tracking-[0.4em] uppercase font-semibold block mb-4"
          >
            Portfolio
          </motion.span>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between mt-2">
            <motion.h2
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-serif text-5xl md:text-6xl font-bold text-gradient-cream"
            >
              Featured Projects
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-cream/50 text-base max-w-sm mt-6 md:mt-0 leading-relaxed md:text-right"
            >
              Each project reflects our commitment to excellence and our clients&apos; unique vision.
            </motion.p>
          </div>
        </div>

        {/* Project Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: i * 0.2 }}
              className="group relative overflow-hidden cursor-pointer aspect-[3/4] rounded-xl glow-border"
            >
              <img
                src={project.image}
                alt={project.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark/95 via-dark/40 to-transparent opacity-80 group-hover:opacity-95 transition-opacity duration-500" />

              <div className="absolute inset-x-0 bottom-0 p-8 flex flex-col justify-end translate-y-8 group-hover:translate-y-0 transition-transform duration-500">
                <span className="text-gold text-xs tracking-[0.3em] uppercase font-bold mb-3 shadow-md">
                  {project.category}
                </span>
                <h3 className="font-serif text-cream text-3xl font-bold mb-3">
                  {project.title}
                </h3>
                <div className="h-[2px] w-0 bg-gradient-to-r from-gold to-[#B8860B] group-hover:w-12 transition-all duration-500 mb-4" />
                <p className="text-cream/0 group-hover:text-cream/80 text-sm leading-relaxed transition-all duration-500 max-h-0 group-hover:max-h-24 overflow-hidden">
                  {project.description}
                </p>
              </div>

              {/* Decorative Corner */}
              <div className="absolute top-6 right-6 w-8 h-8 border-t-2 border-r-2 border-gold/0 group-hover:border-gold/80 transition-all duration-700 shadow-[2px_-2px_10px_rgba(212,175,55,0.2)]" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
