import Link from "next/link";

interface ProjectItemProps {
  title: string;
  description: string;
  image: string;
  _id: string;
}

const ProjectItem: React.FC<ProjectItemProps> = ({
  title,
  description,
  // image,
  _id,
}) => {
  return (
    <div className="relative rounded-lg border border-gray-300 bg-white p-4 transition-all  dark:bg-gray-900">
      <h4 className="text-sm font-semibold text-black dark:text-white">
        {title}
      </h4>
      <p className="mt-1 text-xs font-medium text-black/70 dark:text-white/70">
        {description}
      </p>
      <h6 className="mt-6 text-sm font-medium text-gray-900 dark:text-gray-400">
        Source
      </h6>
      <Link href={`/docs/${_id}`}>
        <div className="flex items-center justify-between gap-4 text-xs text-black/60 dark:text-white/60">
          <p>aidevrel/docs/{_id}</p>{" "}
          <i className="fa-solid fa-arrow-up-right-from-square"></i>
        </div>
      </Link>
      <Link href={`/docs/${_id}`}>
        <button className="mt-2 flex h-7 w-full items-center justify-center gap-1 rounded-md bg-slate-200 py-1 text-xs text-black transition-all duration-200 hover:gap-2 hover:bg-slate-300/70 dark:bg-slate-700 dark:text-white/90 dark:hover:bg-slate-800">
          Open Project <i className="fa-solid fa-arrow-right"></i>
        </button>
      </Link>
    </div>
  );
};

export default ProjectItem;
