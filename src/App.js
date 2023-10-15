import React from "react";

const App = () => {
  const portfolioData = {
    name: "ANKITA PANDEY",
    reg:"21BCE1033",
    place: "JHARKHAND, India",
    skills: ["Machine learning", "Web Development","Public Speaking","Debate","Event Management", "Singing", "Social Work"],
    projects: [
      {
        title: "-CITEIT | AI based article recommendation to increase the citation index",
        description: "Ongoing AI-ML project to increase the citation index of a particular organisation, an intelligence model to identify the relevant articles with respect to the sentences in the article.",
      },
      {
        title: "-STRENGTHEN | Password Stregnth Analyzer",
        description: "Python-based evaluation system for password strength analysis that also offers suggestions for improvement",
      },
      
    ],
  };

  return (
    <div className="portfolio">
      <div className="frame">
        <div className="header">
          <h1>{portfolioData.name}</h1>
          <h2><u>REGISTRATION NUMBER:</u> {portfolioData.reg}</h2>
          <h2><u>PLACE:</u> {portfolioData.place}</h2>
        </div>
        <div className="body">
          <div className="about">
            <h3><u>ABOUT ME</u></h3>
            <p>I am a third-year computer science student at Vellore Institute of Technology, with a passion for AI, ML, and web development. Proven coding skills as well as excellent communication and teamwork skills. 
              Seeking opportunities to apply my knowledge and skills to solve real-world problems and make a positive impact.
              </p>
          </div>
          <div className="skills">
            <h3><u>SKILLS</u></h3>
            <ul>
              {portfolioData.skills.map((skill) => (
                <li key={skill}>{skill}</li>
              ))}
            </ul>
          </div>
          <div className="projects">
            <h3><u>PROJECTS</u></h3>
            {portfolioData.projects.map((project) => (
              <ul>
                <div className="project" key={project.title}>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
              </div>
              </ul>
              
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;