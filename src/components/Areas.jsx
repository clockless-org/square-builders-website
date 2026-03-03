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

const bounds = {
  minLat: 37.15, maxLat: 37.65,
  minLng: -122.50, maxLng: -121.75,
}

function toSvg(lat, lng) {
  const x = ((lng - bounds.minLng) / (bounds.maxLng - bounds.minLng)) * 800
  const y = ((bounds.maxLat - lat) / (bounds.maxLat - bounds.minLat)) * 600
  return { x, y }
}

// Convex hull of service area (expanded outward for visual coverage)
const coverageHull = [
  { lat: 37.62, lng: -122.42 },  // north of Hillsborough
  { lat: 37.55, lng: -122.15 },  // east of Belmont
  { lat: 37.50, lng: -122.10 },  // between Menlo/PA
  { lat: 37.44, lng: -122.05 },  // east of Palo Alto
  { lat: 37.40, lng: -121.82 },  // east of San Jose
  { lat: 37.30, lng: -121.80 },  // SE of San Jose
  { lat: 37.22, lng: -121.88 },  // south of Campbell
  { lat: 37.20, lng: -122.00 },  // south of Saratoga
  { lat: 37.22, lng: -122.10 },  // SW of Saratoga
  { lat: 37.30, lng: -122.15 },  // west of Cupertino
  { lat: 37.40, lng: -122.20 },  // west of Los Altos
  { lat: 37.50, lng: -122.30 },  // west of Atherton
  { lat: 37.60, lng: -122.43 },  // west of Burlingame
]

const hullPath = coverageHull.map((p, i) => {
  const { x, y } = toSvg(p.lat, p.lng)
  return `${i === 0 ? 'M' : 'L'} ${x},${y}`
}).join(' ') + ' Z'

// Bay water shape
const bayShore = [
  { lat: 37.65, lng: -122.18 },
  { lat: 37.60, lng: -122.22 },
  { lat: 37.55, lng: -122.18 },
  { lat: 37.52, lng: -122.12 },
  { lat: 37.48, lng: -122.08 },
  { lat: 37.44, lng: -122.05 },
  { lat: 37.40, lng: -122.00 },
  { lat: 37.38, lng: -121.96 },
  { lat: 37.36, lng: -121.92 },
  { lat: 37.34, lng: -121.88 },
  { lat: 37.32, lng: -121.86 },
  { lat: 37.30, lng: -121.84 },
  { lat: 37.28, lng: -121.82 },
  { lat: 37.25, lng: -121.82 },
  { lat: 37.22, lng: -121.82 },
  { lat: 37.20, lng: -121.82 },
  { lat: 37.15, lng: -121.80 },
  { lat: 37.15, lng: -121.75 },
  { lat: 37.65, lng: -121.75 },
  { lat: 37.65, lng: -122.18 },
]

const bayPath = bayShore.map((p, i) => {
  const { x, y } = toSvg(p.lat, p.lng)
  return `${i === 0 ? 'M' : 'L'} ${x},${y}`
}).join(' ') + ' Z'

// East shore (Fremont side)
const eastShore = [
  { lat: 37.65, lng: -122.10 },
  { lat: 37.60, lng: -122.13 },
  { lat: 37.55, lng: -122.10 },
  { lat: 37.50, lng: -122.05 },
  { lat: 37.45, lng: -122.00 },
  { lat: 37.40, lng: -121.95 },
  { lat: 37.35, lng: -121.90 },
  { lat: 37.30, lng: -121.86 },
  { lat: 37.25, lng: -121.83 },
  { lat: 37.20, lng: -121.82 },
  { lat: 37.15, lng: -121.82 },
  { lat: 37.15, lng: -121.75 },
  { lat: 37.65, lng: -121.75 },
  { lat: 37.65, lng: -122.10 },
]

