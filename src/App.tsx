import { Hero } from '@/components/Hero'
import { About } from '@/components/About'
import { Gallery } from '@/components/Gallery'
import { VideoSection } from '@/components/VideoSection'
import { Workshops } from '@/components/Workshops'
import { Contact } from '@/components/Contact'
import { Footer } from '@/components/Footer'

export default function App() {
  return (
    <main>
      <Hero />
      <About />
      <Gallery />
      <Workshops />
      <VideoSection />
      <Contact />
      <Footer />
    </main>
  )
}
