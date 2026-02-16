import React from 'react'
import Slide1 from './components/Slide1'

const App: React.FC = () => {
  return (
    <div style={{ backgroundColor: "#000", minHeight: '100vh' }}>
      {/* Scroll container for animation */}
      <div style={{ height: '300vh', position: 'relative' }}>
        <div style={{ position: 'sticky', top: 0, width: '100vw', height: '100vh', overflow: 'hidden' }}>
          <Slide1 />
        </div>
      </div>
    </div>
  )
}

export default App