import "../styles/App.css";

function Projects() {
  return (
    <div style={{ margin: "100px 70px", width: "100%", "min-height": "700px" }}>
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
        <a href="http://동탄코딩랩.com">http://동탄코딩랩.com</a>
        <br></br>
        <br></br>
        <p style={{ "font-weight": "bold", "font-size": "1.5rem" }}>
          사용 기술
        </p>
        <p style={{ "font-weight": "bold", "font-size": "1.2rem" }}>Frontend</p>
        jQuery
        <p style={{ "font-weight": "bold", "font-size": "1.2rem" }}>Backend</p>
        Node.js express MySQL Ubuntu Server
        <br></br>
        <p style={{ "font-weight": "bold", "font-size": "1.5rem" }}>
          상세 정보
        </p>
        <a href="https://github.com/JeongMyeonghoon1105/CodingLab">
          https://github.com/JeongMyeonghoon1105/CodingLab
        </a>
        <br></br>
      </div>
    </div>
  );
}

export default Projects;
