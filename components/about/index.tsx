import React from "react";
import { ItemLayout } from "./ItemLayout";

const AboutDetails = () => {
  return (
    <section className="py-20 w-full">
      <div className="grid grid-cols-12 gap-4 xs:gap-6 md:gap-8 w-full">
        <ItemLayout className="col-span-full lg:col-span-8 row-span-2 flex-col items-start">
          <h2 className="text-xl md:text-2xl text-left w-full capitalize">
            Craftsman of Digital Experiences
          </h2>
          <p className="font-light text-xs sm:text-sm md:text-base">
            I am a frontend web developer. My focus is on creating responsive
            and captivating interfaces. I am passionate and dedicated to
            continuously learning and developing my skills. I&apos;m excited to
            take on new challenges in the ever-evolving world of web
            development. I&apos;m ready for more exciting projects!
          </p>
        </ItemLayout>

        <ItemLayout className="col-span-full xs:col-span-6 lg:col-span-4 text-accent">
          <p className="font-semibold w-full text-left text-2xl sm:text-5xl">
            25+ <sub className="font-semibold text-base">Clients</sub>
          </p>
        </ItemLayout>

        <ItemLayout className="col-span-full xs:col-span-6 lg:col-span-4 text-accent">
          <p className="font-semibold w-full text-left text-2xl sm:text-5xl">
            4+{" "}
            <sub className="font-semibold text-base">Years of experience</sub>
          </p>
        </ItemLayout>

        <ItemLayout className="col-span-full sm:col-span-6 md:col-span-4 !p-0">
          <img
            className="w-full h-auto"
            src="https://github-readme-stats.vercel.app/api/top-langs?username=EmilFerdinanA&theme=transparent&hide_border=true&title_color=FEFE5B&text_color=FFFFFF&icon_color=FEFE5B&text_bold=false&show_icons=true"
            alt="EmilFerdinanA"
            loading="lazy"
          />
        </ItemLayout>

        <ItemLayout className="col-span-full md:col-span-8 !p-0">
          <img
            className="w-full h-auto"
            src="https://github-readme-stats.vercel.app/api?username=EmilFerdinanA&theme=transparent&hide_border=true&title_color=FEFE5B&text_color=FFFFFF&icon_color=FEFE5B&text_bold=false&show_icons=true"
            alt="EmilFerdinanA"
            loading="lazy"
          />
        </ItemLayout>

        <ItemLayout className="col-span-full">
          <img
            className="w-full h-auto"
            src="https://skillicons.dev/icons?i=html,css,javascript,typescript,react,nextjs,tailwind,nodejs,express,mongodb,mysql,postgresql,prisma,git,github,figma,vscode,figma,xd,ai,ps,ae,aftereffects,illustrator,photoshop"
            alt="EmilFerdinanA"
            loading="lazy"
          />
        </ItemLayout>

        <ItemLayout className="col-span-full md:col-span-6 !p-0">
          <img
            className="w-full h-auto"
            src="https://github-readme-streak-stats.herokuapp.com?user=EmilFerdinanA&theme=dark&hide_border=true&type=png&background=EB545400&ring=FEFE5B&currStreakLabel=FEFE5B"
            alt="EmilFerdinanA"
            loading="lazy"
          />
        </ItemLayout>

        <ItemLayout className="col-span-full md:col-span-6 !p-0">
          <img
            className="w-full h-auto"
            src="https://github-readme-stats.vercel.app/api/pin/?username=EmilFerdinanA&repo=oasis&theme=transparent&hide_border=true&title_color=FEFE5B&text_color=FFFFFF&icon_color=FEFE5B&text_bold=false&show_icons=true&description_lines_count=2"
            alt="EmilFerdinanA"
            loading="lazy"
          />
        </ItemLayout>
      </div>
    </section>
  );
};

export default AboutDetails;
