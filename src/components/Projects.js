import "../styles/App.css";

function Projects() {
  return (
    <div
      style={{
        margin: "100px 70px",
        "padding-bottom": "100px",
        width: "100%",
        "min-height": "700px",
      }}
    >
      <p style={{ "font-weight": "bold", "font-size": "4rem" }}>Projects</p>
      <div>
        <p style={{ "font-weight": "bold", "font-size": "2rem" }}>
          1. 코딩랩학원 웹사이트
        </p>
        <img
          src="https://github.com/JeongMyeonghoon1105/Images/blob/main/CodingLab.png?raw=true"
          alt=""
          style={{ width: "1000px" }}
        ></img>
        <p style={{ "font-weight": "bold", "font-size": "1.5rem" }}>URL</p>
        <hr></hr>
        <a href="http://동탄코딩랩.com">http://동탄코딩랩.com</a>
        <br></br>
        <br></br>
        <p style={{ "font-weight": "bold", "font-size": "1.5rem" }}>
          Technology
        </p>
        <hr></hr>
        <p style={{ "font-weight": "bold", "font-size": "1.2rem" }}>Frontend</p>
        <ul>
          <li>jQuery</li>
        </ul>
        <p style={{ "font-weight": "bold", "font-size": "1.2rem" }}>Backend</p>
        <ul>
          <li>Node.js express</li>
          <li>MySQL</li>
          <li>Ubuntu Server</li>
        </ul>
        <br></br>
        <p style={{ "font-weight": "bold", "font-size": "1.5rem" }}>Details</p>
        <hr></hr>
        <a href="https://github.com/JeongMyeonghoon1105/CodingLab">
          https://github.com/JeongMyeonghoon1105/CodingLab
        </a>
        <br></br>
      </div>
    </div>
  );
}

export default Projects;
