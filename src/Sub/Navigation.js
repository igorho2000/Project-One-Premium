import '../App.css';
import React from "react";
import {TransitionContext} from "../context"
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";

function Navigation() {

  const d = new Date();
  const month = d.getMonth() + 1;
  const day = d.getDate();

  return (
    <div className='na-cont'>
      <div className='na-illustration'>
        <img src="nav-main.svg" className='na-illustration__main'/>
        <TransitionContext.Consumer>
          {({toggleTransition}) => (
            <div>
              <Link to="/about" onClick={toggleTransition}>
                <img src="nav-about.svg" className='na-illustration--absolute na-illustration__about'/>
              </Link>
              <Link to="/portfolio" onClick={toggleTransition}>
                <img src="nav-portfolio.svg" className='na-illustration--absolute na-illustration__portfolio'/>
              </Link>
              <Link to="/blog" onClick={toggleTransition}>
                <img src="nav-blog.svg" className='na-illustration--absolute na-illustration__blog'/>
              </Link>
              <Link to="/certificate" onClick={toggleTransition}>
                <img src="nav-cert.svg" className='na-illustration--absolute na-illustration__cert'/>
              </Link>
              <Link to="/" onClick={toggleTransition}>
                <img src="nav-home.svg" className='na-illustration--absolute na-illustration__home'/>
              </Link>
            </div>
          )}
        </TransitionContext.Consumer>
        <a href="https://doro-chau.github.io/" target="_blank">
          <img src="nav-roadruler.svg" className='na-illustration--absolute na-illustration__roadruler'/>
        </a>
        <a href="https://www.prontomock.com" target="_blank">
          <img src="nav-pm.svg" className='na-illustration--absolute na-illustration__pm'/>
        </a>
        <p className='na-illustration__date' >{`${month}/${day}`}</p>
      </div>
    </div>
  );
}

export default Navigation;
