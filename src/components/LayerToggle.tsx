import React, { useState } from 'react';

export interface LayerVisibility {
  'bg-sky': boolean;
  'stars': boolean;
  'clouds-decorative': boolean;
  'ground-back': {
    'mountain-hills': boolean;
    'lower-landscape': boolean;
    'middle-landscape': boolean;
    'upper-terrain': boolean;
    'front-terrain': boolean;
  };
  'ground-front': {
    'bottom-strip': boolean;
    'middle-section': boolean;
    'detail-layer': boolean;
  };
  'trees-plants': {
    'trees': boolean;
    'cacti': boolean;
    'ground-vegetation': boolean;
  };
  'stones': boolean;
  'tents-campfire': {
    'tent-1': boolean;
    'tent-2': boolean;
    'tent-3': boolean;
    'campfire': boolean;
  };
}

export interface LayerOpacity {
  'bg-sky': number;
  'stars': number;
  'clouds-decorative': number;
  'ground-back': {
    'mountain-hills': number;
    'lower-landscape': number;
    'middle-landscape': number;
    'upper-terrain': number;
    'front-terrain': number;
  };
  'ground-front': {
    'bottom-strip': number;
    'middle-section': number;
    'detail-layer': number;
  };
  'trees-plants': {
    'trees': number;
    'cacti': number;
    'ground-vegetation': number;
  };
  'stones': number;
  'tents-campfire': {
    'tent-1': number;
    'tent-2': number;
    'tent-3': number;
    'campfire': number;
  };
}

export interface LayerPosition {
  'bg-sky': { x: number; y: number };
  'stars': { x: number; y: number };
  'clouds-decorative': { x: number; y: number };
  'ground-back': {
    'mountain-hills': { x: number; y: number };
    'lower-landscape': { x: number; y: number };
    'middle-landscape': { x: number; y: number };
    'upper-terrain': { x: number; y: number };
    'front-terrain': { x: number; y: number };
  };
  'ground-front': {
    'bottom-strip': { x: number; y: number };
    'middle-section': { x: number; y: number };
    'detail-layer': { x: number; y: number };
  };
  'trees-plants': {
    'trees': { x: number; y: number };
    'cacti': { x: number; y: number };
    'ground-vegetation': { x: number; y: number };
  };
  'stones': { x: number; y: number };
  'tents-campfire': {
    'tent-1': { x: number; y: number };
    'tent-2': { x: number; y: number };
    'tent-3': { x: number; y: number };
    'campfire': { x: number; y: number };
  };
}

interface LayerToggleProps {
  visibility: LayerVisibility;
  opacity: LayerOpacity;
  position: LayerPosition;
  onToggle: (layerId: string, subId?: string) => void;
  onOpacityChange: (opacity: number, layerId: string, subId?: string) => void;
  onPositionChange: (axis: 'x' | 'y', value: number, layerId: string, subId?: string) => void;
  onToggleAll: () => void;
  onReset: () => void;
}

