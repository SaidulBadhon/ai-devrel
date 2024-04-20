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
  image,
  _id,
}) => {
  return (
    <Link
      className="relative rounded-lg border border-cyan-900/0 bg-white p-4 transition-all hover:border-cyan-900/50 hover:bg-cyan-600/5"
      href={`/docs/${_id}`}
    >
      <img
        src={image}
        alt={title}
        height={200}
        style={{
          objectFit: "cover",
          objectPosition: "center",
          borderRadius: "0.5rem",
        }}
      />

      <h4 className="mt-2 text-lg font-semibold">{title}</h4>
      <p className="text-sm">{description}</p>
    </Link>
  );
};

export default ProjectItem;
