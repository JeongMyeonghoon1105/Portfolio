import "../styles/Individual.css";

function Individual(props) {
  return (
    <div className={ "individual" }>
      <div className={ "indiv-title" }>
        <div>1. 코딩랩학원 웹사이트</div>
        <a href={ props.url } className={ "indiv-link" } target={ "_blank" }>
          바로가기
        </a>
        <a href={ props.github } className={ "indiv-link" } target={ "_blank" }>
          Github
        </a>
      </div>
      <br></br><br></br>
      <img src={ props.img } alt=""></img>
      <p className={ "indiv-subtitle" }>
        Technology
      </p>
      <hr></hr>
    </div>
  );
}

export default Individual;
