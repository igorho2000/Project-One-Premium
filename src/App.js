// CSS Imports
import "./static/css/App.css";
import "./static/css/Animation.css";
import "./static/css/Sidebar.css";
import "./static/css/Transition.css";

// Library Imports
import { Routes, Route } from "react-router-dom";
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import { useSelector } from "react-redux";
import { selectAnimation } from "./store/utilSlice";

// Component Imports
import Home from "./pages/Home";
import Navigation from "./pages/Navigation";
import About from "./pages/About";
import Portfolio from "./pages/Portfolio";
import Blog from "./pages/Blog";
import Transition from "./components/Transition";
import AnimationEndScreen from "./components/AnimationEndScreen";
import Posts from "./pages/Posts";
import PortPost from "./pages/Portpost";
import Certificate from "./pages/Certificate";

// Data Imports
import { PortList } from "./static/portfolio/portfolioPosts";
import { BlogList } from "./static/blog/blogPosts";
import lang from "./static/lang/lang.json";

i18n.use(initReactI18next).init({
  resources: lang,
  lng: "en",
  fallbackLng: "en",

  interpolation: {
    escapeValue: false,
  },
});

function App() {
  const animation = useSelector(selectAnimation);

  const Blogpaths = BlogList.map((item, index) => (
    <Route
      path={`/blog/${item.type}${index}`}
      element={<Posts info={item} />}
    />
  ));

  const Portpaths = PortList.map((item, index) => (
    <Route
      path={`/portfolio/port${index}`}
      element={<PortPost info={item} />}
    />
  ));

  return (
    <>
      <div className="App"></div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/navigation" element={<Navigation />} />
        <Route path="/about" element={<About />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/certificate" element={<Certificate />} />
        {Blogpaths}
        {Portpaths}
      </Routes>

      <Transition inProgress={animation.inProgress} />
      <AnimationEndScreen inProgress={animation.endAnimation} />
    </>
  );
}

export default App;
