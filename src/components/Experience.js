import "../styles/Experience.css"

function Experience() {
  return (
    <div className={ "experience-body" } id={ "experience-container" }>
      <p className={ "experience-title" }>Education</p>
      <div>
        <p className={ "experience-subtitle" }>서울시립대학교 정경대학 재학</p>
        <p className={ "experience-subtitle" }>서원고등학교 졸업 (14회)</p>
      </div>
      <p className={ "experience-title" }>Experience</p>
      <div>
        <p className={ "experience-subtitle" }>동탄 코딩랩학원 강사 (2022.03 - )</p>
        <p className={ "experience-subtitle" }>대한민국 공군 항공통제병 근무 (2020 - 2021)</p>
      </div>
    </div>
  );
}

export default Experience;
