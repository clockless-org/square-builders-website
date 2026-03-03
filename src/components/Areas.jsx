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

const mapBounds = {
  minLat: 37.15, maxLat: 37.65,
  minLng: -122.50, maxLng: -121.75,
}

const SVG_W = 800, SVG_H = 600

function toSvg(lat, lng) {
  const x = ((lng - mapBounds.minLng) / (mapBounds.maxLng - mapBounds.minLng)) * SVG_W
  const y = ((mapBounds.maxLat - lat) / (mapBounds.maxLat - mapBounds.minLat)) * SVG_H
  return { x, y }
}

// Coverage hull (expanded)
const coverageHull = [
  [37.62, -122.42], [37.55, -122.15], [37.50, -122.10],
  [37.44, -122.05], [37.40, -121.82], [37.30, -121.80],
  [37.22, -121.88], [37.20, -122.00], [37.22, -122.10],
  [37.30, -122.15], [37.40, -122.20], [37.50, -122.30],
  [37.60, -122.43],
]
const hullPath = coverageHull.map(([lat, lng], i) => {
  const { x, y } = toSvg(lat, lng)
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
            <div className="glass-panel rounded-2xl overflow-hidden relative">
              {/* Real map background */}
              <img
                src="/images/bay-area-map.jpg"
                alt="Bay Area Map"
                className="w-full h-auto opacity-60"
                style={{ aspectRatio: '4/3' }}
              />
              {/* SVG overlay */}
              <svg
                viewBox={`0 0 ${SVG_W} ${SVG_H}`}
                className="absolute inset-0 w-full h-full"
                xmlns="http://www.w3.org/2000/svg"
              >
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
                    <feGaussianBlur stdDeviation="25" />
                  </filter>
                  <linearGradient id="coverageFill" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#D4AF37" stopOpacity="0.12" />
                    <stop offset="50%" stopColor="#D4AF37" stopOpacity="0.06" />
                    <stop offset="100%" stopColor="#D4AF37" stopOpacity="0.12" />
                  </linearGradient>
                </defs>

                {/* Coverage area glow */}
                <path d={hullPath} fill="#D4AF37" opacity="0.2" filter="url(#bigGlow)" />

                {/* Coverage area fill */}
                <path d={hullPath} fill="url(#coverageFill)" stroke="#D4AF37" strokeWidth="1.5" strokeOpacity="0.5" strokeDasharray="6,3">
                  <animate attributeName="stroke-dashoffset" values="0;18" dur="4s" repeatCount="indefinite" />
                </path>

                {/* Connection lines */}
                {cities.map((city, i) => {
                  const pos = toSvg(city.lat, city.lng)
                  return cities.slice(i + 1).map((other, j) => {
                    const opos = toSvg(other.lat, other.lng)
                    const dist = Math.sqrt((pos.x - opos.x) ** 2 + (pos.y - opos.y) ** 2)
                    if (dist > 180) return null
                    const idx = cities.indexOf(other)
                    return (
                      <line key={`${i}-${j}`} x1={pos.x} y1={pos.y} x2={opos.x} y2={opos.y}
                        stroke="#D4AF37" strokeWidth="0.5"
                        strokeOpacity={hovered === i || hovered === idx ? 0.4 : 0.1} />
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

                      {/* Label with background */}
                      <rect
                        x={pos.x - city.name.length * 3.5 - 6}
                        y={pos.y - 28}
                        width={city.name.length * 7 + 12}
                        height={18}
                        rx="4"
                        fill="#0B162C"
                        fillOpacity={isHovered ? 0.9 : 0.7}
                      />
                      <text
                        x={pos.x} y={pos.y - 15}
                        textAnchor="middle"
                        fill={isHovered ? "#D4AF37" : "#FAF9F6"}
                        fillOpacity={isHovered ? 1 : 0.8}
                        fontSize={isHovered ? 12 : 10}
                        fontFamily="DM Sans, sans-serif"
                        fontWeight={isHovered ? 700 : 500}
                        className="select-none pointer-events-none"
                      >
                        {city.name}
                      </text>
                    </g>
                  )
                })}

                {/* Coverage label */}
                <text x={SVG_W / 2} y={SVG_H - 15} textAnchor="middle" fill="#D4AF37" fillOpacity="0.2" fontSize="22" fontFamily="Playfair Display, serif" fontWeight="700" letterSpacing="5">
                  SERVICE COVERAGE AREA
                </text>
              </svg>

              {/* Gradient overlay for edges */}
              <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-dark/60 via-transparent to-dark/30" />
              <div className="absolute inset-0 pointer-events-none bg-gradient-to-r from-dark/30 via-transparent to-dark/30" />
            </div>
            {/* Map attribution */}
            <p className="text-cream/20 text-[9px] mt-2 text-right">© OpenStreetMap contributors © CARTO</p>
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
