import React, { useState, useEffect, useRef } from 'react'
import Slide1 from './components/Slide1'
import Slide2 from './components/Slide2'
import Slide3 from './components/Slide3'
import CoverUpLayer from './components/CoverUpLayer'
import MountainCoverUp from './components/MountainCoverUp'
import MetroOverlay from './components/MetroOverlay'
import Slide4 from './components/Slide4'
import ShootingStars from './components/ShootingStars'
import CloudsLayer from './components/CloudsLayer'

const App: React.FC = () => {
  const [scrollProgress, setScrollProgress] = useState(0)
  const rafRef = useRef<number | null>(null)

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
          {/* Layer 1: Slide1 - Background SVG */}
          <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 1 }}>
            <Slide1 scrollProgress={scrollProgress} />
          </div>

          {/* Layer 2: Slide2 - Construction site elements */}
          <div style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            zIndex: 2,
            pointerEvents: 'none'
          }}>
            <Slide2 scrollProgress={scrollProgress} style={{ width: '100%', height: '100%' }} />
          </div>

          {/* Layer 3: Slide3 - City scene (appears in the third section of scroll) */}
          <div style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            zIndex: 3,
            pointerEvents: 'none'
          }}>
            <Slide3 scrollProgress={scrollProgress} />
          </div>

          {/* Layer 4: ShootingStars - always present, animates on scroll */}
          <div style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            zIndex: 4,
            pointerEvents: 'none'
          }}>
            <ShootingStars scrollProgress={scrollProgress} />
          </div>

          {/* Layer 4: Slide4 - City scene behind metro, scroll-driven building animations */}
          <div style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            zIndex: 4,
            pointerEvents: 'none'
          }}>
            <Slide4 scrollProgress={scrollProgress} />
          </div>

          {/* Layer 5: MetroOverlay - appears AFTER Mountain exits, BEHIND CoverUpLayer */}
          <div style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            zIndex: 5,
            pointerEvents: 'none'
          }}>
            <MetroOverlay scrollProgress={scrollProgress} />
          </div>

          {/* Layer 6: CoverUpLayer - curtain that covers scene during section transitions */}
          <div style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            zIndex: 10,
            pointerEvents: 'none'
          }}>
            <CoverUpLayer scrollProgress={scrollProgress} />
          </div>

          {/* Layer 7: MountainCoverUp - mountains curtain when entering 4th section, exits 0.99→1.0, then metro shows */}
          <div style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            zIndex: 11,
            pointerEvents: 'none'
          }}>
            <MountainCoverUp scrollProgress={scrollProgress} />
          </div>

          {/* Layer 8: CloudsLayer - running clouds, always on top */}
          <div style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            zIndex: 20,
            pointerEvents: 'none'
          }}>
            <CloudsLayer scrollProgress={scrollProgress} />
          </div>

        </div>
      </div>
    </div>
  )
}

export default App

