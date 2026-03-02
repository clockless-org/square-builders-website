import { motion } from 'framer-motion'

const projects = [
  {
    title: 'The Vista Room',
    category: 'Remodel',
    description: 'A breathtaking entertainment space with panoramic valley views, blending indoor-outdoor living seamlessly.',
    image: '/images/project-vista.jpg',
  },
  {
    title: 'The Overlook',
    category: 'New Construction',
    description: '7,488 sq ft hilltop masterpiece featuring sweeping vistas, modern architecture, and luxury finishes throughout.',
    image: '/images/project-overlook.jpg',
  },
  {
    title: 'The Daylight Kitchen',
    category: 'Design Build',
    description: "A chef's kitchen flooded with natural light, featuring custom cabinetry and a stunning waterfall island.",
    image: '/images/project-kitchen.jpg',
  },
]

export default function Projects() {
  return (
    <section id="projects" className="py-24 md:py-32 bg-cream">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-16">
          <div>
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-gold text-sm tracking-[0.3em] uppercase font-medium"
            >
              Portfolio
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-serif text-navy text-3xl md:text-4xl lg:text-5xl font-bold mt-4"
            >
              Featured Projects
            </motion.h2>
          </div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-charcoal/60 max-w-md mt-4 md:mt-0"
          >
            Each project represents our commitment to excellence and the unique
            vision of our clients.
          </motion.p>
        </div>

        {/* Project Cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: i * 0.15 }}
              className="group relative aspect-[3/4] overflow-hidden cursor-pointer"
            >
              {/* Real Project Image */}
              <img
                src={project.image}
                alt={project.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />

              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/30 to-transparent" />

              {/* Content */}
              <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-8">
                <span className="text-gold text-xs tracking-[0.2em] uppercase font-medium mb-2">
                  {project.category}
                </span>
                <h3 className="font-serif text-cream text-2xl md:text-3xl font-bold mb-2">
                  {project.title}
                </h3>
                <motion.p
                  className="text-cream/0 group-hover:text-cream/70 text-sm leading-relaxed transition-all duration-500 max-h-0 group-hover:max-h-24 overflow-hidden"
                >
                  {project.description}
                </motion.p>
              </div>

              {/* Corner accent */}
              <div className="absolute top-4 right-4 w-8 h-8 border-t border-r border-gold/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
