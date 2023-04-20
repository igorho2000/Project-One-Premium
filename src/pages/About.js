import InternalLink from "../components/InternalLink";
import Sidebar from "../components/Sidebar";

function About() {
  return (
    <div className="ge-infocont">
      <div className="ge-header">
        <InternalLink to="/navigation/" className="ge-return">
          <img src="../icons/icon-back.svg" alt="back" />
          <h2 className="ge-return__text">Back to Navigation</h2>
        </InternalLink>
        <h1 className="ge-header__title">ABOUT</h1>
      </div>
      <p className="ge-text">
        The Mandarin equivalent of “one” is pronounced as “yi-ke” which
        coincidentally sounds like my English name. I always strive to be a
        better version of myself, hence One Premium.
        <br />
        <br />
        Hi, I’m Igor. I enjoy creating things that are distinctively “me” and
        work with teams that are inclusive, supporting, and collaborative. That
        is what drew me to front-end development and project management in the
        first place.
        <br />
        <br />
        Leisure wise, I am a darts fanatic with a slight YouTube addiction. I
        enjoy the company of my family, girlfriend, and dog.
        <br />
        <br />I am organized, efficient, and work well with others. I look
        forward to offering you my service!
      </p>
      <Sidebar />
    </div>
  );
}

export default About;
