import './App.css';

function About() {
  return (
    <div style={{ "margin-top": "30px", "margin-left": "450px" }}>
      <p style={{ "font-weight": "bold", "font-size": "4rem" }}>
        JEONG <text style={{ color: "rgb(189, 93, 57)" }}>MYEONGHOON</text>
      </p>
      <p style={{ "font-weight": "bold", "font-size": "1.5rem" }}>Education</p>
      <p style={{ "font-size": "1rem" }}>서울시립대학교 재학</p>
      <p style={{ "font-size": "1rem" }}>UNIVERSITY OF SEOUL (Undergraduate)</p>
      <br></br>
      <p style={{ "font-weight": "bold", "font-size": "1.5rem" }}>Experiences</p>
      <p style={{ "line-height": "1.5rem", "font-size": "1rem" }}>
        동탄 코딩랩학원 강사 (2022 - )<br></br>
        웹 개발자 (2022 - )<br></br>
        대한민국 공군 병장 만기 전역 (2022 - )<br></br><br></br>
        Software Class Instructor (2022 - )<br></br>
        Web Developer & Manager (2022 - )<br></br>
        Korea Air Force Military Service (OSAN AB / 2020 - 2021)
      </p>
    </div>
  );
}

export default About;
