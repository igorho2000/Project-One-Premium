import { useTranslation } from "react-i18next";
import InternalLink from "./InternalLink";
import { useSelector } from "react-redux";
import { selectDarkmode } from "../store/utilSlice";

export default function Landing(props) {
  const { t } = useTranslation();
  const landingOpacity = 1 - (1 / 50) * props.position;
  const darkmode = useSelector(selectDarkmode);

  return (
    <header style={{ opacity: landingOpacity > 0 ? landingOpacity : 0 }}>
      <div className="ho-cont">
        <div className="ho-description">
          <h1 className="ho-description__hi">{t("home.hi")}</h1>
          <h2 className="ho-description__igor">
            {t("home.its")}{" "}
            <strong style={{ textShadow: "gray 1px 1px 5px", color: "white" }}>
              IGOR
            </strong>
            ,
          </h2>
          <h3 className="ho-description__job">{t("home.job")}</h3>
          <h3 className="ho-description__job">{t("home.pm")}</h3>
        </div>
        <img
          className="ho-logo"
          src={`logo-main${darkmode ? "-dark" : ""}.svg`}
          alt="main logo"
        />
      </div>
      <div className="ho-nav">
        <h2 className={`${darkmode && "d-text"}`}>{t("home.scroll")}</h2>
        <InternalLink
          to="/navigation/"
          className={`ho-tonavigation ${darkmode && "d-text"}`}
        >
          {t("home.nav")}
        </InternalLink>
      </div>
    </header>
  );
}