const eastPath = eastShore.map((p, i) => {
  const { x, y } = toSvg(p.lat, p.lng)
  return `${i === 0 ? 'M' : 'L'} ${x},${y}`
}).join(' ') + ' Z'

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
            <div className="glass-panel rounded-2xl p-4 md:p-6 overflow-hidden">
              <svg viewBox="0 0 800 600" className="w-full h-auto" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <radialGradient id="cityGlow" cx="50%" cy="50%" r="50%">
                    <stop offset="0%" stopColor="#D4AF37" stopOpacity="0.6" />
                    <stop offset="100%" stopColor="#D4AF37" stopOpacity="0" />
                  </radialGradient>
                  <filter id="glow">
                    <feGaussianBlur stdDeviation="3" result="blur" />
                    <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
                  </filter>
                  <filter id="bigGlow">
                    <feGaussianBlur stdDeviation="20" />
                  </filter>
                  <linearGradient id="coverageFill" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#D4AF37" stopOpacity="0.15" />
                    <stop offset="50%" stopColor="#D4AF37" stopOpacity="0.08" />
                    <stop offset="100%" stopColor="#D4AF37" stopOpacity="0.15" />
                  </linearGradient>
                </defs>

                {/* Background - land */}
                <rect width="800" height="600" fill="#0F1E35" rx="12" />

                {/* Bay water */}
                <path d={bayPath} fill="#0a1525" opacity="0.9" />

                {/* Grid */}
                {[...Array(12)].map((_, i) => (
                  <line key={`h${i}`} x1="0" y1={i * 50} x2="800" y2={i * 50} stroke="#FAF9F6" strokeWidth="0.3" strokeOpacity="0.04" />
                ))}
                {[...Array(16)].map((_, i) => (
                  <line key={`v${i}`} x1={i * 50} y1="0" x2={i * 50} y2="600" stroke="#FAF9F6" strokeWidth="0.3" strokeOpacity="0.04" />
                ))}

                {/* Coverage area - glow behind */}
                <path d={hullPath} fill="#D4AF37" opacity="0.15" filter="url(#bigGlow)" />

                {/* Coverage area - main fill */}
                <path d={hullPath} fill="url(#coverageFill)" stroke="#D4AF37" strokeWidth="1.5" strokeOpacity="0.4" strokeDasharray="6,3">
                  <animate attributeName="stroke-dashoffset" values="0;18" dur="4s" repeatCount="indefinite" />
                </path>

                {/* Highway 101 */}
                <path
                  d={(() => {
                    const pts = [
                      [37.62, -122.38], [37.58, -122.34], [37.55, -122.28],
                      [37.50, -122.22], [37.46, -122.18], [37.43, -122.14],
                      [37.40, -122.08], [37.38, -122.04], [37.35, -121.96],
                      [37.33, -121.90], [37.30, -121.86],
                    ].map(([lat, lng]) => toSvg(lat, lng))
                    return pts.map((p, i) => `${i === 0 ? 'M' : 'L'} ${p.x},${p.y}`).join(' ')
                  })()}
                  fill="none" stroke="#FAF9F6" strokeWidth="1.5" strokeOpacity="0.1" strokeDasharray="8,4"
                />
                {/* 101 label */}
                {(() => {
                  const p = toSvg(37.50, -122.22)
                  return <text x={p.x + 10} y={p.y} fill="#FAF9F6" fillOpacity="0.15" fontSize="10" fontFamily="DM Sans">101</text>
                })()}

                {/* Highway 280 */}
                <path
                  d={(() => {
                    const pts = [
                      [37.60, -122.42], [37.55, -122.35], [37.50, -122.28],
                      [37.46, -122.24], [37.42, -122.18], [37.38, -122.12],
                      [37.34, -122.06], [37.30, -122.00], [37.26, -121.94],
                    ].map(([lat, lng]) => toSvg(lat, lng))
                    return pts.map((p, i) => `${i === 0 ? 'M' : 'L'} ${p.x},${p.y}`).join(' ')
                  })()}
                  fill="none" stroke="#FAF9F6" strokeWidth="1.5" strokeOpacity="0.1" strokeDasharray="8,4"
                />
                {(() => {
                  const p = toSvg(37.46, -122.25)
                  return <text x={p.x + 10} y={p.y} fill="#FAF9F6" fillOpacity="0.15" fontSize="10" fontFamily="DM Sans">280</text>
                })()}

                {/* I-880 */}
                <path
                  d={(() => {
                    const pts = [
                      [37.40, -121.92], [37.37, -121.90], [37.34, -121.88],
                      [37.30, -121.86], [37.26, -121.85],
                    ].map(([lat, lng]) => toSvg(lat, lng))
                    return pts.map((p, i) => `${i === 0 ? 'M' : 'L'} ${p.x},${p.y}`).join(' ')
                  })()}
                  fill="none" stroke="#FAF9F6" strokeWidth="1" strokeOpacity="0.08" strokeDasharray="6,4"
                />

                {/* Connection lines */}
                {cities.map((city, i) => {
                  const pos = toSvg(city.lat, city.lng)
                  return cities.slice(i + 1).map((other, j) => {
                    const opos = toSvg(other.lat, other.lng)
                    const dist = Math.sqrt((pos.x - opos.x) ** 2 + (pos.y - opos.y) ** 2)
                    if (dist > 180) return null
                    return (
                      <line key={`${i}-${j}`} x1={pos.x} y1={pos.y} x2={opos.x} y2={opos.y}
                        stroke="#D4AF37" strokeWidth="0.5" strokeOpacity={hovered === i || hovered === cities.indexOf(other) ? 0.3 : 0.08} />
                    )
                  })
                })}

                {/* City markers */}
                {cities.map((city, i) => {
                  const pos = toSvg(city.lat, city.lng)
                  const isHovered = hovered === i
                  return (
                    <g key={city.name} onMouseEnter={() => setHovered(i)} onMouseLeave={() => setHovered(null)} className="cursor-pointer">
                      <circle cx={pos.x} cy={pos.y} r="25" fill="transparent" />
                      <circle cx={pos.x} cy={pos.y} r="18" fill="url(#cityGlow)" opacity={isHovered ? 0.8 : 0.4}>
                        <animate attributeName="r" values="14;22;14" dur="3s" begin={`${i * 0.2}s`} repeatCount="indefinite" />
                      </circle>
                      <circle cx={pos.x} cy={pos.y} r={isHovered ? 7 : 5} fill="#D4AF37" filter="url(#glow)" />
                      <circle cx={pos.x} cy={pos.y} r={isHovered ? 3.5 : 2.5} fill="#FAF9F6" />
                      <text
                        x={pos.x} y={pos.y - 16}
                        textAnchor="middle"
                        fill={isHovered ? "#D4AF37" : "#FAF9F6"}
                        fillOpacity={isHovered ? 1 : 0.7}
                        fontSize={isHovered ? 13 : 11}
                        fontFamily="DM Sans, sans-serif"
                        fontWeight={isHovered ? 700 : 500}
                        className="select-none pointer-events-none"
                      >
                        {city.name}
                      </text>
                    </g>
                  )
                })}

                {/* Bay label */}
                {(() => {
                  const p = toSvg(37.45, -121.88)
                  return <text x={p.x} y={p.y} textAnchor="middle" fill="#FAF9F6" fillOpacity="0.08" fontSize="16" fontFamily="DM Sans" fontStyle="italic">San Francisco Bay</text>
                })()}

                {/* Coverage label */}
                <text x="400" y="575" textAnchor="middle" fill="#D4AF37" fillOpacity="0.15" fontSize="28" fontFamily="Playfair Display, serif" fontWeight="700" letterSpacing="6">
                  SERVICE COVERAGE AREA
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
                    <div className={`w-2 h-2 rounded-full shrink-0 transition-all duration-300 ${hovered === i ? 'bg-gold shadow-[0_0_8px_rgba(212,175,55,0.8)]' : 'bg-gold/40'}`} />
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
