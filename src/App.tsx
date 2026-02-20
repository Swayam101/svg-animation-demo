import React, { useState, useEffect, useRef, useDeferredValue, lazy, Suspense } from 'react'
import Slide1 from './components/Slide1'
import Layer from './components/Layer'

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
  // Deferred for decorative layers — reduces work during rapid scroll
  const deferredScrollProgress = useDeferredValue(scrollProgress)
  // Deferred for secondary layers (Slide2, Slide3, PlaneOverlay) — slight lag acceptable
  const deferredSecondary = useDeferredValue(scrollProgress)

  useEffect(() => {
    const handleScroll = () => {
      if (rafRef.current !== null) return
      rafRef.current = requestAnimationFrame(() => {
        const scrollHeight = document.documentElement.scrollHeight - window.innerHeight
        const progress = Math.min(window.scrollY / scrollHeight, 1)
        setScrollProgress(progress)
        rafRef.current = null
      })
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => {
      window.removeEventListener('scroll', handleScroll)
      if (rafRef.current !== null) cancelAnimationFrame(rafRef.current)
    }
  }, [])

  return (
    <div style={{ backgroundColor: "#000", minHeight: '100vh' }}>
      {/* Scroll container for animation */}
      <div style={{ height: '3000vh', position: 'relative'}}>
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

            {/* Layer 8: CoverUpLayer - curtain that covers scene during section transitions */}
            <Layer zIndex={10}>
              <CoverUpLayer scrollProgress={scrollProgress} />
            </Layer>

            {/* Layer 9: MountainCoverUp - mountains curtain when entering 4th section, exits 0.99→1.0, then metro shows */}
            <Layer zIndex={11}>
              <MountainCoverUp scrollProgress={scrollProgress} />
            </Layer>

            {/* Layer 10: CloudsLayer - decorative, uses deferred scroll */}
            <Layer zIndex={20}>
              <CloudsLayer scrollProgress={deferredScrollProgress} />
            </Layer>
          </Suspense>
        </div>
      </div>
    </div>
  )
}

export default App

