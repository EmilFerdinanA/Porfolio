import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";

const item = {
  hidden: { opacity: 0, y: 100 },
  show: { opacity: 1, y: 0 },
};

const NavLink = motion.create(Link);

const ProjectLayout: React.FC<{
  name: string;
  description: string;
  image: string;
  demoLink: string;
}> = ({ name, description, image, demoLink }) => {
  return (
    <NavLink
      variants={item}
      href={demoLink}
      target={"_blank"}
      className="text-sm md:text-base flex flex-col gap-4 items-center justify-center w-full md:w-[80%] relative rounded-lg overflow-hidden p-4 md:p-6 custom-bg"
    >
      <div className="flex flex-col gap-4">
        <h2 className="text-accent text-2xl md:text-3xl font-bold">{name}</h2>
        <Image
          className="rounded-lg object-cover"
          src={image}
          alt={name}
          width={500}
          height={300}
          layout="responsive"
        />
        <p className="text-foreground text-sm sm:text-base text-justify">
          {description}
        </p>
      </div>
    </NavLink>
  );
};

export default ProjectLayout;
