import { useTranslation } from "react-i18next";
import InternalLink from "./InternalLink";
import { useSelector } from "react-redux";
import { selectDarkmode } from "../store/utilSlice";

export default function BackTo({ to, where }) {
  const { t } = useTranslation();
  const darkmode = useSelector(selectDarkmode);
  return (
    <InternalLink to={to} className={`ge-return ${darkmode && "d-text"}`}>
      <span className="material-icons-round">keyboard_backspace</span>
      <h2 className={`ge-return__text ${darkmode && "d-text"}`}>
        {t("back.to")}
        {t(where)}
      </h2>
    </InternalLink>
  );
}
