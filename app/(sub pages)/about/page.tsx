import Image from "next/image";
import bg from "@/public/background/about-background.png";
import RenderModel from "@/components/RenderModel";
import HatModel from "@/components/models/HatModel";
import AboutDetails from "@/components/about";

export default function Home() {
  return (
    <>
      <Image
        src={bg}
        alt="Background Image"
        className="w-full h-full top-0 left-0 object-cover object-center opacity-25 -z-50 fixed"
      />

      <div className="w-full h-screen absolute top-1/2 -translate-y-1/2 left-0">
        <RenderModel>
          <HatModel />
        </RenderModel>
      </div>

      <div className="relative w-full h-screen flex flex-col justify-center items-center">
        <div className="absolute flex flex-col items-center text-center top-[60%] left-1/2 -translate-x-1/2 -translate-y-1/2">
          <h1 className="font-bold text-9xl text-accent">CodeBuck</h1>
          <p className="font-light text-foreground text-lg">
            Meet the wizard behind this portofolio
          </p>
        </div>
      </div>

      <AboutDetails />
    </>
  );
}
