import './index.css'
import Navbar from './Navbar.jsx';
import ProjectDesc from './ProjectDesc.jsx';

function App() {
  const projectsList = [
    "Data Mining Project",
    "Big Data Analytics",
    "SmartShoppers",
    "Tic-Tac-Toe",
    "Rock-Paper-Scissors",
    "Basic GPA Calculator"
  ]

  return (
    <div className="bg-gradient-to-r from-cyan-900 to-blue-900 sora-font min-h-screen">
      <Navbar projects={projectsList} />
      <div className="flex flex-col space-y-16 items-center">
        <div className="section space-y-3">
          <h1 className="font-bold text-3xl">WenHao Wu</h1>
          <h1 className="font-bold text-xl">Web Developer</h1>
        </div>
        <div className="section">
          <h1 className="uppercase font-bold">About</h1>
          <p>I'm a developer that is early in my career looking to develop new skills and learn more about the industry.</p>
          <p>In the past, I've worked at two startups focused on the development of web apps that have AI integrated into them.</p>
          <p>In my free time, I'm typically at the gym working out, or playing with my cat.</p>
        </div>
        <div className="section">
          <h1 className="uppercase font-bold">Experience</h1>
        </div>
        <div className="section">
          <h1 className="uppercase font-bold">Projects</h1>
          <ProjectDesc
            title={projectsList[0]}
            description="
          This is a portion of a project I had done for my data mining class. I had to do clustering analysis on a dataset. I chose to do K-Means clustering on the dataset to find hidden relationships between the dimensions of the dataset. There was some pre-processing done on the dataset before it could be used, and many more small details not mentioned here. The link below allows you to access the source code and run it for yourself using Google Colab where the project is described in much more detail. The ipynb file can be download to get a copy of the source code if needed. Created using Pandas, Scikit-learn, and Matplotlib in Python.
          "
          />

          <ProjectDesc
            title={projectsList[1]}
            description="
          This was a project which involves big data analytics using Python on a single machine. The dataset which the analytics were performed on were a subset of Yelp's businesses, review, and user data. The dataset can be found and downloaded from Kaggle here. For this project, I created four programs to perform big data analytics on the dataset mentioned above. The first program (descriptive-analytics.py) does descriptive analytics on the dataset. The second program (frequency-distributions.py) computes useful frequency distributions from the dataset. The third program (social-network.py) performs-basic network analytics on the constructed social network from the third program. To find out how to use and explore the programs please refer to the GitHub link below. Created using Pandas, networkx, and Matplotlib in Python.
          " />

          <ProjectDesc
            title={projectsList[2]}
            description="
          This was an application that I created for my software design class. The purpose of the project was to implement a system that we designed beforehand using some software design patterns. The front-end is very basic as it wasn't the focus for this project and because of time constraints. The application allows users to browse items in stores, and managers and administrators to manage said stores. There was no requirement for the use of a database, so I utilized serialization and text files to mimic a database. As this project was for a software design class, the emphasis was on the software design and not the functionality of the application so input validation was not necessary, so reasonable and logical inputs work best when exploring this application. Created the front-end using Java Swing, and obviously Java was used for the back-end. Testing of the application was done using test cases in JUnit to cover all back-end functionality and to help discover any possible bugs.
          " />

          <ProjectDesc
            title={projectsList[3]}
            description="
          Rock-Paper-Scissors where player is playing against the computer. The computer chooses randomly so there is no intelligence behind it. The game is decided in a best of 5 (first to 3 wins) and the round history is shown. The game will automatically restart 15 seconds after the game ends or it can be manually reset/restart using the 'Restart/Reset' button. Created using HTML, CSS, Bootstrap 5, and some JavaScript.
          " />

          <ProjectDesc
            title={projectsList[4]}
            description="
          This is a simple GPA calculator that I created to help me calculate my GPA during my time in university. My university used a 9.0 point scaling system for GPA calculation, but the 4.0 scale is the most commonly used GPA scale so I included that in my calculator as well. This GPA calculator was created using HTML, CSS, Bootstrap 5, and some JavaScript.
          " />
        </div>
      </div>
    </div>
  )
}

export default App
