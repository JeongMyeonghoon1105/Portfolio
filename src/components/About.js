import '../styles/App.css';

function About() {
  return (
    <div style={{ position: "absolute", top: "0", bottom: "0", margin: "auto 70px", height: "700px" }}>
      <p style={{ "font-weight": "bold", "font-size": "4rem" }}>
        JEONG <text style={{ color: "#C5D0E6" }}>MYEONGHOON</text>
      </p>
      <p style={{ "font-weight": "bold", "font-size": "1.5rem" }}>Education</p>
      <p style={{ "font-size": "1rem", lineHeight: "1.8rem" }}>
        서울시립대학교 정경대학 재학<br></br>
        서원고등학교 졸업 (14회)
      </p>
      <br></br>
      <p style={{ "font-weight": "bold", "font-size": "1.5rem" }}>Experiences</p>
      <p style={{ "font-size": "1rem", lineHeight: "1.8rem" }}>
        동탄 코딩랩학원 강사 (2022 - )<br></br>
        대한민국 공군 항공통제병 근무 (2020 - 2021)
      </p>
      <br></br>
      <p style={{ "font-weight": "bold", "font-size": "1.5rem" }}>Contact</p>
      <p style={{ "font-size": "1rem", lineHeight: "1.8rem" }}>
        wjdaudgns1105@gmail.com
      </p>
    </div>
  );
}

export default About;
