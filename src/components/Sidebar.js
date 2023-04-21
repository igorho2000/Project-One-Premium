import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { selectDarkmode } from "../store/utilSlice";

export default function Sidebar(props) {
  const { t } = useTranslation();
  const darkmode = useSelector(selectDarkmode);
  const d = new Date();
  const year = d.getYear() + 1900;

  return (
    <div className={darkmode ? "d-text" : ""}>
      <div className="si-cont">
        <h3 className="si-title">{t("sidebar.contact-me")}</h3>
        <a className="si-contact" href="mailto: igorho2000@gmail.com">
          <img
            src={`${props.path}sidebar/icon-email${
              darkmode ? "-dark" : ""
            }.svg`}
            className="si-contact__logo"
            alt="email"
          />
          <p className={`si-contact__text ${darkmode && "d-text"}`}>
            igorho2000@gmail.com
          </p>
        </a>
        <a
          className="si-contact"
          href="https://github.com/igorho2000"
          target="_blank"
          rel="noreferrer"
        >
          <img
            src={`${props.path}sidebar/icon-github${
              darkmode ? "-dark" : ""
            }.svg`}
            className="si-contact__logo"
            alt="github"
          />
          <p className={`si-contact__text ${darkmode && "d-text"}`}>
            github.com/igorho2000
          </p>
        </a>
        <a
          className="si-contact"
          href="https://linkedin.com/in/igorho"
          target="_blank"
          rel="noreferrer"
        >
          <img
            src={`${props.path}sidebar/icon-linkedin${
              darkmode ? "-dark" : ""
            }.svg`}
            className="si-contact__logo"
            alt="linkedin"
          />
          <p className={`si-contact__text ${darkmode && "d-text"}`}>
            linkedin.com/in/igorho
          </p>
        </a>
      </div>
      <div className="si-cont">
        <h3 className="si-title">{t("sidebar.hire")}</h3>
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
          <p className={`si-contact__text ${darkmode && "d-text"}`}>
            https://www.fiverr.com/igorho423
          </p>
        </a>
        <a className="si-contact" href="https://www.fiverr.com/share/qQxAKX">
          <p
            className="si-contact__text"
            style={{ margin: "0", fontStyle: "italic", color: "gray" }}
          >
            {t("sidebar.hire-description")}
          </p>
        </a>
      </div>
      <div className="si-cont">
        <h3 className="si-title">{t("sidebar.download")}</h3>
        <a
          className={`ge-lang ${darkmode && "d-control d-border"}`}
          style={{ fontSize: "1rem" }}
          href={`${props.path}sidebar/Igor_Resume_Eng.pdf`}
          download
        >
          <span className="material-icons-round">file_download</span>
          <p>{t("sidebar.download-button")}</p>
        </a>
      </div>
      <div>
        <img
          src={`${props.path}logo-main${darkmode ? "-dark" : ""}.svg`}
          className="si-logo"
          alt="one premium logo"
        />
        <p className="si-copyright">© {year} Project One Premium</p>
      </div>
    </div>
  );
}

Sidebar.defaultProps = {
  path: "./",
};
