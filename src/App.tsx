import React, { useState, useEffect, useRef, useDeferredValue, lazy, Suspense } from 'react'
import Slide1 from './components/Slide1'
import Layer from './components/Layer'
import BlurOverlay from './components/BlurOverlay'
import ContentLayer from './components/ContentLayer'
import HeroSection from './components/HeroSection'
import Section2 from './components/Section2'
import Section3 from './components/Section3'
import Section4 from './components/Section4'
import Section5 from './components/Section5'
import Section6 from './components/Section6'
import Section7 from './components/Section7'
import Section8 from './components/Section8'
import Section9 from './components/Section9'
import Loader from './components/Loader'
import { BACKGROUND_BLUR_PX, BACKGROUND_BLUR_TINT } from './constants/ui'

// Lazy-load heavier slides and overlays for code splitting
const Slide2 = lazy(() => import('./components/Slide2'))
const Slide3 = lazy(() => import('./components/Slide3'))
const CoverUpLayer = lazy(() => import('./components/CoverUpLayer'))
const MountainCoverUp = lazy(() => import('./components/MountainCoverUp'))
const MetroOverlay = lazy(() => import('./components/MetroOverlay'))
const Slide4 = lazy(() => import('./components/Slide4'))
const ShootingStars = lazy(() => import('./components/ShootingStars'))
const CloudsLayer = lazy(() => import('./components/CloudsLayer'))
const PlaneOverlay = lazy(() => import('./components/PlaneOverlay'))

const App: React.FC = () => {
  const [scrollProgress, setScrollProgress] = useState(0)
  const rafRef = useRef<number | null>(null)
  const targetProgressRef = useRef(0)
  const displayProgressRef = useRef(0)
  // Deferred for decorative layers — reduces work during rapid scroll
  const deferredScrollProgress = useDeferredValue(scrollProgress)
  // Deferred for secondary layers (Slide2, Slide3, PlaneOverlay) — slight lag acceptable
  const deferredSecondary = useDeferredValue(scrollProgress)

  useEffect(() => {
    const scrollHeight = () => document.documentElement.scrollHeight - window.innerHeight
    const getProgress = () => Math.min(window.scrollY / scrollHeight(), 1)

    const handleScroll = () => {
      targetProgressRef.current = getProgress()
    }

    // Sync initial position
    targetProgressRef.current = getProgress()
    displayProgressRef.current = getProgress()
    setScrollProgress(getProgress())

    const lerp = 0.2 // Balances smooth follow with responsiveness
    const animate = () => {
      const target = targetProgressRef.current
      const current = displayProgressRef.current
      const diff = target - current
      if (Math.abs(diff) > 0.0001) {
        displayProgressRef.current = current + diff * lerp
        setScrollProgress(displayProgressRef.current)
      }
      rafRef.current = requestAnimationFrame(animate)
    }

    rafRef.current = requestAnimationFrame(animate)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => {
      window.removeEventListener('scroll', handleScroll)
      if (rafRef.current !== null) cancelAnimationFrame(rafRef.current)
    }
  }, [])

  return (
    <div style={{ backgroundColor: "#000", minHeight: '100vh' }}>
      <Loader />
      {/* Scroll container for animation */}
      <div style={{ height: '6000vh', position: 'relative'}}>
        <div style={{ position: 'sticky', top: 0, width: '100%', height: '100vh', overflow: 'hidden' }}>
          <Suspense fallback={null}>
            {/* Layer 1: Slide1 - Background SVG (always visible first) */}
            <Layer zIndex={1}>
              <Slide1 scrollProgress={scrollProgress} />
            </Layer>

            {/* Layer 2: Slide2 - Construction site elements */}
            <Layer zIndex={2}>
              <Slide2 scrollProgress={deferredSecondary} style={{ width: '100%', height: '100%' }} />
            </Layer>

            {/* Layer 3: Slide3 - City scene (appears in the third section of scroll) */}
            <Layer zIndex={3}>
              <Slide3 scrollProgress={deferredSecondary} />
            </Layer>

            {/* Layer 4: ShootingStars - decorative, uses deferred scroll */}
            <Layer zIndex={4}>
              <ShootingStars scrollProgress={deferredScrollProgress} />
            </Layer>

            {/* Layer 4b: PlaneOverlay - flies up in slanting path during Slide2 */}
            <Layer zIndex={5}>
              <PlaneOverlay scrollProgress={deferredSecondary} />
            </Layer>

            {/* Layer 6: Slide4 - City scene behind metro, scroll-driven building animations */}
            <Layer zIndex={6}>
              <Slide4 scrollProgress={scrollProgress} />
            </Layer>

            {/* Layer 7: MetroOverlay - appears AFTER Mountain exits, BEHIND CoverUpLayer */}
            <Layer zIndex={7}>
              <MetroOverlay scrollProgress={scrollProgress} />
            </Layer>
            {/* Blur overlay — z-index driven by BLUR_ZINDEX_RANGES in constants/ui.ts */}
            <BlurOverlay
              scrollProgress={scrollProgress}
              blurPx={BACKGROUND_BLUR_PX}
              tint={BACKGROUND_BLUR_TINT}
            />
            {/* Layer 8: CoverUpLayer - curtain that covers scene during section transitions */}
            <Layer zIndex={10}>
              <CoverUpLayer scrollProgress={scrollProgress} />
            </Layer>

            {/* Layer 9: MountainCoverUp - uses scrollProgress (not deferred) to stay in sync and avoid flicker */}
            <Layer zIndex={11} style={{ isolation: 'isolate', overflow: 'hidden', contentVisibility: 'visible' }}>
              <MountainCoverUp scrollProgress={scrollProgress} />
            </Layer>

            {/* Layer 10: CloudsLayer - decorative, uses deferred scroll */}
            <Layer zIndex={20}>
              <CloudsLayer scrollProgress={deferredScrollProgress} />
            </Layer>

   

            {/* Content layer — hero + sections 2–9 (scroll-driven visibility) */}
            <ContentLayer>
              <HeroSection scrollProgress={scrollProgress} />
              <Section2 scrollProgress={scrollProgress} />
              <Section3 scrollProgress={scrollProgress} />
              <Section4 scrollProgress={scrollProgress} />
              <Section5 scrollProgress={scrollProgress} />
              <Section6 scrollProgress={scrollProgress} />
              <Section7 scrollProgress={scrollProgress} />
              <Section8 scrollProgress={scrollProgress} />
              <Section9 scrollProgress={scrollProgress} />
            </ContentLayer>
          </Suspense>
        </div>
      </div>
    </div>
  )
}

export default App

