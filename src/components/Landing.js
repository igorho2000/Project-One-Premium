import { useTranslation } from "react-i18next";
import InternalLink from "./InternalLink";

export default function Landing(props) {
  const { t } = useTranslation();
  const landingOpacity = 1 - (1 / 50) * props.position;

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
        <img className="ho-logo" src="logo-main.svg" alt="main logo" />
      </div>
      <div className="ho-nav">
        <h2>{t("home.scroll")}</h2>
        <InternalLink to="/navigation/" className="ho-tonavigation">
          {t("home.nav")}
        </InternalLink>
      </div>
    </header>
  );
}
