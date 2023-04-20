import InternalLink from "../components/InternalLink";

function Navigation() {
  const d = new Date();
  const month = d.getMonth() + 1;
  const day = d.getDate();

  return (
    <div className="na-cont">
      <div className="na-illustration">
        <img
          src="nav-main.svg"
          className="na-illustration__main"
          alt="navigation main"
        />

        <div>
          <InternalLink to="/about">
            <img
              src="nav-about.svg"
              className="na-illustration--absolute na-illustration__about"
              alt="about"
            />
          </InternalLink>
          <InternalLink to="/portfolio">
            <img
              src="nav-portfolio.svg"
              className="na-illustration--absolute na-illustration__portfolio"
              alt="portfolio"
            />
          </InternalLink>
          <InternalLink to="/blog">
            <img
              src="nav-blog.svg"
              className="na-illustration--absolute na-illustration__blog"
              alt="blog"
            />
          </InternalLink>
          <InternalLink to="/certificate">
            <img
              src="nav-cert.svg"
              className="na-illustration--absolute na-illustration__cert"
              alt="certificates"
            />
          </InternalLink>
          <InternalLink to="/">
            <img
              src="nav-home.svg"
              className="na-illustration--absolute na-illustration__home"
              alt="back to animation"
            />
          </InternalLink>
        </div>
        <a href="https://doro-chau.github.io/" target="_blank" rel="noreferrer">
          <img
            src="nav-roadruler.svg"
            className="na-illustration--absolute na-illustration__roadruler"
            alt="roadruler project"
          />
        </a>
        <a href="https://www.prontomock.com" target="_blank" rel="noreferrer">
          <img
            src="nav-pm.svg"
            className="na-illustration--absolute na-illustration__pm"
            alt="prontomock"
          />
        </a>
        <p className="na-illustration__date">{`${month}/${day}`}</p>
      </div>
    </div>
  );
}

export default Navigation;
