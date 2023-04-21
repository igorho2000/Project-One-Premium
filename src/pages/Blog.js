import { useTranslation } from "react-i18next";
import InternalLink from "../components/InternalLink";
import Sidebar from "../components/Sidebar";
import { BlogList } from "../static/blog/blogPosts";
import MainTitle from "../components/MainTitle";
import BackTo from "../components/BackTo";

function Blog() {
  const { t } = useTranslation();
  const BlogInfo = BlogList.map((item, index) => (
    <div className="bl-infocard" key={`blog${index}`}>
      <h3 className="bl-infocard__title">{item.title}</h3>
      <h4 className="bl-infocard__tag">{t(`blog.${item.type}`)}</h4>
      <img
        className="bl-infocard__banner"
        src={`../blog/${item.banner}`}
        alt={item.title}
      />
      <InternalLink to={`${item.type}${index}`} className="bl-infocard__button">
        {t("blog.read")}
      </InternalLink>
    </div>
  ));

  return (
    <div className="ge-infocont">
      <div className="ge-header">
        <BackTo to="/navigation/" where="back.nav"></BackTo>
        <MainTitle title={t("blog.T")} titleEn="BLOG" />
      </div>
      <div className="bl-listcont">{BlogInfo}</div>
      <Sidebar />
    </div>
  );
}

export default Blog;