const layerInfo = [
  { id: 'bg-sky', name: 'Background Sky', color: '#3f69cd' },
  { id: 'stars', name: 'Stars & Celestial', color: '#faf3c9' },
  { id: 'clouds-decorative', name: 'Clouds & Decorative', color: '#fffef8' },
  {
    id: 'ground-back',
    name: 'Ground Background',
    color: '#416cc8',
    subLayers: [
      { id: 'mountain-hills', name: 'Mountain Hills', color: '#4169d1' },
      { id: 'lower-landscape', name: 'Lower Landscape', color: '#5a7fd9' },
      { id: 'middle-landscape', name: 'Middle Landscape', color: '#7294e0' },
      { id: 'upper-terrain', name: 'Upper Terrain', color: '#8ba9e8' },
      { id: 'front-terrain', name: 'Front Terrain', color: '#a4bdf0' },
    ],
  },
  {
    id: 'ground-front',
    name: 'Ground Foreground',
    color: '#663c32',
    subLayers: [
      { id: 'bottom-strip', name: 'Bottom Strip', color: '#7a4a3e' },
      { id: 'middle-section', name: 'Middle Section', color: '#8e584a' },
      { id: 'detail-layer', name: 'Detail Layer', color: '#a26656' },
    ],
  },
  {
    id: 'trees-plants',
    name: 'Trees & Vegetation',
    color: '#0d1c47',
    subLayers: [
      { id: 'trees', name: 'Trees', color: '#152659' },
      { id: 'cacti', name: 'Cacti', color: '#1d306b' },
      { id: 'ground-vegetation', name: 'Ground Vegetation', color: '#253a7d' },
    ],
  },
  { id: 'stones', name: 'Stones & Rocks', color: '#8b5a3c' },
  {
    id: 'tents-campfire',
    name: 'Tents & Campfire',
    color: '#eea445',
    subLayers: [
      { id: 'tent-1', name: 'Tent 1 (Right)', color: '#f4a45f' },
      { id: 'tent-2', name: 'Tent 2 (Center)', color: '#f6b879' },
      { id: 'tent-3', name: 'Tent 3 (Left)', color: '#f8cc93' },
      { id: 'campfire', name: 'Campfire', color: '#ff8c42' },
    ],
  },
];

