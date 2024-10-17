/*
Websites:

- https://github.com/pmndrs/gltfjsx (GLTF JSX for 3D Models)
- https://lucide.dev/icons/ (Lucide Icons)
- https://github.com/anuraghazra/github-readme-stats (Github Readme Stats)
- https://skillicons.dev (Skill Icons to show skills)
- https://github-readme-streak-stats.herokuapp.com (Github Readme Streak Stats)

:root {
  --background: 27 27 27;
  --foreground: 225 225 225;
  --muted: 115 115 115;
  --accent: 254 254 91; #FEFE5B
}

*/

export interface IProject {
  id: number;
  name: string;
  description: string;
  image: string;
  demoLink: string;
}

export interface IBtnList {
  label: string;
  link: string;
  icon: string;
  newTab: boolean;
}

export const projectsData: IProject[] = [
  {
    id: 1,
    name: "AladinMall",
    image: "/aladinmall.png",
    description:
      "An e-commerce application from MNC Group, built using Nextjs, Typescript, and Tailwind CSS as the CSS framework. Aladin Mall uses Supabase as its main database.",
    demoLink: "https://aladinmall.id/",
  },
  {
    id: 2,
    name: "Pintoko",
    image: "/pintoko.png",
    description:
      "Pintoko is an application from Lion that allows sellers to create product checkout links that can be shared on social media. built using vuejs, Typescript, and Tailwind CSS, as well as several other libraries such as VideoJs for the video player.",
    demoLink: "https://pintoko.com/",
  },
];

export const BtnList: IBtnList[] = [
  { label: "Home", link: "/", icon: "home", newTab: false },
  { label: "About", link: "/about", icon: "about", newTab: false },
  { label: "Projects", link: "/projects", icon: "projects", newTab: false },
  { label: "Contact", link: "/contact", icon: "contact", newTab: false },
  {
    label: "Github",
    link: "https://www.github.com/EmilFerdinanA",
    icon: "github",
    newTab: true,
  },
  {
    label: "LinkedIn",
    link: "https://www.linkedin.com/in/emil-ferdinan-akbar-8b31321bb",
    icon: "linkedin",
    newTab: true,
  },
  {
    label: "X",
    link: "https://www.x.com",
    icon: "twitter",
    newTab: true,
  },
  {
    label: "Resume",
    link: "https://drive.google.com/file/d/1_PudiUFvLS2OW0NGWjuEYQZ66zDQlP8U/view?usp=sharing",
    icon: "resume",
    newTab: true,
  },
];
