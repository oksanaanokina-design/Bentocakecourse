import Header from '../components/Header'
import Hero from '../components/Hero'
import About from '../components/About'
import Lessons from '../components/Lessons'
import Pricing from '../components/Pricing'
import Footer from '../components/Footer'

export default function LandingPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <About />
      <Lessons />
      <Pricing />
      <Footer />
    </div>
  )
}
