import '../styles/About.css'

function About() {
  return (
    <div className={ "about-body" } id={"about-container"}>
      <p className={ "about-title" }>
        JEONG <text style={{ color: "#C5D0E6" }}>MYEONGHOON</text>
      </p>
      <p className={ "about-subtitle" }>Education</p>
      <p className={ "about-content" }>
        서울시립대학교 정경대학 재학<br></br>
        서원고등학교 졸업 (14회)
      </p>
      <br></br>
      <p className={ "about-subtitle" }>Experiences</p>
      <p className={ "about-content" }>
        동탄 코딩랩학원 강사 (2022 - )<br></br>
      </p>
      <br></br>
      <p className={ "about-subtitle" }>Contact</p>
      <p className={ "about-content" }>
        wjdaudgns1105@gmail.com
      </p>
    </div>
  );
}

export default About;
