import { useTranslation } from "react-i18next";
import { useState } from "react";

export default function Sidebar(props) {
  const { t } = useTranslation();
  const [eng, setEng] = useState(false);
  function changeEng() {
    setEng((state) => (state ? false : true));
  }
  return (
    <div>
      <div className="si-cont">
        <h3 className="si-title">{t("contact-me")}</h3>
        <a className="si-contact" href="mailto: igorho2000@gmail.com">
          <img
            src={`${props.path}sidebar/icon-email.svg`}
            className="si-contact__logo"
            alt="email"
          />
          <p className="si-contact__text">igorho2000@gmail.com</p>
        </a>
        <a
          className="si-contact"
          href="https://github.com/igorho2000"
          target="_blank"
          rel="noreferrer"
        >
          <img
            src={`${props.path}sidebar/icon-github.svg`}
            className="si-contact__logo"
            alt="github"
          />
          <p className="si-contact__text">github.com/igorho2000</p>
        </a>
        <a
          className="si-contact"
          href="https://linkedin.com/in/igorho"
          target="_blank"
          rel="noreferrer"
        >
          <img
            src={`${props.path}sidebar/icon-linkedin.svg`}
            className="si-contact__logo"
            alt="linkedin"
          />
          <p className="si-contact__text">linkedin.com/in/igorho</p>
        </a>
      </div>
      <div className="si-cont">
        <h3 className="si-title">Hire Me On Fiverr</h3>
        <a
          className="si-contact"
          href="https://www.fiverr.com/igorho423"
          target="_blank"
          rel="noreferrer"
        >
          <img
            src={`${props.path}sidebar/icon-fiverr.svg`}
            className="si-contact__logo"
            style={{ width: "24px" }}
            alt="fiverr"
          />
          <p className="si-contact__text">https://www.fiverr.com/igorho423</p>
        </a>
        <a className="si-contact" href="https://www.fiverr.com/share/qQxAKX">
          <p
            className="si-contact__text"
            style={{ margin: "0", fontStyle: "italic", color: "gray" }}
          >
            I will recreate an existing website and customize it
          </p>
        </a>
      </div>
      <div className="si-cont">
        <h3 className="si-title">Download My Resume</h3>
        <a
          onMouseEnter={changeEng}
          onMouseLeave={changeEng}
          className="si-download"
          href={`${props.path}sidebar/Igor_Resume_Eng.pdf`}
          download
        >
          <img
            src={`${props.path}sidebar/icon-download-${
              eng ? "white" : "black"
            }.svg`}
            className="si-download__logo"
            alt="download resume"
          />
          <p
            className="si-download__text"
            style={{ color: eng ? "white" : "black" }}
          >
            Eng. Version
          </p>
        </a>
      </div>
      <div>
        <img
          src={`${props.path}logo-main.svg`}
          className="si-logo"
          alt="one premium logo"
        />
        <p className="si-copyright">© 2022 Project One Premium</p>
      </div>
    </div>
  );
}

Sidebar.defaultProps = {
  path: "./",
};
