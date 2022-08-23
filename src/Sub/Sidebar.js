import '../Sidebar.css';
import React from "react";
import {TransitionContext} from "../context"
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";

export default function Sidebar(props) {
    const [eng, setEng] = React.useState(false);
    function changeEng() {
        setEng((state) => (state ? false : true))
    }
    const [chi, setChi] = React.useState(false);
    function changeChi() {
        setChi((state) => (state ? false : true))
    }
    return (
        <div>
            <div className='si-cont'>
                <h3 className='si-title'>Contact Me</h3>
                <a className='si-contact' href='mailto: igorho2000@gmail.com'>
                    <img src={`${props.path}sidebar/icon-email.svg`} className='si-contact__logo'/>
                    <p className='si-contact__text'>igorho2000@gmail.com</p>
                </a>
                <a className='si-contact' href='https://github.com/igorho2000'target='_blank'>
                    <img src={`${props.path}sidebar/icon-github.svg`} className='si-contact__logo'  />
                    <p className='si-contact__text'>github.com/igorho2000</p>
                </a>
                <a className='si-contact' href='https://linkedin.com/in/igorho' target='_blank'>
                    <img src={`${props.path}sidebar/icon-linkedin.svg`} className='si-contact__logo' />
                    <p className='si-contact__text'>linkedin.com/in/igorho</p>
                </a>
            </div>
            <div className='si-cont'>
                <h3 className='si-title'>Download My Resume</h3>
                <a onMouseEnter={changeEng} onMouseLeave={changeEng} className='si-download'>
                    <img src={`${props.path}sidebar/icon-download-${eng ? "white" : "black"}.svg`} className='si-download__logo'/>
                    <p className='si-download__text' style={{color: eng ? "white" : "black"}}>Eng. Version</p>
                </a>
                <a onMouseEnter={changeChi} onMouseLeave={changeChi} className='si-download'>
                    <img src={`${props.path}sidebar/icon-download-${chi ? "white" : "black"}.svg`} className="si-download__logo"/>
                    <p className='si-download__text' style={{color: chi ? "white" : "black"}}>Chi. Version</p>
                </a>
            </div>
            <div>
                <img src={`${props.path}logo-main.svg`} className='si-logo'/>
                <p className='si-copyright'>© 2022 Project One Premium</p>
            </div>
        </div>
    )
}

Sidebar.defaultProps = {
    path: "./"
}