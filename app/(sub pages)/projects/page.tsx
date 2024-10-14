import Image from "next/image";
import bg from "@/public/background/projects-background.png";
import ProjectList from "@/components/projects";
import { projectsData } from "../../data";
import RenderModel from "@/components/RenderModel";
import dynamic from "next/dynamic";

const Staff = dynamic(() => import("@/components/models/Staff"), {
  ssr: false,
});

export default function Home() {
  return (
    <>
      <Image
        priority
        src={bg}
        alt="Background Image"
        className="min-h-screen min-w-screen top-0 left-0 object-cover object-center opacity-25 -z-50 fixed"
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
