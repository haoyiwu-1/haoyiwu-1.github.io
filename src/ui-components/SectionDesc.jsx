import Links from "./Links";
import TechBadges from "./TechBadges";

function SectionDesc({
  id,
  title,
  description,
  links = [],
  tech = [],
  timePeriod,
  titleLink,
}) {
  return (
    <div id={id} className="flex flex-col py-6 space-y-3">
      <div>
        {titleLink ? (
          <h1 className="font-bold">
            <a href={titleLink} target="_blank" className="title-link">
              {title}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="20px"
                viewBox="0 -960 960 960"
                width="20px"
                fill="#FFFFFF"
                className="size-5"
              >
                <path d="M216-144q-29.7 0-50.85-21.15Q144-186.3 144-216v-528q0-29.7 21.15-50.85Q186.3-816 216-816h264v72H216v528h528v-264h72v264q0 29.7-21.15 50.85Q773.7-144 744-144H216Zm171-192-51-51 357-357H576v-72h240v240h-72v-117L387-336Z" />
              </svg>
            </a>
          </h1>
        ) : (
          <h1 className="font-bold">{title}</h1>
        )}
        {timePeriod && (
          <div className="text-sm text-gray-200">
            <span className="sans-font">{timePeriod}</span>
          </div>
        )}
      </div>
      <p>{description}</p>
      {links.length > 0 && <Links linksList={links} />}
      {tech.length > 0 && <TechBadges techList={tech} />}
      <hr />
    </div>
  );
}

export default SectionDesc;
