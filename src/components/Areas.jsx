import { useState } from 'react'
import { motion } from 'framer-motion'
import { useLang } from '../context/LangContext'

const cities = [
  { name: 'Palo Alto', lat: 37.4419, lng: -122.1430 },
  { name: 'Saratoga', lat: 37.2638, lng: -122.0230 },
  { name: 'Sunnyvale', lat: 37.3688, lng: -122.0363 },
  { name: 'Mountain View', lat: 37.3861, lng: -122.0839 },
  { name: 'San Jose', lat: 37.3382, lng: -121.8863 },
  { name: 'Atherton', lat: 37.4613, lng: -122.1978 },
  { name: 'Los Altos', lat: 37.3852, lng: -122.1141 },
  { name: 'Cupertino', lat: 37.3230, lng: -122.0322 },
  { name: 'Campbell', lat: 37.2872, lng: -121.9500 },
  { name: 'Burlingame', lat: 37.5841, lng: -122.3660 },
  { name: 'Hillsborough', lat: 37.5741, lng: -122.3796 },
  { name: 'Menlo Park', lat: 37.4530, lng: -122.1817 },
  { name: 'Belmont', lat: 37.5202, lng: -122.2758 },
]

// Map bounds for Bay Area (lat/lng to SVG coords)
const bounds = {
  minLat: 37.20, maxLat: 37.62,
  minLng: -122.45, maxLng: -121.82,
}

function toSvg(lat, lng) {
  const x = ((lng - bounds.minLng) / (bounds.maxLng - bounds.minLng)) * 800
  const y = ((bounds.maxLat - lat) / (bounds.maxLat - bounds.minLat)) * 600
  return { x, y }
}

// Bay outline paths (simplified Peninsula + South Bay)
const bayWater = `
  M 320,0 Q 340,80 300,120 Q 260,160 280,220 Q 300,280 340,320
  Q 380,360 420,400 Q 480,440 520,480 Q 560,520 580,560 L 580,600
  L 800,600 L 800,0 Z
`

const coastline = `
  M 0,0 L 0,600 L 200,600 Q 220,540 180,480 Q 140,420 160,360
  Q 180,300 200,240 Q 220,180 200,120 Q 180,60 200,0 Z
`

