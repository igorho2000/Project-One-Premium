import '../Transition.css';
import '../Animation.css';
import {TransitionContext} from "../context"
import React from "react";
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import { getQueriesForElement } from '@testing-library/react';

export default function Transition(props) {
    return (
        <div className='tr-background' style={{display: props.inProgress ? "block" : "none"}}>
            <div className='tr-cont'>
                <div className="tr-img">
                    <img src="../transition-wheel.svg" className='tr-wheel'/>
                    <img src="../transition-sled.svg" className='tr-sled'/>
                    <div className='tr-line'></div>
                </div>
            </div>

        </div>
    )
}

export function EndAnimation(props) {
    return (
        <div className='end-back' style={{display: props.inProgress ? "block" : "none"}}>
            <div className="end-background" >
                <h1 className='end-thank'>Thanks for watching.</h1>
                <h2 className='end-credit'>Created by Igor Ho, August 2022.</h2>
            </div>
        </div>
        
    )
}