import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useLang } from '../context/LangContext'

const galleryProjects = [
  {
    id: 'p1',
    images: ['/images/gallery/p1-aerial-1.jpg', '/images/gallery/p1-aerial-2.jpg'],
  },
  {
    id: 'p2',
    images: ['/images/gallery/p2-aerial-1.jpg', '/images/gallery/p2-aerial-2.jpg'],
  },
  {
    id: 'p3',
    images: ['/images/gallery/p3-aerial-1.jpg', '/images/gallery/p3-aerial-2.png'],
  },
  {
    id: 'p4',
    images: ['/images/gallery/p4-aerial-1.jpg', '/images/gallery/p4-aerial-2.jpg'],
  },
]

const galleryI18n = {
  en: {
    tag: 'Real Projects',
    title: 'Construction Gallery',
    desc: 'Drone photography from our active and completed project sites across the Bay Area.',
    projects: [
      { name: '3,475 Sq. Ft. New Construction', location: 'Palo Alto' },
      { name: '3,264 Sq. Ft. New Construction', location: 'Palo Alto' },
      { name: '5,297 Sq. Ft. New Build', location: 'Atherton' },
      { name: '5,983 Sq. Ft. New Build', location: 'Menlo Park' },
    ],
  },
  zh: {
    tag: '实景项目',
    title: '施工实拍',
    desc: '来自湾区各活跃及已完工项目现场的无人机航拍。',
    projects: [
      { name: '3,475 平方英尺新建住宅', location: 'Palo Alto' },
      { name: '3,264 平方英尺新建住宅', location: 'Palo Alto' },
      { name: '5,297 平方英尺新建住宅', location: 'Atherton' },
      { name: '5,983 平方英尺新建住宅', location: 'Menlo Park' },
    ],
  },
  es: {
    tag: 'Proyectos Reales',
    title: 'Galería de Construcción',
    desc: 'Fotografía aérea de nuestros sitios de proyectos activos y completados en el Área de la Bahía.',
    projects: [
      { name: '3,475 Pies² Nueva Construcción', location: 'Palo Alto' },
      { name: '3,264 Pies² Nueva Construcción', location: 'Palo Alto' },
      { name: '5,297 Pies² Nueva Construcción', location: 'Atherton' },
      { name: '5,983 Pies² Nueva Construcción', location: 'Menlo Park' },
    ],
  },
}

export default function Gallery() {
  const { lang } = useLang()
  const t = galleryI18n[lang] || galleryI18n.en
  const [lightbox, setLightbox] = useState(null)

  return (
    <section id="gallery" className="py-32 md:py-40 bg-dark relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-navy/10 via-transparent to-navy/10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-8 lg:px-12 relative z-10">
        <div className="text-center mb-20">
          <motion.span initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-gold text-sm tracking-[0.4em] uppercase font-semibold block mb-4">{t.tag}</motion.span>
          <motion.h2 initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="font-serif text-5xl md:text-6xl font-bold text-gradient-cream mb-4">{t.title}</motion.h2>
          <motion.p initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }} className="text-cream/50 text-lg leading-relaxed max-w-2xl mx-auto">{t.desc}</motion.p>
        </div>

        <div className="space-y-16">
          {galleryProjects.map((project, pi) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, delay: pi * 0.1 }}
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-2 h-2 bg-gradient-to-br from-gold to-[#B8860B] rotate-45 shadow-[0_0_10px_rgba(212,175,55,0.5)]" />
                <h3 className="font-serif text-2xl text-cream font-bold">{t.projects[pi].name}</h3>
                <span className="text-gold/60 text-sm tracking-[0.2em] uppercase">{t.projects[pi].location}</span>
              </div>

              <div className="grid grid-cols-2 gap-4">
                {project.images.map((img, ii) => (
                  <div
                    key={ii}
                    onClick={() => setLightbox(img)}
                    className="group relative overflow-hidden rounded-lg cursor-pointer aspect-[4/3] glow-border"
                  >
                    <img
                      src={img}
                      alt={`${t.projects[pi].name} - ${t.projects[pi].location}`}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-dark/0 group-hover:bg-dark/20 transition-colors duration-300" />
                    <div className="absolute bottom-3 right-3 w-8 h-8 flex items-center justify-center rounded-full bg-dark/50 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <svg className="w-4 h-4 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607zM10.5 7.5v6m3-3h-6" />
                      </svg>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-dark/95 backdrop-blur-sm flex items-center justify-center p-4 cursor-pointer"
            onClick={() => setLightbox(null)}
          >
            <motion.img
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              src={lightbox}
              alt=""
              className="max-w-full max-h-[90vh] object-contain rounded-lg shadow-2xl"
            />
            <button className="absolute top-6 right-6 text-cream/60 hover:text-gold transition-colors">
              <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
