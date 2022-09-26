import '../styles/App.css';

function Projects() {
  return (
    <div style={{ margin: "100px 70px", width: "100%", "min-height": "700px" }}>
      <p style={{ "font-weight": "bold", "font-size": "4rem" }}>
        Projects
      </p>
      <div>
        <p>1. 코딩랩학원 웹사이트</p>
        <img src = "https://github.com/JeongMyeonghoon1105/Images/blob/main/CodingLab.png?raw=true" alt="" style={{ width: "500px" }}></img>
        <p>URL</p>
        <a>http://동탄코딩랩.com</a><br></br>
        <p>사용 기술</p>
        <p>Frontend</p>
        <p>Backend</p>
        <p>상세 정보</p>
        <a>https://github.com/JeongMyeonghoon1105/CodingLab</a><br></br>
      </div>
    </div>
  );
}

export default Projects;
