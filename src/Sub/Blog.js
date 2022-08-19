import '../App.css';
import React from "react";
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import {TransitionContext} from "../context"
import {TransitionSequence} from "./Transition"


function Blog() {
  return (
    <TransitionContext.Consumer>
      {({inProgress, toggleTransition}) => (
        <div>
          <button onClick={toggleTransition}>Toggle</button>
          <h1>{inProgress ? "true" : "false"}</h1>
        </div>
      )}
    </TransitionContext.Consumer>
  );
}

export default Blog;
