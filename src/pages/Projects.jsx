import projects from "../data/projects.json";
import Footer from "../ui-components/Footer.jsx";
import Navbar from "../ui-components/Navbar.jsx";
import SectionDesc from "../ui-components/SectionDesc.jsx";

function Projects({ projectsList }) {
  return (
    <div className="bg-gradient-to-r from-cyan-900 to-blue-900 sora-font min-h-screen flex flex-col">
      <Navbar projects={projectsList} />
      <div className="flex flex-col items-center flex-grow">
        <div className="section">
          <h1 className="uppercase font-bold text-3xl">All Projects</h1>
          {projects.map((project, index) => (
            <SectionDesc
              key={index}
              id={`proj-${index}`}
              title={project.title}
              description={project.description}
              links={project.links}
              tech={project.tech}
            />
          ))}
        </div>
      </div>
      <div className="flex flex-col space-y-6 text-center text-white py-20 sm:py-24 md:py-28 lg:py-32 2xl:py-48 px-4">
        <h1 className="text-4xl">More Projects Coming Soon!</h1>
        <p className="text-xl">
          Currently working on exciting things. Come back soon to see what I've
          been up to!
        </p>
      </div>
      <Footer />
    </div>
  );
}

export default Projects;
