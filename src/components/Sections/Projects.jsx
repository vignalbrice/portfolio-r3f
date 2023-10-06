import { useAtom } from "jotai";
import { currentProjectAtom, PROJECTS } from "../Projects";
import Section from "./Section";

const ProjectsSection = () => {
  const [currentProject, setCurrentProject] = useAtom(currentProjectAtom);

  const nextProject = () => {
    setCurrentProject((currentProject + 1) % PROJECTS.length);
  };

  const previousProject = () => {
    setCurrentProject((currentProject - 1 + PROJECTS.length) % PROJECTS.length);
  };

  return (
    <Section>
      <div className="flex w-full h-full items-end justify-center gap-10 text-white -mt-11">
        <button
          className="hover:text-slate-600 transition-colors"
          onClick={previousProject}
        >
          ← Previous
        </button>
        <h2 className="text-3xl md:text-5xl font-bold">Projects</h2>
        <button
          className="hover:text-slate-600 transition-colors"
          onClick={nextProject}
        >
          Next →
        </button>
      </div>
    </Section>
  );
};

export default ProjectsSection;
