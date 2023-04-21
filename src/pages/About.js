import { useTranslation } from "react-i18next";
import InternalLink from "../components/InternalLink";
import Sidebar from "../components/Sidebar";
import MainTitle from "../components/MainTitle";

function About() {
  const { t } = useTranslation();

  return (
    <div className="ge-infocont">
      <div className="ge-header">
        <InternalLink to="/navigation/" className="ge-return">
          <img src="../icons/icon-back.svg" alt="back" />
          <h2 className="ge-return__text">
            {t("back.to")}
            {t("back.nav")}
          </h2>
        </InternalLink>
        <MainTitle title={t("about.T")} titleEn="ABOUT" />
      </div>
      <p className="ge-text">
        {t("about.p1")}
        <br />
        <br />
        {t("about.p2")}
        <br />
        <br />
        {t("about.p3")}
        <br />
        <br />
        {t("about.p4")}
      </p>
      <Sidebar />
    </div>
  );
}

export default About;
