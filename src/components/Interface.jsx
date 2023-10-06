import React from "react";
import { motion } from "framer-motion";
import AboutSection from "./Sections/About";
import Section from "./Sections/Section";
import SkillsSection from "./Sections/Skills";
import ContactSection from "./Sections/Contact";
import ProjectsSection from "./Sections/Projects";

const Interface = (props) => {
  const { setSection } = props;

  return (
    <div className="flex flex-col items-center w-screen">
      <AboutSection setSection={setSection} />
      <SkillsSection />
      <ProjectsSection />
      <ContactSection />
    </div>
  );
};
export default Interface;
