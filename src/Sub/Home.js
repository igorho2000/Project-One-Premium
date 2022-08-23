import '../App.css';
import React from "react";
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import Landing from "./Landing";
import Animation from "./Animation";

function Home() {
  const [position, setPosition] = React.useState(0)
  React.useEffect(() => {
      document.addEventListener('scroll', function() {
          setPosition((state) => (Math.round(window.scrollY)))
      }, [position]);
  })

  return (
    <div>
      <div className='ho-canvas'>
        <Landing position={position} />
        <Animation position={position} />
      </div>
      <div className='ho-scroll'></div>
    </div>
    
  );
}

export default Home;
