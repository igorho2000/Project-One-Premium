import '../App.css';
import React from "react";
import {BrowserRouter as Router, Switch, Route, Link, Routes} from "react-router-dom";
import {TransitionContext} from "../context"
import Sidebar from './Sidebar';
import {BlogList} from './Blog/PostsArray';
import Posts from "./Blog/Posts"


function Blog() {
  
  const BlogInfo = BlogList.map((item, index) => (
    <div className='bl-infocard' key={`blog${index}`}>
          <h3 className='bl-infocard__title'>{item.title}</h3>
          <h4 className='bl-infocard__tag'>{item.type}</h4>
          <img className='bl-infocard__banner' src={`../blog/${item.banner}`}/>
          <TransitionContext.Consumer>
            {({toggleTransition}) => (
              <Link to={`${item.type}${index}`} className='bl-infocard__button' onClick={toggleTransition}>Read More</Link>
            )}
          </TransitionContext.Consumer>
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
        <h1 className='ge-header__title'>BLOG</h1>
      </div>
      <div className='bl-listcont'>
        {BlogInfo}
      </div>
      <Sidebar />
    </div>
  );
}

export default Blog;
