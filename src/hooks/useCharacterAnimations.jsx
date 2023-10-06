import { CharacterAnimationsContext } from "../context/CharacterAnimation";
import { useContext } from "react";

export const useCharacterAnimations = () => {
  const charactersAnimationsContext = useContext(CharacterAnimationsContext);
  return charactersAnimationsContext;
};
