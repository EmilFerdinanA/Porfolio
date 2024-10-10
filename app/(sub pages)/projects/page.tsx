import Image from "next/image";
import bg from "@/public/background/projects-background.png";
import ProjectList from "@/components/projects";
import { projectsData } from "../../data";
import RenderModel from "@/components/RenderModel";
import Staff from "@/components/models/Staff";

export default function Home() {
  return (
    <>
      <Image
        src={bg}
        alt="Background Image"
        className="w-full h-full top-0 left-0 object-cover object-center opacity-25 -z-50 fixed"
      />

      <ProjectList projects={projectsData} />

      <div className="-z-10 flex items-center justify-center fixed top-16 lg:top-20 -translate-x-1/2 lg:translate-x-0 left-1/2 lg:-left-24 h-screen">
        <RenderModel>
          <Staff />
        </RenderModel>
      </div>
    </>
  );
}
