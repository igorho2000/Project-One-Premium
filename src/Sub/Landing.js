import '../App.css';
import React from "react";
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import {TransitionContext} from "../context";

export default function Landing() {
    return (
    <header>
        <div className="ho-cont">
            <div className="ho-description">
                <h1 className='ho-description__hi'>Hi.</h1>
                <h2 className='ho-description__igor'>It's <strong style={{textShadow: "gray 1px 1px 5px", color: "white"}}>IGOR</strong>,</h2>
                <h3 className='ho-description__job'>A Web Developer / Designer</h3>
                <h3 className='ho-description__job'>who enjoys Project Management</h3>
            </div>
            <img className='ho-logo' src="logo-main.svg" />
        </div>
        <div className='ho-nav'>
            <TransitionContext>
            {({toggleTransition}) => (
                <Link to="/navigation/" className='ho-tonavigation' onClick={toggleTransition}>Go Straight to Portfolio</Link>
            )}
            </TransitionContext>
            
        </div>
    </header>
    );
}