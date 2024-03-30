import { useState, useEffect } from "react";
import { TwoDimension } from "@/utils/types";

export default function useGetWindowSize(): TwoDimension | null {
  const [windowSize, setWindowSize] = useState<TwoDimension | null>(null);

  useEffect(() => {
    const checkWindow = () => typeof window !== undefined;
    if (!checkWindow()) return; // Checks if the the code is client (aunque deberia serlo dado que esta dentro de un useEffect)

    const handleResize: EventListener = (event) => {
      const width = window.innerWidth;
      const height = window.innerHeight;
      const winSize = { x: width, y: height };
      setWindowSize(winSize);
    };

    handleResize(null as any); // Sets the state as first time
    window.addEventListener("resize", handleResize);
  }, []);

  return windowSize;
}
