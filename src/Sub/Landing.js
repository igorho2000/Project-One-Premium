import '../App.css';
import React from "react";
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";

export default function Landing() {
    return (
    <header>
        <div className="ho-cont">
            <div className="ho-description">
                <h1 className='ho-description__hi'>Hi.</h1>
                <h2 className='ho-description__igor'>It's <strong style={{textShadow: "gray 1px 1px 5px", color: "white"}}>IGOR</strong>,</h2>
                <h3 className='ho-description__job'>Web Developer / Designer</h3>
                <h3 className='ho-description__job'>& Project Manager</h3>
            </div>
            <img className='ho-logo' src="logo-main.svg" />
        </div>
        <div className='ho-nav'>
            <Link to="/navigation/" className='ho-tonavigation'>Go Straight to Portfolio</Link>
        </div>
    </header>
    );
}