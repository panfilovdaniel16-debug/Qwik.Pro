import { useState, useEffect } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Branding from './components/Branding'
import Reliability from './components/Reliability'
import Clients from './components/Clients'
import Equipment from './components/Equipment'
import Rental from './components/Rental'
import Payback from './components/Payback'
import Service from './components/Service'
import LeadForm from './components/LeadForm'
import Footer from './components/Footer'
import FloatingButtons from './components/FloatingButtons'
import ConsultPopup from './components/ConsultPopup'
import Oferta from './pages/Oferta'
import Privacy from './pages/Privacy'
import Consent from './pages/Consent'

function getPageFromHash() {
  const hash = window.location.hash
  if (hash === '#/oferta') return 'oferta'
  if (hash === '#/privacy') return 'privacy'
  if (hash === '#/consent') return 'consent'
  return 'home'
}

function goHome() {
  window.location.hash = ''
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

export default function App() {
  const [page, setPage] = useState(getPageFromHash)

  useEffect(() => {
    const handleHash = () => {
      const p = getPageFromHash()
      setPage(p)
      if (p !== 'home') window.scrollTo({ top: 0, behavior: 'instant' })
    }
    window.addEventListener('hashchange', handleHash)
    return () => window.removeEventListener('hashchange', handleHash)
  }, [])

  const handleBack = () => {
    goHome()
    setPage('home')
  }

  if (page === 'oferta') return <Oferta onBack={handleBack} />
  if (page === 'privacy') return <Privacy onBack={handleBack} />
  if (page === 'consent') return <Consent onBack={handleBack} />

  return (
    <>
      <Header />
      <Hero />
      <Branding />
      <Reliability />
      <Clients />
      <Equipment />
      <Rental />
      <Payback />
      <Service />
      <LeadForm />
      <Footer />
      <FloatingButtons />
      <ConsultPopup />
    </>
  )
}
