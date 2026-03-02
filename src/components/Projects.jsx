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
    description: 'An elegant aerial view of this 7,488 sq ft hilltop residence, thoughtfully designed to showcase breathtaking panoramic views and outdoor living spaces.',
    image: '/images/project-overlook.jpg',
  },
  {
    title: 'The Daylight Kitchen',
    category: 'Design Build',
    description: 'Spacious, sun-filled kitchen featuring an overhead skylight, warm finishes, and a large central island—perfect for cooking and entertaining.',
    image: '/images/project-kitchen.jpg',
  },
]

export default function Projects() {
  return (
    <section id="projects" className="py-24 md:py-32 bg-cream">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="mb-14">
          <motion.span
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-gold text-xs tracking-[0.3em] uppercase font-medium"
          >
            Portfolio
          </motion.span>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between mt-4">
            <motion.h2
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-serif text-navy text-3xl md:text-4xl font-bold"
            >
              Featured Projects
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-charcoal/50 text-sm max-w-xs mt-3 md:mt-0 leading-relaxed"
            >
              Each project reflects our commitment to excellence and our clients&apos; unique vision.
            </motion.p>
          </div>
        </div>

        {/* Project Cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: i * 0.15 }}
              className="group relative overflow-hidden cursor-pointer"
              style={{ aspectRatio: '4/5' }}
            >
              <img
                src={project.image}
                alt={project.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/20 to-transparent" />
              <div className="absolute inset-0 flex flex-col justify-end p-6">
                <span className="text-gold text-xs tracking-[0.2em] uppercase font-medium mb-1.5">
                  {project.category}
                </span>
                <h3 className="font-serif text-cream text-xl font-bold mb-2">
                  {project.title}
                </h3>
                <p className="text-cream/0 group-hover:text-cream/70 text-sm leading-relaxed transition-all duration-500 max-h-0 group-hover:max-h-24 overflow-hidden">
                  {project.description}
                </p>
              </div>
              <div className="absolute top-4 right-4 w-6 h-6 border-t border-r border-gold/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
