import { ProjectCard } from "@/components/sub/project-card";
import { PROJECTS } from "@/constants";
import { slideInFromTop } from "@/lib/motion";
import { SparklesIcon } from "@heroicons/react/24/solid";
import { motion } from "framer-motion";

export const Projects = () => {
  return (
    <section
      id="projects"
      className="flex flex-col items-center justify-center py-20"
    >
    <div
          
          className="Welcome-box py-[2px] px-[7px] border border-[#34158f8b] opacity-[0.9]"
        >
          <div className="flex items-center">
            <SparklesIcon className="text-[#b49bff] mr-[10px] h-8 w-8" />
            <h1 className="Welcome-text text-[13px]">
              My Projects
            </h1>
          </div>
        </div>
        <br />
        
      <div className="h-full w-full flex flex-col md:flex-row gap-10 px-10">
        {PROJECTS.map((project) => (
          <ProjectCard
            key={project.title}
            src={project.image}
            title={project.title}
            description={project.description}
            link={project.link}
          />
        ))}
      </div>
    </section>
  );
};
