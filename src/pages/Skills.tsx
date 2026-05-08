import { Skills } from "../data/Skills";

const SkillsPage = () => {
  return (
    <section className="mt-20 dark:text-white">
      <span className="font-medium">Skills</span>

      <div className="flex flex-col gap-4 mt-4">
        {Skills.map((skill, i) => (
          <div
            key={i}
            className="flex flex-col md:flex-row md:items-start gap-3"
          >
            <div className="min-w-[100px] dark:text-white">{skill.name} :</div>
            <div className="flex items-center flex-wrap gap-2 text-zinc-600 dark:text-zinc-400">
              {skill.techStack.map((tech, i) => (
                <span key={i} className="text-[12px]">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SkillsPage;
