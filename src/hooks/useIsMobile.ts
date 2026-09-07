import { useEffect, useState } from "react";

const QUERY = "(max-width: 767px)";

/**
 * `window.innerWidth < 768` lu pendant le render ne réagit ni au
 * redimensionnement ni à la rotation de l'écran, et force une lecture du layout
 * à chaque render. matchMedia est observable et ne déclenche pas de reflow.
 */
export const useIsMobile = () => {
  const [isMobile, setIsMobile] = useState(
    () => typeof window !== "undefined" && window.matchMedia(QUERY).matches
  );

  useEffect(() => {
    const mediaQuery = window.matchMedia(QUERY);
    const onChange = (event: MediaQueryListEvent) => setIsMobile(event.matches);
    mediaQuery.addEventListener("change", onChange);
    setIsMobile(mediaQuery.matches);
    return () => mediaQuery.removeEventListener("change", onChange);
  }, []);

  return isMobile;
};
