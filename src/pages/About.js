import { useTranslation } from "react-i18next";
import Sidebar from "../components/Sidebar";
import MainTitle from "../components/MainTitle";
import { useSelector } from "react-redux";
import { selectDarkmode } from "../store/utilSlice";
import BackTo from "../components/BackTo";

function About() {
  const { t } = useTranslation();
  const darkmode = useSelector(selectDarkmode);

  return (
    <div className="ge-infocont">
      <div className="ge-header">
        <BackTo to="/navigation/" where="back.nav"></BackTo>
        <MainTitle title={t("about.T")} titleEn="ABOUT" />
      </div>
      <p className={`ge-text ${darkmode && "d-text"}`}>
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
