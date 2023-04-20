import { Link } from "react-router-dom";
import An from "./AnimationElements";
import { useDispatch } from "react-redux";
import { toggleEndAnimation } from "../store/utilSlice";
import { animationSteps } from "../static/animation/animation";

export default function Animation(props) {
  const dispatch = useDispatch();
  const output = animationSteps.map((item) => {
    return (
      <An
        src={[item.src]}
        pos={props.position}
        start={item.start}
        end={item.end}
        startSize={item.startSize}
        endSize={item.endSize}
        startOpacity={item.startOpacity}
        endOpacity={item.endOpacity}
        startX={item.startX}
        startY={item.startY}
        endX={item.endX}
        endY={item.endY}
      />
    );
  });

  return (
    <div
      className="an-cont"
      style={{ display: props.position >= 50 ? "flex" : "none" }}
    >
      <div className="an-main">
        {output}
        <Link
          to="/navigation/"
          onClick={() => {
            dispatch(toggleEndAnimation());
            setTimeout(() => {
              dispatch(toggleEndAnimation());
            }, 3500);
          }}
        >
          <An
            src={["6-enter.svg"]}
            pos={props.position}
            start={3670}
            end={4000}
            startSize={13}
            startOpacity={1}
            startX={69}
            startY={67}
          />
        </Link>
      </div>
    </div>
  );
}
