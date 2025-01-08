import Links from "./Links";

function ProjectDesc({ id, title, description, links = [] }) {
  return (
    <div id={id} className="flex flex-col py-4">
      <h1 className="font-bold">{title}</h1>
      <p>{description}</p>
      <Links linksList={links} />
    </div>
  );
}

export default ProjectDesc;
