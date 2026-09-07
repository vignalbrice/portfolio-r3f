import { createContext, Dispatch, SetStateAction, useState } from "react";

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

type Animations =
  | ["Typing", "Standing", "Falling", "Waving", "Pointing", "Walking"]
  | [];

export type CharacterAnimations = {
  readonly animationIndex: number;
  setAnimationIndex: Dispatch<SetStateAction<number>>;
  readonly animations: Animations;
  setAnimations: Dispatch<SetStateAction<Animations>>;
};

export const CharacterAnimationsContext =
  createContext<CharacterAnimations | null>(null);

type CharacterAnimationsProviderProps = {
  children: React.ReactNode;
};

export const CharacterAnimationsProvider = (
  props: CharacterAnimationsProviderProps
) => {
  const [animationIndex, setAnimationIndex] = useState(2);
  const [animations, setAnimations] = useState<Animations>([]);

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
