import "../styles/Blog.css";

function Blog() {
  return (
    <div className={ "blog-body" } id={ "blog-container" }>
      <div className={ "blog-content" }>
        <p className={ "blog-title" }>Tech Blog</p>
        <p className={ "blog-subtitle" }>개발 진행중입니다.</p>
      </div>
    </div>
  );
}

export default Blog;
