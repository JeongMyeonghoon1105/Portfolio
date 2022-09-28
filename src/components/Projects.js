import "../styles/Projects.css"
import Individual from "./Individual.js"

function Projects() {
  return (
    <div className={ "project-body" } id={ "projects-container" }>
      <p className={ "proj-title" }>Projects</p>
      <div>
        <Individual
          title="1. 코딩랩학원 웹사이트"
          url="http://동탄코딩랩.com"
          github="https://github.com/JeongMyeonghoon1105/CodingLab"
          img="https://github.com/JeongMyeonghoon1105/Images/blob/main/CodingLab.png?raw=true"
        />
        <p className={ "proj-subtitle" }>Frontend</p>
        <ul className={ "proj-content" }><li>jQuery</li></ul>
        <p className={ "proj-subtitle" }>Backend</p>
        <ul className={ "proj-content" }>
          <li>Node.js express</li>
          <li>MySQL</li>
          <li>Ubuntu Server</li>
        </ul>
      </div>
    </div>
  );
}

export default Projects;
