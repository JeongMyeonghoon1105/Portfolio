import "../styles/App.css";
import "../styles/Projects.css"

function Projects() {
  return (
    <div className={ "project-body" }>
      <p style={{ "font-weight": "bold", "font-size": "4rem" }}>Projects</p>
      <div>
        <div style={{ "display": "flex", "font-weight": "bold", "font-size": "2rem", "line-height": "40px !important" }}>
          <div>1. 코딩랩학원 웹사이트</div>
          <a href="http://동탄코딩랩.com" className={ "link" } target={ "_blank" }>
            바로가기
          </a>
          <a href="https://github.com/JeongMyeonghoon1105/CodingLab" className={ "link" } target={ "_blank" }>
            Github
          </a>
        </div>
        <br></br><br></br>
        <img src="https://github.com/JeongMyeonghoon1105/Images/blob/main/CodingLab.png?raw=true" alt=""></img>
        <p style={{ "font-weight": "bold", "font-size": "1.5rem" }}>
          Technology
        </p>
        <hr></hr>
        <p style={{ "font-weight": "bold", "font-size": "1.2rem" }}>Frontend</p>
        <ul style={{ "line-height": "1.5rem" }}><li>jQuery</li></ul>
        <p style={{ "font-weight": "bold", "font-size": "1.2rem" }}>Backend</p>
        <ul style={{ "line-height": "1.5rem" }}>
          <li>Node.js express</li>
          <li>MySQL</li>
          <li>Ubuntu Server</li>
        </ul>
      </div>
    </div>
  );
}

export default Projects;
