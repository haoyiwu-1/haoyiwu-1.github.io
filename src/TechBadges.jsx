function TechBadges({ techList }) {
  if (techList.length > 0) {
    return (
      <div className="flex flex-wrap gap-y-1 gap-x-1">
        {techList.map((tech, index) => {
          return (
            <span
              key={index}
              className="rounded-3xl border-none bg-blue-950 text-blue-300 py-1 px-3 text-xs sm:text-sm"
            >
              {tech}
            </span>
          );
        })}
      </div>
    );
  }
}

export default TechBadges;
