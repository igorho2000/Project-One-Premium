import InternalLink from "../components/InternalLink";
import Sidebar from "../components/Sidebar";
import { BlogList } from "../static/blog/blogPosts";

function Blog() {
  const BlogInfo = BlogList.map((item, index) => (
    <div className="bl-infocard" key={`blog${index}`}>
      <h3 className="bl-infocard__title">{item.title}</h3>
      <h4 className="bl-infocard__tag">{item.type}</h4>
      <img
        className="bl-infocard__banner"
        src={`../blog/${item.banner}`}
        alt={item.title}
      />
      <InternalLink to={`${item.type}${index}`} className="bl-infocard__button">
        Read More
      </InternalLink>
    </div>
  ));

  return (
    <div className="ge-infocont">
      <div className="ge-header">
        <InternalLink to="/navigation/" className="ge-return">
          <img src="../icons/icon-back.svg" alt="back" />
          <h2 className="ge-return__text">Back to Navigation</h2>
        </InternalLink>
        <h1 className="ge-header__title">BLOG</h1>
      </div>
      <div className="bl-listcont">{BlogInfo}</div>
      <Sidebar />
    </div>
  );
}

export default Blog;
