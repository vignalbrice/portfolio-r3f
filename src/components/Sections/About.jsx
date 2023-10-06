import React from "react";
import Section from "./Section";
import { motion } from "framer-motion";

const AboutSection = (props) => {
  const { setSection } = props;
  return (
    <Section mobileTop>
      <div className="flex flex-col">
        <h1 className="text-4xl md:text-6xl font-extrabold leading-snug mt-8 md:mt-0 text-white">
          Hi, I'm
        </h1>
        <span className="bg-white px-1  mt-3 text-4xl md:text-6xl font-extrabold">
          Brice Vignal
        </span>
      </div>
      <motion.p
        initial={{
          opacity: 0,
          y: 25,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 1,
          delay: 1.5,
        }}
        className="text-lg text-white mt-4"
      >
        A web and mobile developer based in France.
        <br />
        learning 3D with React Three Fiber and Blender.
      </motion.p>
      <motion.button
        initial={{
          opacity: 0,
          y: 25,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 1,
          delay: 2,
        }}
        onClick={() => setSection(3)}
        className={`bg-slate-700 text-white py-4 px-8 rounded-lg font-bold text-lg mt-4 md:mt-16 `}
      >
        Contact me
      </motion.button>
    </Section>
  );
};

export default AboutSection;
