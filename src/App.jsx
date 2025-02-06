import "./index.css";
import Navbar from "./Components/Navbar.jsx";
import SectionDesc from "./Components/SectionDesc.jsx";
import Footer from "./Components/Footer.jsx";

function App() {
  const projectsList = [
    "React Crypto Web App",
    "Trivify",
    "Big Data Analytics Project",
    "Data Mining Project",
    "SmartShoppers",
    "Tic-Tac-Toe",
    "Basic GPA Calculator",
    "Rock-Paper-Scissors",
  ];

  return (
    <div className="bg-gradient-to-r from-cyan-900 to-blue-900 sora-font min-h-screen flex flex-col">
      <Navbar projects={projectsList} />
      <div className="flex flex-col items-center flex-grow">
        <div className="section space-y-3">
          <h1 className="font-bold text-3xl">WenHao Wu</h1>
          <h1 className="font-bold text-xl">Web Developer</h1>
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
                develop web applications integrated with AI technologies.
              </p>
              <p>
                Outside of work, I'm often at the gym setting new personal
                records or spending quality time with my cat.
              </p>
            </div>
          </div>
          <div id="experience" className="section">
            <h1 className="uppercase font-bold">Experience</h1>
            <SectionDesc
              id="exp-1"
              title={
                <>
                  Web Developer <span className="font-sans mx-1">&#x2022;</span>{" "}
                  Shopr Live Inc.
                </>
              }
              titleLink="https://askshopr.com/"
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
            <SectionDesc
              id="exp-2"
              title={
                <>
                  Web Developer <span className="font-sans mx-1">&#x2022;</span>{" "}
                  Convia
                </>
              }
              titleLink="https://convia.io/"
              description="
              Developed UI features with a focus on performance and cross-device compatibility. Optimized site responsiveness by implementing responsive design principles, ensuring a seamless user experience across all screen sizes.
              "
              tech={["Elixir", "JavaScript", "Tailwind CSS"]}
              timePeriod={"Oct 2024 - Dec 2024"}
            />
            <a
              className="flex-row space-x-2 font-bold underline max-w-max hidden"
              href="resources/Resume_-_WenHao_Wu.pdf"
              target="_blank"
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

          <div className="section">
            <h1 className="uppercase font-bold">Projects</h1>
            <SectionDesc
              id="proj-0"
              title={projectsList[0]}
              description="
              A responsive web app delivering up-to-date data on popular cryptocurrencies, updating every minute for near real-time tracking. It features a clean, user-friendly design optimized for all devices, with a dark mode for enhanced usability and customizable viewing preferences. GitHub Workflows is configured for automated deployment, ensuring efficient updates and keeping the app current with minimal effort.
              "
              links={[
                {
                  source: "https://haoyiwu-1.github.io/react-crypto-app/",
                  text: "Live Demo",
                },
                {
                  source: "https://github.com/haoyiwu-1/react-crypto-app",
                  text: "GitHub",
                },
              ]}
              tech={["React", "Tailwind CSS", "CoinCap API 2.0"]}
            />

            <SectionDesc
              id="proj-1"
              title={projectsList[1]}
              description="
              An engaging trivia quiz web app with dynamic questions sourced from the Open Trivia Database API. Designed with a clean, user-friendly interface and interactive features, it offers a smooth and enjoyable user experience. Optimized for seamless performance across devices, the app provides a fully responsive interface. GitHub Workflows is set up to automate deployments, streamlining updates and ensuring the app remains consistently up to date.
              "
              links={[
                {
                  source: "https://haoyiwu-1.github.io/Trivify/",
                  text: "Live Demo",
                },
                {
                  source: "https://github.com/haoyiwu-1/Trivify",
                  text: "GitHub",
                },
              ]}
              tech={[
                "React",
                "Material UI",
                "React Hook Form",
                "Tailwind CSS",
                "he",
                "Open Trivia Database API",
              ]}
            />

            <SectionDesc
              id="proj-2"
              title={projectsList[2]}
              description="
              This project involves big data analytics using Python on a single machine. The analytics were performed on a subset of Yelp's business, review, and user data. I developed four programs to analyze the dataset. The first program, descriptive-analytics.py, performs descriptive analytics on the dataset. The second program, frequency-distributions.py, computes useful frequency distributions from the data. The third program, social-network.py, creates a social network of Yelp friends from the data. The fourth and final program, network-analytics.py, performs basic network analytics on the constructed social network from the third program. For instructions on how to use and explore the programs, please refer to the GitHub link below.
              "
              links={[
                {
                  source: "https://github.com/haoyiwu-1/BigDataAnalytics",
                  text: "GitHub",
                },
                {
                  source:
                    "https://www.kaggle.com/datasets/yelp-dataset/yelp-dataset/versions/3",
                  text: "Kaggle Dataset",
                },
              ]}
              tech={["Pandas", "networkx", "Matplotlib", "Python"]}
            />

            <SectionDesc
              id="proj-3"
              title={projectsList[3]}
              description="
              This is a portion of a project I completed for my data mining class, where I performed clustering analysis on a dataset. I used K-Means clustering to uncover hidden relationships between the dataset's dimensions. Some pre-processing was required before the dataset could be used, along with other smaller details not mentioned here. The link below provides access to the source code, which can be run on Google Colab. The project is described in much more detail there, and you can download the .ipynb file for a copy of the source code if needed.
              "
              links={[
                {
                  source:
                    "https://colab.research.google.com/drive/1Zkyd8Ew9nO5dvCJGr0mvcRVmxpApwalg?usp=sharing",
                  text: "Live Demo",
                },
              ]}
              tech={["Pandas", "Scikit-learn", "Matplotlib", "Python"]}
            />

            <SectionDesc
              id="proj-4"
              title={projectsList[4]}
              description="
              This application was created for my software design class, where the goal was to implement a system based on a design  we developed using software design patterns. The front-end is basic, as the focus of the project was on software design, and time constraints limited its development. The app allows users to browse items in stores, and store managers and administrators to manage those stores. Without a requirement for a database, I used serialization and text files to simulate one. Input validation was not a focus, so reasonable inputs work best when exploring the app. The front-end was developed using Java Swing, with Java powering the back-end. I tested the application with JUnit test cases to cover all back-end functionality and identify potential bugs.
              "
              links={[
                {
                  source:
                    "https://haoyiwu-1.github.io/old-portfolio/resources/SmartShoppersApp.jar",
                  text: "Jar file",
                },
                {
                  source:
                    "https://haoyiwu-1.github.io/old-portfolio/resources/SmartShoppers.exe",
                  text: "Executable file",
                },
                {
                  source: "https://github.com/haoyiwu-1/SmartShoppers",
                  text: "GitHub",
                },
              ]}
              tech={["Java Swing", "Java", "JUnit"]}
            />

            <SectionDesc
              id="proj-5"
              title={projectsList[5]}
              description="
              Tic-Tac-Toe for two players on the same computer. The first player is 'X' and the second player is 'O'. The game automatically restarts 5 seconds after it ends, or players can manually reset/restart it using the 'Restart/Reset' button.
              "
              links={[
                {
                  source: "https://haoyiwu-1.github.io/Tic-Tac-Toe/",
                  text: "Live Demo",
                },
                {
                  source: "https://github.com/haoyiwu-1/Tic-Tac-Toe",
                  text: "GitHub",
                },
              ]}
              tech={["HTML", "CSS", "Bootstrap 5", "JavaScript"]}
            />

            <SectionDesc
              id="proj-6"
              title={projectsList[6]}
              description="
              This is a simple GPA calculator I created during university to calculate my GPA. My university used a 9.0-point scale, but I also included the more commonly used 4.0 scale for broader applicability. I updated the calculator to make it more visually appealing and mobile-friendly, enhancing its usability across devices.
              "
              links={[
                {
                  source: "https://haoyiwu-1.github.io/GPACalculator/",
                  text: "Live Demo",
                },
                {
                  source: "https://github.com/haoyiwu-1/GPACalculator",
                  text: "GitHub",
                },
              ]}
              tech={["HTML", "CSS", "Bootstrap 5", "JavaScript"]}
            />

            <SectionDesc
              id="proj-7"
              title={projectsList[7]}
              description="
              Rock-Paper-Scissors where player competes against the computer, which makes random choices with no underlying logic/intelligence. The game is played in a best-of-5 format (first to three wins), with the round history displayed. After the game ends, it automatically restarts  after 15 seconds, or players can manually reset/restart it using the 'Restart/Reset' button.
              "
              links={[
                {
                  source: "https://haoyiwu-1.github.io/Rock-Paper-Scissors/",
                  text: "Live Demo",
                },
                {
                  source: "https://github.com/haoyiwu-1/Rock-Paper-Scissors",
                  text: "GitHub",
                },
              ]}
              tech={["HTML", "CSS", "Bootstrap 5", "JavaScript"]}
            />
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

export default App;
