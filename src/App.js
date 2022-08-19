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
        <Routes>
          <Route path="/navigation" element={<Navigation/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/portfolio" element={<Portfolio/>} />
          <Route path="/blog" element={<Blog/>} />
          <Route path="/" element={<Home/>} />
        </Routes>
        

      </header>
    </div>
  );
}

export default App;
