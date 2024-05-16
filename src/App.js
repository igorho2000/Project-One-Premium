// CSS Imports
import "./static/css/App.css";
import "./static/css/Animation.css";
import "./static/css/Sidebar.css";
import "./static/css/Transition.css";
import "./static/css/Darkmode.css";

// Library Imports
import { Routes, Route } from "react-router-dom";
import i18n from "i18next";
import { initReactI18next, useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import {
	defineDarkmode,
	defineLanguage,
	selectAnimation,
	selectDarkmode,
	selectLangEn,
	toggleDarkmode,
	toggleLanguage,
	selectLoad,
	finishLoad,
} from "./store/utilSlice";

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
import Load from "./components/Load";

// Data Imports
import { PortList } from "./static/portfolio/portfolioPosts";
import { BlogList } from "./static/blog/blogPosts";
import lang from "./static/lang/lang.json";
import { useEffect } from "react";

i18n.use(initReactI18next).init({
	resources: lang,
	lng: "en",
	fallbackLng: "en",

	interpolation: {
		escapeValue: false,
	},
});

function App() {
	const { i18n } = useTranslation();
	const dispatch = useDispatch();
	const langEn = useSelector(selectLangEn);
	const darkmode = useSelector(selectDarkmode);
	const animation = useSelector(selectAnimation);
	const load = useSelector(selectLoad);

	useEffect(() => {
		const lang = localStorage.getItem("lang");
		const darkmode = localStorage.getItem("darkmode");
		if (lang === undefined) {
			localStorage.setItem("lang", "en");
		} else {
			dispatch(defineLanguage(lang));
			i18n.changeLanguage(lang);
		}
		if (darkmode === undefined) {
			localStorage.setItem("darkmode", "light");
		} else if (darkmode === "dark") {
			dispatch(defineDarkmode(true));
		} else {
			dispatch(defineDarkmode(false));
		}
		setTimeout(() => {
			dispatch(finishLoad());
		}, 1000);
	}, []);

	const Blogpaths = BlogList.map((item, index) => (
		<Route
			path={`/blog/${item.type}${index}`}
			element={<Posts info={item} />}
		/>
	));

	const Portpaths = PortList.map((item) => (
		<Route
			path={`/portfolio/${item.title.toLowerCase().replaceAll(" ", "-")}`}
			element={<PortPost info={item} />}
		/>
	));

	return (
		<>
			<div className={`App ${darkmode && "d-background"}`}></div>
			<div className="ge-control">
				<button
					className={`d-button ${darkmode && "d-control"}`}
					onClick={() => {
						darkmode
							? localStorage.setItem("darkmode", "light")
							: localStorage.setItem("darkmode", "dark");
						dispatch(toggleDarkmode());
					}}
				>
					<span class="material-icons-round">
						{darkmode ? "light_mode" : "dark_mode"}
					</span>
				</button>
				{langEn && (
					<button
						className={`d-button ${darkmode && "d-control"}`}
						onClick={() => {
							i18n.changeLanguage("ch");
							dispatch(toggleLanguage());
							localStorage.setItem("lang", "ch");
						}}
					>
						<span class="material-icons-round">translate</span>
					</button>
				)}
				{langEn === false && (
					<button
						className={`d-button ${darkmode && "d-border d-control"}`}
						onClick={() => {
							i18n.changeLanguage("en");
							dispatch(toggleLanguage());
							localStorage.setItem("lang", "en");
						}}
					>
						<span class="material-icons-round">translate</span>
					</button>
				)}
			</div>
			<Routes>
				{!load && (
					<>
						<Route path="/" element={!animation.inProgress && <Home />} />
						<Route path="/navigation" element={<Navigation />} />
						<Route path="/about" element={<About />} />
						<Route path="/portfolio" element={<Portfolio />} />
						<Route path="/blog" element={<Blog />} />
						<Route path="/certificate" element={<Certificate />} />
						{Blogpaths}
						{Portpaths}
					</>
				)}
			</Routes>
			<Load inProgress={load} />
			<Transition inProgress={animation.inProgress} />
			<AnimationEndScreen inProgress={animation.endAnimation} />
		</>
	);
}

export default App;
