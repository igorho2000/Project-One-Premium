import InternalLink from "./InternalLink";

export default function Landing(props) {
  const landingOpacity = 1 - (1 / 50) * props.position;

  return (
    <header style={{ opacity: landingOpacity > 0 ? landingOpacity : 0 }}>
      <div className="ho-cont">
        <div className="ho-description">
          <h1 className="ho-description__hi">Hi.</h1>
          <h2 className="ho-description__igor">
            It's{" "}
            <strong style={{ textShadow: "gray 1px 1px 5px", color: "white" }}>
              IGOR
            </strong>
            ,
          </h2>
          <h3 className="ho-description__job">A Web Developer / Designer</h3>
          <h3 className="ho-description__job">who enjoys Project Management</h3>
        </div>
        <img className="ho-logo" src="logo-main.svg" alt="main logo" />
      </div>
      <div className="ho-nav">
        <h2>Scroll Slowly to View My Story</h2>
        <InternalLink to="/navigation/" className="ho-tonavigation">
          Or Go Straight to Portfolio
        </InternalLink>
      </div>
    </header>
  );
}
