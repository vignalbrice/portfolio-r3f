import { createContext, useState } from "react";

export const CharacterAnimationsContext = createContext(null);
/**
 *  Context to manage the character animations state and actions
 *
 * 0: Typing
 * 1: Standing
 * 2: Falling
 * 3: Waving
 * 4: Pointing
 * 5: Walking
 */
export const CharacterAnimationsProvider = (props) => {
  const [animationIndex, setAnimationIndex] = useState(2);
  const [animations, setAnimations] = useState([]);

  return (
    <CharacterAnimationsContext.Provider
      value={{
        animationIndex,
        setAnimationIndex,
        animations,
        setAnimations,
      }}
    >
      {props.children}
    </CharacterAnimationsContext.Provider>
  );
};
