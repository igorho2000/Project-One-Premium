import './App.css';
import React from "react";
import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";
import logo from './logo-o-2d.svg';

import Home from './Sub/Home';
import Navigation from './Sub/Navigation';
import About from './Sub/About';
import Portfolio from './Sub/Portfolio';
import Blog from './Sub/Blog';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" />
        <Routes>
          <Route path="/navigation" element={<Navigation/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/portfolio" element={<Portfolio/>} />
          <Route path="/blog" element={<Blog/>} />
          <Route path="/" element={<Home/>} />
        </Routes>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/navigation">Navigation</Link>
            </li>
            <li>
              <Link to="/portfolio">Portfolio</Link>
            </li>
            <li>
              <Link to="/blog">Blog</Link>
            </li>
          </ul>
        </nav>

      </header>
    </div>
  );
}

export default App;
