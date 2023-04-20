import { useState, useEffect } from "react";
import Landing from "../components/Landing";
import Animation from "../components/Animation";

function Home() {
  const [position, setPosition] = useState(0);
  useEffect(() => {
    document.addEventListener(
      "scroll",
      function () {
        setPosition((state) => Math.round(window.scrollY));
      },
      [position]
    );
  });

  return (
    <div>
      <div className="ho-canvas">
        <Landing position={position} />
        <Animation position={position} />
      </div>
      <div className="ho-scroll"></div>
    </div>
  );
}

export default Home;
