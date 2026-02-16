# SVG Scroll Animation Project

A React + TypeScript project featuring scroll-based SVG animations with GSAP-powered campfire effects.

## Features

- **Scroll-Based Animation**: SVG elements fade in and slide into view as you scroll
- **GSAP Campfire Animation**: Realistic flickering flames, rising smoke, and glowing embers
- **Responsive**: Full-screen SVG that adapts to viewport size
- **Clean Architecture**: Simple, maintainable codebase focused on animations

## Project Structure

```
src/
├── App.tsx              # Main app with scroll container
├── components/
│   └── Slide1.tsx       # SVG component with all animations
├── assets/
│   └── slide1.svg       # Original SVG file
└── index.css            # Global styles
```

## Animation Breakdown

### Scroll Animations
Elements animate based on scroll position (0-100%):

- **Ground Layers** (0-20%): Brownish ground appears first
- **Stars** (15-25%): Fade in
- **Clouds** (20-30%): Slide in from right
- **Mountains** (25-35%): Slide in from left/right
- **Trees & Cacti** (40-50%): Slide up
- **Tents** (66-84%): Fade in and slide up
- **Campfire** (76-86%): Fade in
- **Moon** (85-95%): Fade in at the end

### GSAP Campfire Animations

**Smoke** (`#campfire-smoke`):
- Slow rise (2.5s)
- Horizontal sway (3.2s)
- Opacity fade (2.8s)

**Flames**:
- Main flame: Vertical bob (0.2s) + opacity flicker (0.13s)
- Inner flame: Scale pulse (0.1s) + position sway (0.12s) + opacity (0.09s)
- Flame tips: Erratic dance with rotation (0.08s) + fast opacity (0.07s)

**Embers** (`.cls-15`):
- Staggered glow effect (0.3s base + 0.05s per ember)

**Logs**:
- Center log: Subtle heat shimmy (0.4s)

## Key Code Sections

### Animation Helpers

```typescript
// Opacity fade based on scroll progress
getAnimatedOpacity(baseOpacity, startProgress, endProgress)

// Transform (translate) based on scroll progress
getAnimatedTransform(baseX, baseY, startProgress, endProgress, fromX, fromY)
```

### GSAP Setup

All campfire animations are initialized in a `useEffect` that:
1. Queries SVG elements by ID
2. Applies multiple overlapping GSAP animations
3. Cleans up on unmount

## Development

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Build for production
npm run build
```

## Technologies

- **React 18** - UI framework
- **TypeScript** - Type safety
- **Vite** - Build tool
- **GSAP 3.12** - Animation library

## Demo Files

- `campfire-demo.html` - Standalone campfire animation demo (no React needed)

## Tips

### Adjusting Scroll Speed
Change the container height in `App.tsx`:
```typescript
<div style={{ height: '300vh' }}> // Increase for slower scroll
```

### Modifying Animation Timing
Edit `startProgress` and `endProgress` values in `Slide1.tsx`:
```typescript
opacity: getAnimatedOpacity(100, 0.15, 0.25) // Start at 15%, end at 25%
```

### Adding New Elements
1. Add semantic ID to SVG element
2. Apply scroll animation using `getAnimatedOpacity` or `getAnimatedTransform`
3. For continuous animation, add GSAP `useEffect` logic

## License

MIT
