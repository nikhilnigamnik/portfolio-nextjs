import React from "react";
import Title from "../ui/title";

const items = [
  {
    id: 1,
    title: "OpenDevHub",
    description:
      "Spotlight on Open-Source Innovations / Navigate through the highest-rated open-source projects, as chosen by the tech community.",
    url: "https://opendevhub.vercel.app/",
  },
  {
    id: 2,
    title: "Foodwaale",
    description:
      "A food delivery app where you can order food from your favorite restaurants.",
    url: "https://foodwaale.vercel.app/",
  },
];

const Projects = () => {
  return (
    <section className="mt-14 flex flex-col gap-4">
      <Title title="Projects" />
      <div className="flex flex-col gap-4">
        {items.map((item) => (
          <a
            key={item.id}
            className="flex flex-col gap-2"
            href={item.url}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h3 className="text-lg ">{item.title}</h3>
            <p className=" text-sm text-gray-600 dark:text-neutral-400">
              {item.description}
            </p>
          </a>
        ))}
      </div>
    
    </section>
  );
};

export default Projects;
