import '../App.css';
import React from "react";
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import {TransitionContext} from "../context"
import Sidebar from './Sidebar';

function Portfolio() {
  return (
    <div className='ge-infocont'>
      
      <div className='ge-header'>
        <TransitionContext.Consumer>
          {({toggleTransition}) => (
            <Link to="/navigation/" onClick={toggleTransition} className='ge-return'>
              <img src="../icons/icon-back.svg" />
              <h2 className='ge-return__text'>Back to Navigation</h2>
            </Link>
          )}
        </TransitionContext.Consumer>
        <h1 className='ge-header__title'>PORTFOLIO</h1>
      </div>
      <p className='ge-text'>cool</p>
      <Sidebar />
    </div>
  );
}

export default Portfolio;
