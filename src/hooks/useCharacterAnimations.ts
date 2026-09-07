import {
  CharacterAnimations,
  CharacterAnimationsContext,
} from "../context/CharacterAnimation";
import { useContext } from "react";

export const useCharacterAnimations = (): CharacterAnimations | null => {
  const charactersAnimationsContext = useContext(CharacterAnimationsContext);
  return charactersAnimationsContext;
};
