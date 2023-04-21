import { useSelector } from "react-redux";
import { selectDarkmode } from "../store/utilSlice";

export default function Transition(props) {
  const darkmode = useSelector(selectDarkmode);

  return (
    <div
      className={`tr-background ${darkmode && "d-transition"}`}
      style={{ display: props.inProgress ? "block" : "none" }}
    >
      <div className="tr-cont">
        <div className="tr-img">
          <img src="../transition-wheel.svg" className="tr-wheel" alt="" />
          <img
            src={`../transition-sled${darkmode ? "-dark" : ""}.svg`}
            className="tr-sled"
            alt=""
          />
          <div className={`tr-line ${darkmode && "d-border"}`}></div>
        </div>
      </div>
    </div>
  );
}
