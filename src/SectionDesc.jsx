import Links from "./Links";
import TechBadges from "./TechBadges";

function SectionDesc({
  id,
  title,
  description,
  links = [],
  tech = [],
  timePeriod,
}) {
  return (
    <div id={id} className="flex flex-col py-6 space-y-3">
      <div>
        <h1 className="font-bold">{title}</h1>
        {timePeriod && (
          <div className="text-sm text-gray-200">
            <span className="sans-font">{timePeriod}</span>
          </div>
        )}
      </div>
      <p>{description}</p>
      {links.length > 0 && <Links linksList={links} />}
      {tech.length > 0 && <TechBadges techList={tech} />}
    </div>
  );
}

export default SectionDesc;
