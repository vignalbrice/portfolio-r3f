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
      <div className="flex w-full h-full items-end justify-between md:justify-center gap-4 md:gap-10 text-white -mt-11">
        <button
          className="shrink-0 whitespace-nowrap py-3 px-1 hover:text-slate-600 transition-colors"
          onClick={previousProject}
          aria-label="Projet précédent"
        >
          <span aria-hidden="true">←</span>
          <span className="hidden sm:inline"> Previous</span>
        </button>
        <h2 className="text-2xl md:text-5xl font-bold whitespace-nowrap">
          Projects
        </h2>
        <button
          className="shrink-0 whitespace-nowrap py-3 px-1 hover:text-slate-600 transition-colors"
          onClick={nextProject}
          aria-label="Projet suivant"
        >
          <span className="hidden sm:inline">Next </span>
          <span aria-hidden="true">→</span>
        </button>
      </div>
    </Section>
  );
};

export default ProjectsSection;
