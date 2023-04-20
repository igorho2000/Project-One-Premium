import InternalLink from "../components/InternalLink";
import Sidebar from "../components/Sidebar";
import { PortList } from "../static/portfolio/portfolioPosts";

function Portfolio() {
  const PortInfo = PortList.map((item, index) => (
    <div className="po-infocont" key={`Port${index}`}>
      <h3 className="po-infocont__title">{item.title}</h3>
      <div className="po-imagecont">
        <img
          className="po-imagecont__image"
          src={`../portfolio/${item.banner}`}
          alt={item.title}
        />
      </div>
      <div className="po-buttoncont">
        <InternalLink to={`port${index}`} className="po-button">
          Visit Gallery
        </InternalLink>
      </div>
    </div>
  ));

  return (
    <div className="ge-infocont">
      <div className="ge-header">
        <InternalLink to="/navigation/" className="ge-return">
          <img src="../icons/icon-back.svg" alt="back" />
          <h2 className="ge-return__text">Back to Navigation</h2>
        </InternalLink>
        <h1 className="ge-header__title">PORTFOLIO</h1>
      </div>
      <div>{PortInfo}</div>
      <Sidebar />
    </div>
  );
}

export default Portfolio;
