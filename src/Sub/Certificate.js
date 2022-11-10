import '../App.css';
import React from "react";
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import {TransitionContext} from "../context"
import Sidebar from './Sidebar';

function Certificate() {
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
        <h1 className='ge-header__title'>CERTIFICATES</h1>
      </div>
      <div>
          <p className='ge-text'>
              Some of the most important and relevant certificates I've earned during and after college are listed below.
          </p>
          <br />
          <h3 className='bl-sectiontitle'>Academic</h3>
          <br />
          <p className='ge-text'>Dean's List Award - Semester 109-1 (2020-2021)
              <a className='ge-certlink' href='https://drive.google.com/file/d/1z8HXJowjpL-1ivnSTX6dR-H90z2GzT2o/view?usp=sharing' target='_blank'>{`{ Certificate }`}</a>
          </p>
          <p className='ge-text'>Dean's List Award - Semester 110-2 (2022)
              <a className='ge-certlink' href='https://drive.google.com/file/d/1YJGrmji_kfdSXNV2d-2AuQryBqC_xKIm/view?usp=sharing' target='_blank'>{`{ Certificate }`}</a>
          </p>
          <br />
          <h3 className='bl-sectiontitle'>Project Management</h3>
          <br />
          <p className='ge-text'>Google Project Management Specialization (2022)
              <a className='ge-certlink' href='https://coursera.org/share/20f6a90b166448b1a29ca3453c6b2fdf' target='_blank'>{`{ Certificate }`}</a>
          </p>
          <br />
          <h3 className='bl-sectiontitle'>UI/UX Design</h3>
          <br />
          <p className='ge-text'>Google UX Design Specialization (2022)
              <a className='ge-certlink' href='https://coursera.org/share/27992e6f8184592b1fafeadaa2055d5b' target='_blank'>{`{ Certificate }`}</a>
          </p>
          <br />
          <h3 className='bl-sectiontitle'>Data Analysis</h3>
          <br />
          <p className='ge-text'>Google Data Analysis Specialization (2022)
              <a className='ge-certlink' href='https://coursera.org/share/8f68487358942efd4a1c622d819c0b18' target='_blank'>{`{ Certificate }`}</a>
          </p>
          <br />
          <h3 className='bl-sectiontitle'>Front-end Development</h3>
          <br />
          <p className='ge-text'>Treehouse Front-end Development Track (2022)</p>
          <p className='ge-text'>Treehouse Web Design Track (2022)</p>
          <p className='ge-text'>Srimba Advanced React Course (2022)
              <a className='ge-certlink' href='https://scrimba.com/certificate/uPbbwauv/greact' target='_blank'>{`{ Certificate }`}</a>
          </p>
          <br />
          <TransitionContext.Consumer>
              {({toggleTransition}) => (
                <Link to="/navigation/" onClick={toggleTransition} className='ge-return'>
                  <img src="../icons/icon-back.svg" />
                  <h2 className='ge-return__text'>Back to Navigation</h2>
                </Link>
              )}
          </TransitionContext.Consumer>
      </div>
      <Sidebar />
    </div>
  );
}

export default Certificate;
