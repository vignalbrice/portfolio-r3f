import Lottie from "lottie-react";
import checkAnimation from "../../assets/contact/check.json";

/**
 * Isolé dans son propre module : lottie-react et son JSON ne sont téléchargés
 * qu'au moment où le formulaire a réellement été envoyé.
 */
const SuccessAnimation = () => (
  <Lottie animationData={checkAnimation} className="w-64" />
);

export default SuccessAnimation;
