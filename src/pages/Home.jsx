import projects from "../data/projects.json";
import Footer from "../ui-components/Footer.jsx";
import Navbar from "../ui-components/Navbar.jsx";
import SectionDesc from "../ui-components/SectionDesc.jsx";

function Home() {
  return (
    <div className="bg-gradient-to-r from-cyan-900 to-blue-900 sora-font min-h-screen flex flex-col">
      <Navbar />
      <div className="flex flex-col items-center flex-grow">
        <div className="section space-y-3">
          <h1 className="font-bold text-3xl">WenHao Wu</h1>
          <h1 className="font-bold text-xl">Software Developer</h1>
        </div>
        <div className="space-y-16">
          <div id="about" className="section">
            <h1 className="uppercase font-bold">About</h1>
            <div className="mt-4 space-y-3">
              <p>
                I'm an early-career developer passionate about expanding my
                skill set and deepening my understanding of the tech industry. I
                hold an Honours Bachelor of Science in Computer Science, which
                has equipped me with a solid foundation in algorithms, software
                development, and problem solving.
              </p>
              <p>
                In the past, I've contributed to two startups where I helped
                develop web applications integrated with AI technologies. I am
                currently working at Englobe where my primary focus is general
                automation.
              </p>
              <p>
                Outside of work, I'm often at the gym setting new personal
                records, playing chess, or spending quality time with my cat.
              </p>
            </div>
          </div>
          <div id="experience" className="section">
            <h1 className="uppercase font-bold">Experience</h1>
            <SectionDesc
              id="exp-1"
              title={
                <>
                  Automation Developer{" "}
                  <span className="font-sans mx-1">&#x2022;</span> Englobe
                </>
              }
              description="
              At Englobe, I focus on improving operational reliability and team efficiency through automation. I developed systems to monitor field units across two offices and alert relevant teams of potential data issues, significantly reducing data loss. I also built an air quality notification system for a client that generated $12,000 in profit. Additionally, I created tools to automate the production of various reports and designed user-friendly guides, enabling non-technical team members to leverage these solutions independently. Overall, my work has enhanced workflows, improved data accuracy, and increased operational oversight.
              "
              tech={[
                "Python",
                "Selenium",
                "pandas",
                "openpyxl",
                "xlwings",
                "APIs",
              ]}
              timePeriod={"March 2025 - Present"}
            />
            <SectionDesc
              id="exp-1"
              title={
                <>
                  Web Developer <span className="font-sans mx-1">&#x2022;</span>{" "}
                  Convia
                </>
              }
              description="
              Developed UI features with a focus on performance and cross-device compatibility. Optimized site responsiveness by implementing responsive design principles, ensuring a seamless user experience across all screen sizes.
              "
              tech={["Elixir", "JavaScript", "Tailwind CSS"]}
              timePeriod={"Oct 2024 - Dec 2024"}
            />
            <SectionDesc
              id="exp-2"
              title={
                <>
                  Web Developer <span className="font-sans mx-1">&#x2022;</span>{" "}
                  Shopr Live Inc.
                </>
              }
              description="
              Enhanced the end-user experience by implementing responsive UI features. Translated Figma designs into functional and user-friendly product pages. Optimized site performance through lazy loading, CSS sprite sheets, and image compression, achieving faster page load times.
              "
              tech={[
                "Ruby",
                "Ruby on Rails",
                "JavaScript",
                "Stimulus.js",
                "Tailwind CSS",
                "HTML",
              ]}
              timePeriod={"June 2023 - June 2024"}
            />
            <a
              className="flex flex-row items-center space-x-2 font-bold underline max-w-max"
              href="resources/Resume_-_WenHao_Wu.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              <h1 className="text-hover">Resume</h1>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="24px"
                viewBox="0 -960 960 960"
                width="24px"
                fill="#FFFFFF"
                className="size-5 sm:size-6"
              >
                <path d="M647-440H160v-80h487L423-744l57-56 320 320-320 320-57-56 224-224Z" />
              </svg>
            </a>
          </div>

          <div id="projects" className="section">
            <h1 className="uppercase font-bold">Projects</h1>
            {projects.slice(0, 4).map((project, index) => (
              <SectionDesc
                key={index}
                id={`proj-${index}`}
                title={project.title}
                description={project.description}
                links={project.links}
                tech={project.tech}
              />
            ))}
            <a
              className="flex flex-row space-x-2 font-bold underline max-w-max"
              href="/#/projects"
              onClick={() => window.scrollTo(0, 0)}
            >
              <h1 className="text-hover">All Projects</h1>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="24px"
                viewBox="0 -960 960 960"
                width="24px"
                fill="#FFFFFF"
                className="size-5 sm:size-6"
              >
                <path d="M647-440H160v-80h487L423-744l57-56 320 320-320 320-57-56 224-224Z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center py-8">
        <img
          src="/resources/Cat.jpg"
          alt="Cat"
          className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 max-w-lg px-4"
        />
        <div className="py-2 text-center text-lg text-white">
          <p>Picture of my cat</p>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Home;
