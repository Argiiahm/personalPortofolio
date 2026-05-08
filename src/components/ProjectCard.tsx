import { ArrowUpRight01Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";

type Project = {
  title: string;
  demoURL?: string;
  features: string[];
  techStack: string[];
};

const ProjectCard = ({ title, demoURL, features, techStack }: Project) => {
  return (
    <div className="relative mb-10 mt-4 pl-4">
      <span className="text-[18px] dark:text-white">{title}</span>
      <div className="flex items-center gap-1">
        <a href={demoURL} target="_blank" className="text-zinc-500">
          Preview
        </a>
        <HugeiconsIcon
          className="dark:text-white"
          icon={ArrowUpRight01Icon}
          size={14}
        />
      </div>
      <ul className="list-disc text-[14px] text-zinc-400 mt-2 pl-4">
        {features.map((feature, i) => (
          <li key={i}>{feature}</li>
        ))}
      </ul>
      <div className="flex items-center gap-2 flex-wrap mt-2">
        {techStack.map((tech, i) => (
          <span
            key={i}
            className="bg-zinc-100 dark:bg-zinc-900 dark:text-white py-1 px-2 rounded-md text-center text-[12px]"
          >
            {tech}
          </span>
        ))}
      </div>
      <span className="absolute left-0 top-0 h-full w-[1px] bg-zinc-400"></span>
    </div>
  );
};

export default ProjectCard;
