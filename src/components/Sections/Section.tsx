import { motion } from "framer-motion";

type SectionProps = {
  children: React.ReactNode;
  mobileTop?: boolean;
};

const Section = (props: SectionProps) => {
  const { children, mobileTop } = props;
  return (
    <motion.section
      // h-screen (100vh) comme repli ; la hauteur en dvh doit rester alignée
      // sur #root, sinon les pages de ScrollControls se décalent sur mobile.
      // Une valeur dvh non supportée est simplement ignorée par le navigateur.
      style={{ height: "100dvh" }}
      className={`h-screen w-full p-6 md:p-8 max-w-screen-2xl mx-auto flex flex-col items-start ${
        mobileTop ? "justify-start md:justify-center" : "justify-start"
      }`}
      initial={{
        opacity: 0,
        y: 50,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
        transition: {
          duration: 1,
          delay: 0.6,
        },
      }}
    >
      {children}
    </motion.section>
  );
};
export default Section;
