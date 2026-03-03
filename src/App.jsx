import { LangProvider } from './context/LangContext'
import Nav from './components/Nav'
import Hero from './components/Hero'
import Stats from './components/Stats'
import About from './components/About'
import Services from './components/Services'
import Projects from './components/Projects'
import Gallery from './components/Gallery'
import Areas from './components/Areas'
import Testimonials from './components/Testimonials'
import FAQ from './components/FAQ'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  return (
    <LangProvider>
      <div className="overflow-x-hidden">
        <Nav />
        <Hero />
        <Stats />
        <About />
        <Services />
        <Projects />
        <Gallery />
        <Areas />
        <Testimonials />
        <FAQ />
        <Contact />
        <Footer />
      </div>
    </LangProvider>
  )
}
