import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { toggleTransition } from "../store/utilSlice";

export default function InternalLink({ children, to, className }) {
  const dispatch = useDispatch();
  return (
    <Link
      to={to}
      className={className}
      onClick={() => {
        dispatch(toggleTransition());
        setTimeout(() => {
          dispatch(toggleTransition());
        }, 2100);
      }}
    >
      {children}
    </Link>
  );
}
