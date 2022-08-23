import '../../App.css';
import React from "react";
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import {TransitionContext} from "../../context"
import Sidebar from '../Sidebar';

export default function PortPost(props) {
    const gallery = props.info.img.map((item) => (
        <div>
            <img src={`../../portfolio/${item[0]}`} className='bl-blogimage'/>
            <p className='bl-caption'>{item[1]}</p><br />
        </div>
    ))
    const buttons = props.info.button.map((item) => {
        switch(item.type) {
            case "a":
                return (<a className='po-button' href={item.link} target="_blank">{item.text}</a>)
                break
            case "d":
                return (<a className='po-button' href={`../../portfolio/${item.link}`} download>{item.text}</a>)
        }
    })

    return (
        <div className='ge-infocont'>
          <div className='ge-header'>
            <TransitionContext.Consumer>
              {({toggleTransition}) => (
                <Link to="/portfolio" onClick={toggleTransition} className='ge-return'>
                  <img src="../icons/icon-back.svg" />
                  <h2 className='ge-return__text'>Back to Portfolio</h2>
                </Link>
              )}
            </TransitionContext.Consumer>
            <div>
                <h1 className='ge-header__title bl-posttitle'>{props.info.title}</h1>
                <h4 className='bl-infocard__tag' style={{width: "fit-content", marginBottom: "0.2rem"}}>{props.info.type}</h4>
                <p>{props.info.date}</p>
            </div>
          </div>
          <div bl-content>
            <div className='po-post__buttoncont'>
                {buttons}
            </div><br />
            <h3 class='bl-sectiontitle'>PROJECT DESCRIPTION</h3><br />
            <p>{props.info.description}</p><br /><br />
            <h3 class='bl-sectiontitle'>GALLERY</h3><br />
            {gallery}
            <TransitionContext.Consumer>
              {({toggleTransition}) => (
                <Link to="/portfolio" onClick={toggleTransition} className='ge-return'>
                  <img src="../icons/icon-back.svg" />
                  <h2 className='ge-return__text'>Back to Portfolio</h2>
                </Link>
              )}
            </TransitionContext.Consumer>
          </div>
          <Sidebar path="../" />
        </div>
    );
}