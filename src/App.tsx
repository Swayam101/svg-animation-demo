import React, { useState } from 'react'
import Slide1, { type LayerVisibility } from './components/Slide1'
import LayerToggle, { type LayerOpacity, type LayerPosition } from './components/LayerToggle'

const App: React.FC = () => {
  const [layerVisibility, setLayerVisibility] = useState<LayerVisibility>({
    'bg-sky': true,
    'stars': true,
    'clouds-decorative': true,
    'ground-back': {
      'mountain-hills': true,
      'lower-landscape': true,
      'middle-landscape': true,
      'upper-terrain': true,
      'front-terrain': true,
    },
    'ground-front': {
      'bottom-strip': true,
      'middle-section': true,
      'detail-layer': true,
    },
    'trees-plants': {
      'trees': true,
      'cacti': true,
      'ground-vegetation': true,
    },
    'stones': true,
    'tents-campfire': {
      'tent-1': true,
      'tent-2': true,
      'tent-3': true,
      'campfire': true,
    },
  });

  const [layerOpacity, setLayerOpacity] = useState<LayerOpacity>({
    'bg-sky': 100,
    'stars': 100,
    'clouds-decorative': 100,
    'ground-back': {
      'mountain-hills': 100,
      'lower-landscape': 100,
      'middle-landscape': 100,
      'upper-terrain': 100,
      'front-terrain': 100,
    },
    'ground-front': {
      'bottom-strip': 100,
      'middle-section': 100,
      'detail-layer': 100,
    },
    'trees-plants': {
      'trees': 100,
      'cacti': 100,
      'ground-vegetation': 100,
    },
    'stones': 100,
    'tents-campfire': {
      'tent-1': 100,
      'tent-2': 100,
      'tent-3': 100,
      'campfire': 100,
    },
  });

  const [layerPosition, setLayerPosition] = useState<LayerPosition>({
    'bg-sky': { x: 0, y: 0 },
    'stars': { x: 0, y: 0 },
    'clouds-decorative': { x: 0, y: 0 },
    'ground-back': {
      'mountain-hills': { x: 0, y: 0 },
      'lower-landscape': { x: 0, y: 0 },
      'middle-landscape': { x: 0, y: 0 },
      'upper-terrain': { x: 0, y: 0 },
      'front-terrain': { x: 0, y: 0 },
    },
    'ground-front': {
      'bottom-strip': { x: 0, y: 0 },
      'middle-section': { x: 0, y: 0 },
      'detail-layer': { x: 0, y: 0 },
    },
    'trees-plants': {
      'trees': { x: 0, y: 0 },
      'cacti': { x: 0, y: 0 },
      'ground-vegetation': { x: 0, y: 0 },
    },
    'stones': { x: 0, y: 0 },
    'tents-campfire': {
      'tent-1': { x: 0, y: 0 },
      'tent-2': { x: 0, y: 0 },
      'tent-3': { x: 0, y: 0 },
      'campfire': { x: 0, y: 0 },
    },
  });

  const handleToggle = (layerId: string, subId?: string) => {
    setLayerVisibility((prev: LayerVisibility) => {
      if (subId) {
        // Toggle sub-layer
        const parentLayer = prev[layerId as keyof LayerVisibility];
        if (typeof parentLayer === 'object') {
          return {
            ...prev,
            [layerId]: {
              ...parentLayer,
              [subId]: !parentLayer[subId as keyof typeof parentLayer],
            },
          };
        }
        return prev;
      } else {
        // Toggle main layer (or all sub-layers if it's a group)
        const layer = prev[layerId as keyof LayerVisibility];
        if (typeof layer === 'boolean') {
          return {
            ...prev,
            [layerId]: !layer,
          };
        } else {
          // Toggle all sub-layers
          const allVisible = Object.values(layer).every(v => v);
          const newSubState = Object.fromEntries(
            Object.keys(layer).map(key => [key, !allVisible])
          );
          return {
            ...prev,
            [layerId]: newSubState,
          };
        }
      }
    });
  };

  const handleOpacityChange = (opacity: number, layerId: string, subId?: string) => {
    setLayerOpacity((prev: LayerOpacity) => {
      if (subId) {
        // Change sub-layer opacity
        const parentLayer = prev[layerId as keyof LayerOpacity];
        if (typeof parentLayer === 'object') {
          return {
            ...prev,
            [layerId]: {
              ...parentLayer,
              [subId]: opacity,
            },
          };
        }
        return prev;
      } else {
        // Change main layer opacity
        const layer = prev[layerId as keyof LayerOpacity];
        if (typeof layer === 'number') {
          return {
            ...prev,
            [layerId]: opacity,
          };
        }
        return prev;
      }
    });
  };

  const handlePositionChange = (axis: 'x' | 'y', value: number, layerId: string, subId?: string) => {
    setLayerPosition((prev: LayerPosition) => {
      if (subId) {
        // Change sub-layer position
        const parentLayer = prev[layerId as keyof LayerPosition];
        if (typeof parentLayer === 'object' && 'x' in parentLayer === false) {
          return {
            ...prev,
            [layerId]: {
              ...parentLayer,
              [subId]: {
                ...(parentLayer as any)[subId],
                [axis]: value,
              },
            },
          };
        }
        return prev;
      } else {
        // Change main layer position
        const layer = prev[layerId as keyof LayerPosition];
        if (typeof layer === 'object' && 'x' in layer) {
          return {
            ...prev,
            [layerId]: {
              ...layer,
              [axis]: value,
            },
          };
        }
        return prev;
      }
    });
  };

  const handleToggleAll = () => {
    const allVisible = Object.entries(layerVisibility).every(([, value]) => {
      if (typeof value === 'boolean') return value;
      return Object.values(value).every(v => v);
    });
    const newState = !allVisible;
    
    setLayerVisibility({
      'bg-sky': newState,
      'stars': newState,
      'clouds-decorative': newState,
      'ground-back': {
        'mountain-hills': newState,
        'lower-landscape': newState,
        'middle-landscape': newState,
        'upper-terrain': newState,
        'front-terrain': newState,
      },
      'ground-front': {
        'bottom-strip': newState,
        'middle-section': newState,
        'detail-layer': newState,
      },
      'trees-plants': {
        'trees': newState,
        'cacti': newState,
        'ground-vegetation': newState,
      },
      'stones': newState,
      'tents-campfire': {
        'tent-1': newState,
        'tent-2': newState,
        'tent-3': newState,
        'campfire': newState,
      },
    });
  };

  const handleReset = () => {
    setLayerVisibility({
      'bg-sky': true,
      'stars': true,
      'clouds-decorative': true,
      'ground-back': {
        'mountain-hills': true,
        'lower-landscape': true,
        'middle-landscape': true,
        'upper-terrain': true,
        'front-terrain': true,
      },
      'ground-front': {
        'bottom-strip': true,
        'middle-section': true,
        'detail-layer': true,
      },
      'trees-plants': {
        'trees': true,
        'cacti': true,
        'ground-vegetation': true,
      },
      'stones': true,
      'tents-campfire': {
        'tent-1': true,
        'tent-2': true,
        'tent-3': true,
        'campfire': true,
      },
    });
    setLayerOpacity({
      'bg-sky': 100,
      'stars': 100,
      'clouds-decorative': 100,
      'ground-back': {
        'mountain-hills': 100,
        'lower-landscape': 100,
        'middle-landscape': 100,
        'upper-terrain': 100,
        'front-terrain': 100,
      },
      'ground-front': {
        'bottom-strip': 100,
        'middle-section': 100,
        'detail-layer': 100,
      },
      'trees-plants': {
        'trees': 100,
        'cacti': 100,
        'ground-vegetation': 100,
      },
      'stones': 100,
      'tents-campfire': {
        'tent-1': 100,
        'tent-2': 100,
        'tent-3': 100,
        'campfire': 100,
      },
    });
    setLayerPosition({
      'bg-sky': { x: 0, y: 0 },
      'stars': { x: 0, y: 0 },
      'clouds-decorative': { x: 0, y: 0 },
      'ground-back': {
        'mountain-hills': { x: 0, y: 0 },
        'lower-landscape': { x: 0, y: 0 },
        'middle-landscape': { x: 0, y: 0 },
        'upper-terrain': { x: 0, y: 0 },
        'front-terrain': { x: 0, y: 0 },
      },
      'ground-front': {
        'bottom-strip': { x: 0, y: 0 },
        'middle-section': { x: 0, y: 0 },
        'detail-layer': { x: 0, y: 0 },
      },
      'trees-plants': {
        'trees': { x: 0, y: 0 },
        'cacti': { x: 0, y: 0 },
        'ground-vegetation': { x: 0, y: 0 },
      },
      'stones': { x: 0, y: 0 },
      'tents-campfire': {
        'tent-1': { x: 0, y: 0 },
        'tent-2': { x: 0, y: 0 },
        'tent-3': { x: 0, y: 0 },
        'campfire': { x: 0, y: 0 },
      },
    });
  };

  return (
    <div style={{ backgroundColor: "#000", minHeight: '100vh' }}>
      {/* Scroll container for animation */}
      <div style={{ height: '300vh', position: 'relative' }}>
        <div style={{ position: 'sticky', top: 0, width: '100vw', height: '100vh', overflow: 'hidden' }}>
          <Slide1 layerVisibility={layerVisibility} layerOpacity={layerOpacity} layerPosition={layerPosition} />
        </div>
      </div>
      <LayerToggle
        visibility={layerVisibility}
        opacity={layerOpacity}
        position={layerPosition}
        onToggle={handleToggle}
        onOpacityChange={handleOpacityChange}
        onPositionChange={handlePositionChange}
        onToggleAll={handleToggleAll}
        onReset={handleReset}
      />
    </div>
  )
}

export default App