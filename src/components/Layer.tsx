import * as React from "react";

interface LayerProps extends React.HTMLAttributes<HTMLDivElement> {
  zIndex: number;
  children: React.ReactNode;
}

const LAYER_STYLE: React.CSSProperties = {
  position: "absolute",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  pointerEvents: "none",
  contentVisibility: "auto",
};

const Layer: React.FC<LayerProps> = React.memo(({ zIndex, children, style, ...props }) => (
  <div
    style={{
      ...LAYER_STYLE,
      zIndex,
      ...style,
    }}
    {...props}
  >
    {children}
  </div>
));

Layer.displayName = "Layer";

export default Layer;
