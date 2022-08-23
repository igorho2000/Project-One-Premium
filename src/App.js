import './App.css';
import React from "react";
import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";
import { TransitionContext } from './context';

import Home from './Sub/Home';
import Navigation from './Sub/Navigation';
import About from './Sub/About';
import Portfolio from './Sub/Portfolio';
import Blog from './Sub/Blog';
import Transition from './Sub/Transition';
import { EndAnimation } from './Sub/Transition';
import {BlogList} from './Sub/Blog/PostsArray';
import Posts from './Sub/Blog/Posts';
import {PortList} from './Sub/Portfolio/PortfolioArray';
import PortPost from './Sub/Portfolio/Portpost';


function App() {
  const Blogpaths = BlogList.map((item, index) => (
    <Route path={`/blog/${item.type}${index}`} element={<Posts info={item}/>} />
  ))

  const Portpaths = PortList.map((item, index) => (
    <Route path={`/portfolio/port${index}`} element={<PortPost info={item}/>} />
  ))

  const [transition, setTransition] = React.useState({
    inProgress: false,
    endAnimation: false,
    toggleEndAnimation: doToggleEndAnimation,
    toggleTransition: doToggleTransition
  })

  function doToggleTransition() {
    setTransition(state => ({
      ...state,
      inProgress: state.inProgress === true ? false : true,
    }))
    setTimeout(function(){
      setTransition(state => ({
        ...state,
        inProgress: state.inProgress === true ? false : true,
      }))
    }, 2100)
  }
  function doToggleEndAnimation() {
    setTransition(state => ({
      ...state,
      endAnimation: state.endAnimation === true ? false : true,
    }))
    setTimeout(function(){
      setTransition(state => ({
        ...state,
        endAnimation: state.endAnimation === true ? false : true,
      }))
    }, 5000)
  }

  return (
    <TransitionContext.Provider value={transition}>
      
      <Routes>
        <Route path="/" element={<Home/>} />
      </Routes>
      
        <header className="App-header">
          <div className='App'></div>
          <Routes>
            
            <Route path="/navigation" element={<Navigation/>} />
            <Route path="/about" element={<About/>} />
            <Route path="/portfolio" element={<Portfolio/>} />
            <Route path="/blog" element={<Blog/>} />
            
            {Blogpaths}
            {Portpaths}
          </Routes>
        </header>
      
      <Transition inProgress={transition.inProgress} />
      <EndAnimation inProgress={transition.endAnimation} />
    </TransitionContext.Provider>
    
  );
}

export default App;
