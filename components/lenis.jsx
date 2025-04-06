// hooks/useLenis.js
import Lenis from "lenis";
import { useEffect } from "react";

const useLenis = () => {
  useEffect(() => {
    const lenis = new Lenis({ smooth: true });
    const animate = () => {
      lenis.raf();
      requestAnimationFrame(animate);
    };
    requestAnimationFrame(animate);
    return () => lenis.destroy();
  }, []);
};

export default useLenis;
