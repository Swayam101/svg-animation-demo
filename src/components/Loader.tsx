import * as React from "react";
import { useEffect, useState } from "react";

const LOADER_DURATION_MS = 2000;
const FADE_OUT_MS = 400;

const Loader: React.FC = () => {
  const [visible, setVisible] = useState(true);
  const [fading, setFading] = useState(false);

  useEffect(() => {
    const showTimer = setTimeout(() => {
      setFading(true);
    }, LOADER_DURATION_MS);
    return () => clearTimeout(showTimer);
  }, []);

  useEffect(() => {
    if (!fading) return;
    const hideTimer = setTimeout(() => {
      setVisible(false);
    }, FADE_OUT_MS);
    return () => clearTimeout(hideTimer);
  }, [fading]);

  if (!visible) return null;

  return (
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-[#8a90ff] transition-opacity duration-300 ease-out"
      style={{
        opacity: fading ? 0 : 1,
        pointerEvents: fading ? "none" : "auto",
      }}
    >
      <img
        src="/cat-spinner.gif"
        alt="Loading..."
        className="h-32 w-32 object-contain sm:h-40 sm:w-40 md:h-48 md:w-48"
      />
    </div>
  );
};

export default Loader;