export default function Areas() {
  const { t } = useLang()
  const [hovered, setHovered] = useState(null)

  return (
    <section className="py-32 md:py-40 bg-dark relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-t from-dark via-navy-light/10 to-dark pointer-events-none" />
      <div className="max-w-6xl mx-auto px-8 lg:px-12 relative z-10">
        <div className="text-center mb-16">
          <motion.span initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-gold text-sm tracking-[0.4em] uppercase font-semibold">{t.areas.tag}</motion.span>
          <motion.h2 initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="font-serif text-5xl md:text-6xl font-bold mt-4 mb-4 text-gradient-cream">{t.areas.title}</motion.h2>
          <motion.p initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }} className="text-cream/50 text-lg leading-relaxed">{t.areas.desc}</motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="grid lg:grid-cols-5 gap-8 items-center"
        >
          {/* Map */}
          <div className="lg:col-span-3 relative">
            <div className="glass-panel rounded-2xl p-6 md:p-8 overflow-hidden">
              <svg viewBox="0 0 800 600" className="w-full h-auto" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <radialGradient id="cityGlow" cx="50%" cy="50%" r="50%">
                    <stop offset="0%" stopColor="#D4AF37" stopOpacity="0.6" />
                    <stop offset="100%" stopColor="#D4AF37" stopOpacity="0" />
                  </radialGradient>
                  <radialGradient id="cityGlowHover" cx="50%" cy="50%" r="50%">
                    <stop offset="0%" stopColor="#D4AF37" stopOpacity="1" />
                    <stop offset="100%" stopColor="#D4AF37" stopOpacity="0" />
                  </radialGradient>
                  <filter id="glow">
                    <feGaussianBlur stdDeviation="3" result="blur" />
                    <feMerge>
                      <feMergeNode in="blur" />
                      <feMergeNode in="SourceGraphic" />
                    </feMerge>
                  </filter>
                  <linearGradient id="roadGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#FAF9F6" stopOpacity="0.03" />
                    <stop offset="50%" stopColor="#FAF9F6" stopOpacity="0.08" />
                    <stop offset="100%" stopColor="#FAF9F6" stopOpacity="0.03" />
                  </linearGradient>
                </defs>

                {/* Background */}
                <rect width="800" height="600" fill="#0B162C" rx="16" />

                {/* Bay water */}
                <path d={bayWater} fill="#0a1220" opacity="0.8" />

                {/* Grid lines (subtle road network feel) */}
                {[...Array(12)].map((_, i) => (
                  <line key={`h${i}`} x1="0" y1={i * 50} x2="800" y2={i * 50} stroke="url(#roadGrad)" strokeWidth="0.5" />
                ))}
                {[...Array(16)].map((_, i) => (
                  <line key={`v${i}`} x1={i * 50} y1="0" x2={i * 50} y2="600" stroke="url(#roadGrad)" strokeWidth="0.5" />
                ))}

                {/* Highway 101 approximate path */}
                <path
                  d="M 350,30 Q 330,100 310,180 Q 290,260 320,340 Q 350,420 400,480 Q 450,540 500,580"
                  fill="none" stroke="#FAF9F6" strokeWidth="1.5" strokeOpacity="0.08"
                  strokeDasharray="8,4"
                />

                {/* Highway 280 approximate path */}
                <path
                  d="M 280,40 Q 250,120 220,200 Q 190,300 220,380 Q 260,460 320,520 Q 380,570 440,590"
                  fill="none" stroke="#FAF9F6" strokeWidth="1.5" strokeOpacity="0.08"
                  strokeDasharray="8,4"
                />

                {/* Connection lines between cities */}
                {cities.map((city, i) => {
                  const pos = toSvg(city.lat, city.lng)
                  return cities.slice(i + 1).map((other, j) => {
                    const opos = toSvg(other.lat, other.lng)
                    const dist = Math.sqrt((pos.x - opos.x) ** 2 + (pos.y - opos.y) ** 2)
                    if (dist > 200) return null
                    return (
                      <line
                        key={`${i}-${j}`}
                        x1={pos.x} y1={pos.y}
                        x2={opos.x} y2={opos.y}
                        stroke="#D4AF37"
                        strokeWidth="0.5"
                        strokeOpacity={0.1}
                      />
                    )
                  })
                })}

                {/* City markers */}
                {cities.map((city, i) => {
                  const pos = toSvg(city.lat, city.lng)
                  const isHovered = hovered === i
                  return (
                    <g
                      key={city.name}
                      onMouseEnter={() => setHovered(i)}
                      onMouseLeave={() => setHovered(null)}
                      className="cursor-pointer"
                    >
                      {/* Pulse ring */}
                      <circle cx={pos.x} cy={pos.y} r="20" fill={isHovered ? "url(#cityGlowHover)" : "url(#cityGlow)"}>
                        <animate attributeName="r" values="15;25;15" dur="3s" repeatCount="indefinite" />
                        <animate attributeName="opacity" values="0.4;0.1;0.4" dur="3s" repeatCount="indefinite" />
                      </circle>

                      {/* Core dot */}
                      <circle
                        cx={pos.x} cy={pos.y}
                        r={isHovered ? 6 : 4}
                        fill="#D4AF37"
                        filter="url(#glow)"
                        className="transition-all duration-300"
                      />
                      <circle cx={pos.x} cy={pos.y} r={isHovered ? 3 : 2} fill="#FAF9F6" />

                      {/* Label */}
                      <text
                        x={pos.x}
                        y={pos.y - 14}
                        textAnchor="middle"
                        fill={isHovered ? "#D4AF37" : "#FAF9F6"}
                        fillOpacity={isHovered ? 1 : 0.6}
                        fontSize={isHovered ? 14 : 11}
                        fontFamily="DM Sans, sans-serif"
                        fontWeight={isHovered ? 700 : 500}
                        className="transition-all duration-300 select-none"
                      >
                        {city.name}
                      </text>
                    </g>
                  )
                })}

                {/* "Silicon Valley" label */}
                <text x="400" y="560" textAnchor="middle" fill="#D4AF37" fillOpacity="0.2" fontSize="36" fontFamily="Playfair Display, serif" fontWeight="700" letterSpacing="8">
                  SILICON VALLEY
                </text>
              </svg>
            </div>
          </div>

          {/* City list */}
          <div className="lg:col-span-2">
            <div className="grid grid-cols-2 gap-3">
              {cities.map((city, i) => (
                <motion.div
                  key={city.name}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: Math.min(i * 0.05, 0.3) }}
                  onMouseEnter={() => setHovered(i)}
                  onMouseLeave={() => setHovered(null)}
                  className={`px-4 py-3 rounded-lg text-sm font-medium tracking-wide cursor-pointer transition-all duration-300 border ${
                    hovered === i
                      ? 'bg-gold/10 border-gold/40 text-gold shadow-[0_0_15px_rgba(212,175,55,0.2)]'
                      : 'bg-white/5 border-white/5 text-cream/70 hover:border-gold/20 hover:text-cream'
                  }`}
                >
                  <div className="flex items-center gap-2">
                    <div className={`w-2 h-2 rounded-full transition-all duration-300 ${hovered === i ? 'bg-gold shadow-[0_0_8px_rgba(212,175,55,0.8)]' : 'bg-gold/40'}`} />
                    {city.name}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
