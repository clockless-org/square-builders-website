import { motion } from 'framer-motion'

const projects = [
  {
    title: 'The Vista Room',
    category: 'Remodel',
    description: 'A serene living space with expansive valley views, designed for elevated everyday living.',
    image: '/images/project-vista.jpg',
    span: 'md:col-span-7',
    aspect: 'aspect-[4/3] md:aspect-auto md:h-[600px]',
  },
  {
    title: 'The Overlook',
    category: 'New Construction',
    description: 'An elegant aerial view of this 7,488 sq ft hilltop residence, thoughtfully designed to showcase breathtaking panoramic views and outdoor living spaces.',
    image: '/images/project-overlook.jpg',
    span: 'md:col-span-5',
    aspect: 'aspect-[3/4] md:aspect-auto md:h-[600px]',
  },
  {
    title: 'The Daylight Kitchen',
    category: 'Design Build',
    description: 'Spacious, sun-filled kitchen featuring an overhead skylight, warm finishes, and a large central island—perfect for cooking and entertaining.',
    image: '/images/project-kitchen.jpg',
    span: 'md:col-span-12',
    aspect: 'aspect-[16/9] md:aspect-auto md:h-[700px]',
  },
]

export default function Projects() {
  return (
    <section id="projects" className="py-32 md:py-48 bg-cream">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="mb-20 md:mb-28">
          <motion.span
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-gold text-xs md:text-sm tracking-[0.2em] uppercase font-semibold"
          >
            Portfolio
          </motion.span>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between mt-6">
            <motion.h2
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-serif text-navy text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight"
            >
              Featured Projects
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-charcoal/60 text-lg md:text-xl max-w-sm mt-6 md:mt-0 leading-relaxed font-light"
            >
              Each project reflects our commitment to excellence and our clients&apos; unique vision.
            </motion.p>
          </div>
        </div>

        {/* Project Cards */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: i * 0.15 }}
              className={`group relative overflow-hidden cursor-pointer ${project.span} ${project.aspect}`}
            >
              <img
                src={project.image}
                alt={project.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1.5s] ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy/90 via-navy/30 to-transparent opacity-80 transition-opacity duration-700 group-hover:opacity-100" />
              
              <div className="absolute inset-0 flex flex-col justify-end p-8 md:p-12">
                <div className="transform translate-y-8 transition-transform duration-700 ease-out group-hover:translate-y-0">
                  <span className="inline-block text-gold text-xs md:text-sm tracking-[0.2em] uppercase font-semibold mb-3">
                    {project.category}
                  </span>
                  <h3 className="font-serif text-cream text-3xl md:text-4xl font-bold mb-4">
                    {project.title}
                  </h3>
                  
                  <div className="overflow-hidden">
                    <p className="text-cream/80 text-base md:text-lg font-light leading-relaxed transform translate-y-full opacity-0 transition-all duration-700 ease-out group-hover:translate-y-0 group-hover:opacity-100">
                      {project.description}
                    </p>
                  </div>
                </div>
              </div>

              {/* Elegant corner accent */}
              <div className="absolute top-6 right-6 md:top-8 md:right-8 w-8 h-8 border-t border-r border-gold/0 transition-colors duration-700 group-hover:border-gold/80" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
