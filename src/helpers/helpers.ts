import { AnimationClip } from "three";

export const getFirstAnimation = (animations: THREE.AnimationClip[]): AnimationClip => {
  return animations[0];
};
export const renameActionName = (animation: AnimationClip, action: string) => {
  animation.name = action;
};
