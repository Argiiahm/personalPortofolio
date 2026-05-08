type props = {
  title?: string;
  location?: string;
  date?: string;
  company?: string;
  description?: string[];
  techStack?: string[];
};

const ExperienceCard = ({
  title,
  location,
  date,
  company,
  description,
  techStack,
}: props) => {
  return (
    <div className="relative mb-10 mt-4 pl-4">
      <div className="flex items-center flex-wrap gap-4 mt-4 justify-between">
        <div className="flex items-center flex-wrap gap-2">
          <span className="text-[18px] dark:text-white">{title}</span>
          <span className="bg-zinc-100 dark:bg-zinc-900 dark:text-white px-2 py-1 rounded-md text-[12px]">
            {location}
          </span>
        </div>
        <div>
          <span className="text-[14px] text-zinc-500">{date}</span>
        </div>
      </div>
      <span className="text-zinc-500">at {company}</span>
      <ul className="list-disc text-[14px] text-zinc-400 mt-2 pl-4">
        {description?.map((desc, i) => (
          <li key={i}>{desc}</li>
        ))}
      </ul>
      <div className="flex items-center flex-wrap gap-2 mt-2">
        {techStack?.map((tech, i) => (
          <span
            key={i}
            className="bg-zinc-100 dark:bg-zinc-900 dark:text-white px-2 py-1 rounded-md text-center text-[12px]"
          >
            {tech}
          </span>
        ))}
        <span className="absolute left-0 top-0 h-full w-[1px] bg-zinc-400"></span>
      </div>
    </div>
  );
};

export default ExperienceCard;
