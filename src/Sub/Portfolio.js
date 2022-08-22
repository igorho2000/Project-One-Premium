import '../App.css';
import React from "react";
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import {TransitionContext} from "../context"
import Sidebar from './Sidebar';
import {PortList} from './Portfolio/PortfolioArray';
import PortPost from './Portfolio/Portpost';

function Portfolio() {
  const PortInfo = PortList.map((item, index) => (
    <div className='po-infocont' key={`Port${index}`}>
            <h3 className='po-infocont__title'>{item.title}</h3>
            <div className='po-imagecont'>
              <img className='po-imagecont__image' src={`../portfolio/${item.banner}`}/>
            </div>
            <div className='po-buttoncont'>
              <TransitionContext.Consumer>
                {({toggleTransition}) => (
                  <Link to={`port${index}`} className='po-button' onClick={toggleTransition}>Visit Gallery</Link>
                )}
              </TransitionContext.Consumer>
            </div>
        </div>
  ))

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
      <div>
        {PortInfo}
      </div>
      <Sidebar />
    </div>
  );
}

export default Portfolio;
