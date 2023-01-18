import React from "react";
import TypographyHeading from "../common/TypographyHeading";
import Project from "./Project";

const projects: [
  {
    title: string;
    description: string;
    websiteLink: string;
    githubLink: string;
    image1: string;
    image2: string;
  }
] = [
  {
    title: "zorin os",
    description: " A clone for zorin os website using reactJs and tailwindcss ",
    websiteLink: "https://zorinos-clone.vercel.app/",
    githubLink: "https://github.com/Mohamed-Echbiy/ZorinOs_Website_Clone",
    image1: "./ZorinOs-Portfilio1.png",
    image2: "./ZorinOs-Portfilio2.png",
  },
  {
    title: "Efficiency",
    description:
      "A full stack todo app with some feauters like tracking user time and adding notes. built using MERN stack technologies, tailwindcss and Material Ui for styling",
    websiteLink: "https://efficiency-x6l7.onrender.com/",
    githubLink: "https://github.com/Mohamed-Echbiy/productive",
    image1: "./DarkModeEffeciency.png",
    image2: "./LightModeEffeciency.png",
  },
  {
    title: "AnimoTime",
    description:
      "Anime streaming site built using Typescript, Nextjs, TailwindCss and styled Components. the site not only offers episodes for animes but also display various information about them and make it a great place for anime lovers.",
    websiteLink: "https://animo-time-v2.vercel.app/",
    githubLink: "https://github.com/Mohamed-Echbiy/animo-tima-v2",
    image1: "./AnimoTime1.png",
    image2: "./AnimoTime2.png",
  },
];

export default function Projects() {
  return (
    <section className="projects min-h-screen px-6 sm:px-10 md:px-12 lg:px-16">
      <TypographyHeading className="pt-12 md:pt-24 mb-6">
        <h4 className="uppercase">Projects</h4>
      </TypographyHeading>
      <>
        {projects.map((e, i) => (
          <Project
            key={i}
            title={e.title}
            description={e.description}
            websiteLink={e.websiteLink}
            githubLink={e.githubLink}
            image1={e.image1}
            image2={e.image2}
          />
        ))}
      </>
    </section>
  );
}