const LayerToggle: React.FC<LayerToggleProps> = ({ visibility, opacity, position, onToggle, onOpacityChange, onPositionChange, onToggleAll, onReset }) => {
  const [expandedGroups, setExpandedGroups] = useState<Set<string>>(new Set());

  const toggleGroup = (groupId: string) => {
    setExpandedGroups(prev => {
      const next = new Set(prev);
      if (next.has(groupId)) {
        next.delete(groupId);
      } else {
        next.add(groupId);
      }
      return next;
    });
  };

  const isGroupExpanded = (groupId: string) => expandedGroups.has(groupId);

  const getGroupVisibility = (groupId: string) => {
    const layer = visibility[groupId as keyof LayerVisibility];
    if (typeof layer === 'boolean') return layer;
    const subLayers = Object.values(layer);
    const visibleCount = subLayers.filter(v => v).length;
    if (visibleCount === 0) return false;
    if (visibleCount === subLayers.length) return true;
    return 'partial';
  };

  const allVisible = Object.entries(visibility).every(([key, value]) => {
    if (typeof value === 'boolean') return value;
    return Object.values(value).every(v => v);
  });

  return (
    <div style={{
      position: 'fixed',
      top: 20,
      right: 20,
      backgroundColor: 'rgba(255, 255, 255, 0.95)',
      border: '2px solid #333',
      borderRadius: 8,
      padding: '16px',
      minWidth: 320,
      maxHeight: '90vh',
      overflowY: 'auto',
      boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
      fontFamily: 'system-ui, -apple-system, sans-serif',
      zIndex: 1000,
    }}>
      <h3 style={{
        margin: '0 0 16px 0',
        fontSize: 16,
        fontWeight: 600,
        color: '#333',
        borderBottom: '2px solid #ddd',
        paddingBottom: 8,
      }}>
        Layer Visibility Controls
      </h3>

      <div style={{ marginBottom: 16 }}>
        {layerInfo.map(layer => {
          const isGroup = 'subLayers' in layer;
          const groupVis = getGroupVisibility(layer.id);
          const isExpanded = isGroupExpanded(layer.id);

          return (
            <div key={layer.id} style={{ marginBottom: 4 }}>
              {/* Main layer */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  padding: '8px 4px',
                  cursor: 'pointer',
                  transition: 'background-color 0.2s',
                  borderRadius: 4,
                  backgroundColor: 'transparent',
                }}
                onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#f5f5f5'}
                onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
              >
                {isGroup && (
                  <span
                    onClick={(e) => {
                      e.stopPropagation();
                      toggleGroup(layer.id);
                    }}
                    style={{
                      marginRight: 8,
                      cursor: 'pointer',
                      fontSize: 12,
                      fontWeight: 'bold',
                      userSelect: 'none',
                    }}
                  >
                    {isExpanded ? '▼' : '▶'}
                  </span>
                )}
                <input
                  type="checkbox"
                  checked={groupVis === true}
                  ref={el => {
                    if (el && groupVis === 'partial') {
                      el.indeterminate = true;
                    }
                  }}
                  onChange={() => onToggle(layer.id)}
                  onClick={(e) => e.stopPropagation()}
                  style={{
                    width: 18,
                    height: 18,
                    cursor: 'pointer',
                    marginRight: 10,
                    marginLeft: isGroup ? 0 : 26,
                  }}
                />
                <div
                  style={{
                    width: 20,
                    height: 20,
                    backgroundColor: layer.color,
                    border: '1px solid #ccc',
                    borderRadius: 3,
                    marginRight: 10,
                    flexShrink: 0,
                  }}
                />
                <span style={{
                  fontSize: 14,
                  color: groupVis !== false ? '#333' : '#999',
                  fontWeight: groupVis !== false ? 500 : 400,
                  minWidth: 140,
                }}>
                  {layer.name}
                </span>
                {!isGroup && (
                  <div style={{ display: 'flex', alignItems: 'center', marginLeft: 'auto', gap: 8 }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
                      <span style={{ fontSize: 11, color: '#666' }}>X:</span>
                      <input
                        type="number"
                        value={(position[layer.id as keyof LayerPosition] as { x: number; y: number }).x}
                        onChange={(e) => onPositionChange('x', parseInt(e.target.value) || 0, layer.id)}
                        onClick={(e) => e.stopPropagation()}
                        style={{
                          width: 50,
                          padding: '2px 4px',
                          fontSize: 11,
                          border: '1px solid #ccc',
                          borderRadius: 3,
                        }}
                      />
                      <span style={{ fontSize: 11, color: '#666' }}>Y:</span>
                      <input
                        type="number"
                        value={(position[layer.id as keyof LayerPosition] as { x: number; y: number }).y}
                        onChange={(e) => onPositionChange('y', parseInt(e.target.value) || 0, layer.id)}
                        onClick={(e) => e.stopPropagation()}
                        style={{
                          width: 50,
                          padding: '2px 4px',
                          fontSize: 11,
                          border: '1px solid #ccc',
                          borderRadius: 3,
                        }}
                      />
                    </div>
                    <input
                      type="range"
                      min="0"
                      max="100"
                      value={(typeof opacity[layer.id as keyof LayerOpacity] === 'number' 
                        ? opacity[layer.id as keyof LayerOpacity] 
                        : 100) as number}
                      onChange={(e) => onOpacityChange(parseInt(e.target.value), layer.id)}
                      onClick={(e) => e.stopPropagation()}
                      style={{
                        width: 60,
                        cursor: 'pointer',
                      }}
                    />
                    <span style={{ fontSize: 11, color: '#666', minWidth: 30, textAlign: 'right' }}>
                      {(typeof opacity[layer.id as keyof LayerOpacity] === 'number' 
                        ? opacity[layer.id as keyof LayerOpacity] 
                        : 100) as number}%
                    </span>
                  </div>
                )}
              </div>

              {/* Sub-layers */}
              {isGroup && isExpanded && layer.subLayers && (
                <div style={{ marginLeft: 26, marginTop: 4 }}>
                  {layer.subLayers.map(subLayer => {
                    const subVis = (visibility[layer.id as keyof LayerVisibility] as any)[subLayer.id];
                    const subOpacity = (opacity[layer.id as keyof LayerOpacity] as any)[subLayer.id];
                    const subPosition = (position[layer.id as keyof LayerPosition] as any)[subLayer.id];
                    return (
                      <div
                        key={subLayer.id}
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          padding: '6px 4px',
                          cursor: 'pointer',
                          transition: 'background-color 0.2s',
                          borderRadius: 4,
                        }}
                        onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#f5f5f5'}
                        onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
                      >
                        <input
                          type="checkbox"
                          checked={subVis}
                          onChange={() => onToggle(layer.id, subLayer.id)}
                          style={{
                            width: 16,
                            height: 16,
                            cursor: 'pointer',
                            marginRight: 8,
                            marginLeft: 10,
                          }}
                        />
                        <div
                          style={{
                            width: 16,
                            height: 16,
                            backgroundColor: subLayer.color,
                            border: '1px solid #ccc',
                            borderRadius: 2,
                            marginRight: 8,
                            flexShrink: 0,
                          }}
                        />
                        <span style={{
                          fontSize: 13,
                          color: subVis ? '#333' : '#999',
                          fontWeight: subVis ? 500 : 400,
                          minWidth: 120,
                        }}>
                          {subLayer.name}
                        </span>
                        <div style={{ display: 'flex', alignItems: 'center', marginLeft: 'auto', gap: 8 }}>
                          <div style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
                            <span style={{ fontSize: 11, color: '#666' }}>X:</span>
                            <input
                              type="number"
                              value={subPosition.x}
                              onChange={(e) => onPositionChange('x', parseInt(e.target.value) || 0, layer.id, subLayer.id)}
                              onClick={(e) => e.stopPropagation()}
                              style={{
                                width: 50,
                                padding: '2px 4px',
                                fontSize: 11,
                                border: '1px solid #ccc',
                                borderRadius: 3,
                              }}
                            />
                            <span style={{ fontSize: 11, color: '#666' }}>Y:</span>
                            <input
                              type="number"
                              value={subPosition.y}
                              onChange={(e) => onPositionChange('y', parseInt(e.target.value) || 0, layer.id, subLayer.id)}
                              onClick={(e) => e.stopPropagation()}
                              style={{
                                width: 50,
                                padding: '2px 4px',
                                fontSize: 11,
                                border: '1px solid #ccc',
                                borderRadius: 3,
                              }}
                            />
                          </div>
                          <input
                            type="range"
                            min="0"
                            max="100"
                            value={subOpacity}
                            onChange={(e) => onOpacityChange(parseInt(e.target.value), layer.id, subLayer.id)}
                            onClick={(e) => e.stopPropagation()}
                            style={{
                              width: 60,
                              cursor: 'pointer',
                            }}
                          />
                          <span style={{ fontSize: 11, color: '#666', minWidth: 30, textAlign: 'right' }}>
                            {subOpacity}%
                          </span>
                        </div>
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
          );
        })}
      </div>

      <div style={{
        display: 'flex',
        gap: 8,
        borderTop: '1px solid #ddd',
        paddingTop: 12,
      }}>
        <button
          onClick={onToggleAll}
          style={{
            flex: 1,
            padding: '8px 12px',
            backgroundColor: allVisible ? '#f44336' : '#4CAF50',
            color: 'white',
            border: 'none',
            borderRadius: 4,
            cursor: 'pointer',
            fontSize: 13,
            fontWeight: 500,
            transition: 'opacity 0.2s',
          }}
          onMouseEnter={(e) => e.currentTarget.style.opacity = '0.9'}
          onMouseLeave={(e) => e.currentTarget.style.opacity = '1'}
        >
          {allVisible ? 'Hide All' : 'Show All'}
        </button>
        <button
          onClick={onReset}
          style={{
            flex: 1,
            padding: '8px 12px',
            backgroundColor: '#2196F3',
            color: 'white',
            border: 'none',
            borderRadius: 4,
            cursor: 'pointer',
            fontSize: 13,
            fontWeight: 500,
            transition: 'opacity 0.2s',
          }}
          onMouseEnter={(e) => e.currentTarget.style.opacity = '0.9'}
          onMouseLeave={(e) => e.currentTarget.style.opacity = '1'}
        >
          Reset
        </button>
      </div>

      <div style={{
        marginTop: 12,
        padding: 8,
        backgroundColor: '#f0f0f0',
        borderRadius: 4,
        fontSize: 11,
        color: '#666',
        textAlign: 'center',
      }}>
        Layer controls ready
      </div>
    </div>
  );
};

export default LayerToggle;
