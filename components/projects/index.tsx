import React from "react";
import { IProject } from "@/app/data";
import ProjectLayout from "./ProjectLayout";

const ProjectList: React.FC<{ projects: IProject[] }> = ({ projects }) => {
  return (
    <div className="w-full max-w-4xl px-16 space-y-8 flex flex-col items-center">
      {projects.map((project, index) => (
        <ProjectLayout key={index} {...project} />
      ))}
    </div>
  );
};

export default ProjectList;
