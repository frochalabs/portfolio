import Header from '@/components/Header'
import Hero from '@/components/Hero'
import SocialProof from '@/components/SocialProof'
import Problems from '@/components/Problems'
import Dilemma from '@/components/Dilemma'
import Differential from '@/components/Differential'
import WhoIAm from '@/components/WhoIAm'
import Projects from '@/components/Projects'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'
import ScrollProgress from '@/components/ScrollProgress'
import CodeParticles from '@/components/CodeParticles'
import DataStream from '@/components/DataStream'

export default function Home() {
  return (
    <main className="min-h-screen">
      <ScrollProgress />
      <CodeParticles />
      <DataStream />
      <Header />
      <Hero />
      <Problems />
      <Dilemma />
      <Differential />
      <WhoIAm />
      <SocialProof />
      <Projects />
      <Contact />
      <Footer />
    </main>
  )
}

