import * as React from "react";

export interface ContentLayerProps extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
}

/**
 * Layer for text and other foreground content.
 * Sits above the blur overlay. pointer-events: auto for interactivity.
 */
const ContentLayer: React.FC<ContentLayerProps> = React.memo(
  ({ children, style, ...props }) => (
    <div
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        zIndex: 100,
        pointerEvents: "auto",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        padding: 0,
        ...style,
      }}
      {...props}
    >
      {children}
    </div>
  )
);

ContentLayer.displayName = "ContentLayer";

export default ContentLayer;
