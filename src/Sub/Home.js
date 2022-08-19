import '../App.css';
import React from "react";
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import Landing from "./Landing";

function Home() {
  return (
    <div>
      <Landing />
    </div>
  );
}

export default Home;
