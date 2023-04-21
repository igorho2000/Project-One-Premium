import { useTranslation } from "react-i18next";
import Sidebar from "../components/Sidebar";
import MainTitle from "../components/MainTitle";
import BackTo from "../components/BackTo";
import { useSelector } from "react-redux";
import { selectDarkmode } from "../store/utilSlice";

function Certificate() {
  const { t } = useTranslation();
  const darkmode = useSelector(selectDarkmode);
  return (
    <div className="ge-infocont">
      <div className="ge-header">
        <BackTo to="/navigation/" where="back.nav"></BackTo>
        <MainTitle title={t("cert.T")} titleEn="CERTIFICATIONS" />
      </div>
      <div>
        <p className={`ge-text ${darkmode && "d-text"}`}>
          {t("cert.description")}
        </p>
        <br />
        <h3 className="bl-sectiontitle">{t("cert.academic")}</h3>
        <br />
        <p className={`ge-text ${darkmode && "d-text"}`}>
          {t("cert.dean1")}
          <a
            className="ge-certlink"
            href="https://drive.google.com/file/d/1z8HXJowjpL-1ivnSTX6dR-H90z2GzT2o/view?usp=sharing"
            target="_blank"
            rel="noreferrer"
            style={{ color: "rgb(191, 125, 19)" }}
          >{`{ ${t("cert.t")} }`}</a>
        </p>
        <p className={`ge-text ${darkmode && "d-text"}`}>
          {t("cert.dean2")}
          <a
            className="ge-certlink"
            href="https://drive.google.com/file/d/1YJGrmji_kfdSXNV2d-2AuQryBqC_xKIm/view?usp=sharing"
            target="_blank"
            rel="noreferrer"
            style={{ color: "rgb(191, 125, 19)" }}
          >{`{ ${t("cert.t")} }`}</a>
        </p>
        <br />
        <h3 className="bl-sectiontitle">{t("cert.pm")}</h3>
        <br />
        <p className={`ge-text ${darkmode && "d-text"}`}>
          {t("cert.pm-google")}
          <a
            className="ge-certlink"
            href="https://coursera.org/share/20f6a90b166448b1a29ca3453c6b2fdf"
            target="_blank"
            rel="noreferrer"
            style={{ color: "rgb(191, 125, 19)" }}
          >{`{ ${t("cert.t")} }`}</a>
        </p>
        <br />
        <h3 className="bl-sectiontitle">{t("cert.ux")}</h3>
        <br />
        <p className={`ge-text ${darkmode && "d-text"}`}>
          {t("cert.ux-google")}
          <a
            className="ge-certlink"
            href="https://coursera.org/share/27992e6f8184592b1fafeadaa2055d5b"
            target="_blank"
            rel="noreferrer"
            style={{ color: "rgb(191, 125, 19)" }}
          >{`{ ${t("cert.t")} }`}</a>
        </p>
        <br />
        <h3 className="bl-sectiontitle">{t("cert.data")}</h3>
        <br />
        <p className={`ge-text ${darkmode && "d-text"}`}>
          {t("cert.data-google")}
          <a
            className="ge-certlink"
            href="https://coursera.org/share/8f68487358942efd4a1c622d819c0b18"
            target="_blank"
            rel="noreferrer"
            style={{ color: "rgb(191, 125, 19)" }}
          >{`{ ${t("cert.t")} }`}</a>
        </p>
        <br />
        <h3 className="bl-sectiontitle">{t("cert.front")}</h3>
        <br />
        <p className={`ge-text ${darkmode && "d-text"}`}>
          {t("cert.front-tree1")}
        </p>
        <p className={`ge-text ${darkmode && "d-text"}`}>
          {t("cert.front-tree2")}
        </p>
        <p className={`ge-text ${darkmode && "d-text"}`}>
          {t("cert.front-scrimba")}
          <a
            className="ge-certlink"
            href="https://scrimba.com/certificate/uPbbwauv/greact"
            target="_blank"
            rel="noreferrer"
            style={{ color: "rgb(191, 125, 19)" }}
          >{`{ ${t("cert.t")} }`}</a>
        </p>
        <br />
        <BackTo to="/navigation/" where="back.nav"></BackTo>
      </div>
      <Sidebar />
    </div>
  );
}

export default Certificate;
