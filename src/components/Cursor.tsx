import { useEffect, useRef, useState } from "react";

const CURSOR_SPEED = 0.08;

/**
 * Curseur personnalisé suivant la souris avec un lissage.
 * Rien n'est monté sur un appareil tactile : la boucle
 * requestAnimationFrame et les écouteurs y tourneraient pour un élément
 * invisible.
 */
const Cursor = () => {
  const cursorOutline = useRef<HTMLDivElement>(null);
  const [hoverButton, setHoverButton] = useState(false);
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    const query = window.matchMedia("(hover: hover) and (pointer: fine)");
    const onChange = () => setEnabled(query.matches);
    onChange();
    query.addEventListener("change", onChange);
    return () => query.removeEventListener("change", onChange);
  }, []);

  useEffect(() => {
    if (!enabled) return;

    // État local au lieu de variables de module : deux montages ne se
    // marchent plus dessus, et tout est libéré au démontage.
    let mouseX = -10;
    let mouseY = -10;
    let outlineX = 0;
    let outlineY = 0;
    let frame = 0;

    const onMouseMove = (event: MouseEvent) => {
      mouseX = event.pageX;
      mouseY = event.pageY;
    };

    const onMouseOver = (event: MouseEvent) => {
      const target = event.target as HTMLElement | null;
      if (!target?.tagName) return;
      const tag = target.tagName.toLowerCase();
      const parentTag = target.parentElement?.tagName.toLowerCase();
      setHoverButton(
        tag === "button" ||
          parentTag === "button" ||
          tag === "input" ||
          tag === "textarea"
      );
    };

    const animate = () => {
      outlineX += (mouseX - outlineX) * CURSOR_SPEED;
      outlineY += (mouseY - outlineY) * CURSOR_SPEED;
      const element = cursorOutline.current;
      if (element) {
        // transform plutôt que left/top : composé par le GPU, sans reflow.
        element.style.transform = `translate3d(${outlineX}px, ${outlineY}px, 0) translate(-50%, -50%)`;
      }
      frame = requestAnimationFrame(animate);
    };

    document.addEventListener("mousemove", onMouseMove);
    document.addEventListener("mouseover", onMouseOver);
    frame = requestAnimationFrame(animate);

    return () => {
      document.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseover", onMouseOver);
      cancelAnimationFrame(frame);
    };
  }, [enabled]);

  if (!enabled) return null;

  return (
    <div
      aria-hidden="true"
      className={`z-50 fixed top-0 left-0 rounded-full pointer-events-none transition-[width,height,background-color,border-color]
      ${
        hoverButton
          ? "bg-transparent border-2 border-slate-900 w-5 h-5"
          : "bg-slate-500 w-3 h-3"
      }`}
      ref={cursorOutline}
    />
  );
};

export default Cursor;
