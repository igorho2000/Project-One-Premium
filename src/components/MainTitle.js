import { useSelector } from "react-redux";
import { selectLangEn } from "../store/utilSlice";

export default function MainTitle({ title, titleEn }) {
  const langEn = useSelector(selectLangEn);
  return (
    <>
      <h1 className="ge-header__title">{title}</h1>
      {!langEn && (
        <h2 className="ge-header__title bl-posttitle ge-english_subtitle">
          {titleEn}
        </h2>
      )}
    </>
  );
}
