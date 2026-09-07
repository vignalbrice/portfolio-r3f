import AboutSection from "./Sections/About";
import SkillsSection from "./Sections/Skills";
import ContactSection from "./Sections/Contact";
import ProjectsSection from "./Sections/Projects";

type InterfaceProps = {
  setSection: React.Dispatch<React.SetStateAction<number>>;
};

const Interface = (props: InterfaceProps) => {
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
