import '../Animation.css';
import React from "react";
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import An from './AnimationElements';

export default function Animation(props) {
    


    return (
        <div className='an-cont' style={{display: (props.position >= 50) ? "flex" : "none"}}>
            <div className='an-main'>
                <An src={['test.svg']} pos={props.position} start={60} end={120} 
                startSize={100} startOpacity={0} startX={0} startY={0} 
                endOpacity={1}/>
                <An src={['test.svg']} pos={props.position} start={120} end={180} 
                startSize={100} startOpacity={1} startX={0} startY={0} 
                />
            </div>
        </div>
    )
}

{/* <An src={['.svg']} pos={props.position} start={} end={} 
startSize={} startOpacity={} startX={} startY={} 
endSize={} endOpacity={} endX={} endY={}/> */}