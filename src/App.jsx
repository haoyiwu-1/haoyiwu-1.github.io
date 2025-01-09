import "./index.css";
import Navbar from "./Navbar.jsx";
import ProjectDesc from "./ProjectDesc.jsx";

function App() {
  const projectsList = [
    "Data Mining Project",
    "Big Data Analytics Project",
    "SmartShoppers",
    "Tic-Tac-Toe",
    "Rock-Paper-Scissors",
    "Basic GPA Calculator",
  ];

  return (
    <div className="bg-gradient-to-r from-cyan-900 to-blue-900 sora-font min-h-screen">
      <Navbar projects={projectsList} />
      <div className="flex flex-col items-center">
        <div className="section space-y-3">
          <h1 className="font-bold text-3xl">WenHao Wu</h1>
          <h1 className="font-bold text-xl">Web Developer</h1>
        </div>
        <div className="space-y-16">
          <div id="about" className="section">
            <h1 className="uppercase font-bold">About</h1>
            <p>
              I'm a developer in the early stages of my career, eager to expand
              my skill set and deepen my understanding of the tech industry. I
              have a Honours Bachelor of Science in Computer Science, providing
              me with a strong foundation in algortihms, software development,
              and problem solving.
            </p>
            <p>
              In the past, I've worked at two startups where I contributed to
              the development of web applications integrated with AI
              technologies.
            </p>
            <p>
              Outside of work, you can find me at the gym, setting new PRs and
              achieving my fitness goals, or spending quality time with my cat.
            </p>
          </div>
          <div className="section">
            <h1 className="uppercase font-bold">Experience</h1>
          </div>
          <div className="section">
            <h1 className="uppercase font-bold">Projects</h1>
            <ProjectDesc
              id="proj-0"
              title={projectsList[0]}
              description="
              This is a portion of a project I had done for my data mining class. I had to do clustering analysis on a dataset. I chose to do K-Means clustering on the dataset to find hidden relationships between the dimensions of the dataset. There was some pre-processing done on the dataset before it could be used, and many more small details not mentioned here. The link below allows you to access the source code and run it for yourself using Google Colab where the project is described in much more detail. The ipynb file can be download to get a copy of the source code if needed.
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

            <ProjectDesc
              id="proj-1"
              title={projectsList[1]}
              description="
              This was a project which involves big data analytics using Python on a single machine. The dataset which the analytics were performed on were a subset of Yelp's businesses, review, and user data. For this project, I created four programs to perform big data analytics on the dataset mentioned above. The first program (descriptive-analytics.py) does descriptive analytics on the dataset. The second program (frequency-distributions.py) computes useful frequency distributions from the dataset. The third program (social-network.py) performs-basic network analytics on the constructed social network from the third program. To find out how to use and explore the programs please refer to the GitHub link below.
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

            <ProjectDesc
              id="proj-2"
              title={projectsList[2]}
              description="
              This was an application that I created for my software design class. The purpose of the project was to implement a system that we designed beforehand using some software design patterns. The front-end is very basic as it wasn't the focus for this project and because of time constraints. The application allows users to browse items in stores, and managers and administrators to manage said stores. There was no requirement for the use of a database, so I utilized serialization and text files to mimic a database. As this project was for a software design class, the emphasis was on the software design and not the functionality of the application so input validation was not necessary, so reasonable and logical inputs work best when exploring this application. Created the front-end using Java Swing, and obviously Java was used for the back-end. Testing of the application was done using test cases in JUnit to cover all back-end functionality and to help discover any possible bugs.
              "
              links={[
                {
                  source:
                    "https://haoyiwu-1.github.io/resources/SmartShoppersApp.jar",
                  text: "Jar file",
                },
                {
                  source:
                    "https://haoyiwu-1.github.io/resources/SmartShoppers.exe",
                  text: "Executable file",
                },
                {
                  source: "https://github.com/haoyiwu-1/SmartShoppers",
                  text: "GitHub",
                },
              ]}
              tech={["Java Swing", "Java", "JUnit"]}
            />

            <ProjectDesc
              id="proj-3"
              title={projectsList[3]}
              description="
              Tic-Tac-Toe for two human players on the same computer. The first player is 'X' and the second player will be 'O'. The game will automatically restart 5 seconds after the game ends or it can be manually reset/restart using the 'Restart/Reset' button.
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

            <ProjectDesc
              id="proj-4"
              title={projectsList[4]}
              description="
              Rock-Paper-Scissors where player is playing against the computer. The computer chooses randomly so there is no intelligence behind it. The game is decided in a best of 5 (first to 3 wins) and the round history is shown. The game will automatically restart 15 seconds after the game ends or it can be manually reset/restart using the 'Restart/Reset' button.
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

            <ProjectDesc
              id="proj-5"
              title={projectsList[5]}
              description="
              This is a simple GPA calculator that I created to help me calculate my GPA during my time in university. My university used a 9.0 point scaling system for GPA calculation, but the 4.0 scale is the most commonly used GPA scale so I included that in my calculator as well.
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
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
