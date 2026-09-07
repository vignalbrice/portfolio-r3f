import { useEffect, useState } from "react";

/**
 * Rend un élément visible immédiatement quand il devient actif, et le masque
 * seulement une fois l'animation de sortie terminée.
 *
 * Utile pour retirer du rendu (donc des draw calls) les objets hors écran sans
 * couper leur transition.
 */
export const useDelayedVisibility = (active: boolean, delay = 1000) => {
  const [visible, setVisible] = useState(active);

  useEffect(() => {
    if (active) {
      setVisible(true);
      return;
    }
    const timeout = setTimeout(() => setVisible(false), delay);
    return () => clearTimeout(timeout);
  }, [active, delay]);

  return visible;
};
