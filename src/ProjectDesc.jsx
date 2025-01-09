import Links from "./Links";
import TechBadges from "./TechBadges";

function ProjectDesc({ id, title, description, links = [], tech = [] }) {
  return (
    <div id={id} className="flex flex-col py-6 space-y-3">
      <h1 className="font-bold">{title}</h1>
      <p>{description}</p>
      <Links linksList={links} />
      <TechBadges techList={tech} />
    </div>
  );
}

export default ProjectDesc;
