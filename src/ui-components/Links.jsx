function Links({ linksList }) {
  if (linksList.length > 0) {
    return (
      <div className="flex flex-wrap gap-x-3 gap-y-0">
        {linksList.map((link, index) => {
          let Icon;
          switch (link.text.toLowerCase()) {
            case "github":
              Icon = (
                <svg
                  height="24"
                  viewBox="0 0 1792 1792"
                  width="24"
                  xmlns="http://www.w3.org/2000/svg"
                  stroke="currentColor"
                >
                  <path
                    d="M1664 896q0 251-146.5 451.5t-378.5 277.5q-27 5-39.5-7t-12.5-30v-211q0-97-52-142 57-6 102.5-18t94-39 81-66.5 53-105 20.5-150.5q0-121-79-206 37-91-8-204-28-9-81 11t-92 44l-38 24q-93-26-192-26t-192 26q-16-11-42.5-27t-83.5-38.5-86-13.5q-44 113-7 204-79 85-79 206 0 85 20.5 150t52.5 105 80.5 67 94 39 102.5 18q-40 36-49 103-21 10-45 15t-57 5-65.5-21.5-55.5-62.5q-19-32-48.5-52t-49.5-24l-20-3q-21 0-29 4.5t-5 11.5 9 14 13 12l7 5q22 10 43.5 38t31.5 51l10 23q13 38 44 61.5t67 30 69.5 7 55.5-3.5l23-4q0 38 .5 89t.5 54q0 18-13 30t-40 7q-232-77-378.5-277.5t-146.5-451.5q0-209 103-385.5t279.5-279.5 385.5-103 385.5 103 279.5 279.5 103 385.5z"
                    fill="#fff"
                  />
                </svg>
              );
              break;
            default:
              Icon = (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13.19 8.688a4.5 4.5 0 0 1 1.242 7.244l-4.5 4.5a4.5 4.5 0 0 1-6.364-6.364l1.757-1.757m13.35-.622 1.757-1.757a4.5 4.5 0 0 0-6.364-6.364l-4.5 4.5a4.5 4.5 0 0 0 1.242 7.244"
                  />
                </svg>
              );
          }

          return (
            <a
              href={link.source}
              key={index}
              target="_blank"
              rel="noreferrer noopener"
              className="inline-flex hover:text-gray-200 my-1 hover:border-gray-200 p-1 border-2 border-gray-400"
            >
              <div className="flex flex-row space-x-2">
                <span>{link.text}</span>
                {Icon}
              </div>
            </a>
          );
        })}
      </div>
    );
  }
  return null;
}

export default Links;
