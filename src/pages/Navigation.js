import React from "react";
import { useSelector } from "react-redux";
import InternalLink from "../components/InternalLink";
import { selectLangEn } from "../store/utilSlice";

function Navigation() {
	const d = new Date();
	const month = d.getMonth() + 1;
	const day = d.getDate();

	const langEn = useSelector(selectLangEn);
	const ids = [
		5, 7, 8, 20, 22, 26, 28, 29, 33, 34, 42, 43, 57, 59, 60, 68, 72, 73, 79, 82,
		83, 90, 103, 104, 107, 108, 110, 111, 114, 116, 117, 140, 141, 142, 143,
		144, 145, 146, 147, 150, 151, 152, 153, 154, 155, 156, 160, 162, 163, 164,
	];
	const randomId = ids[Math.floor(Math.random() * ids.length)];

	return (
		<div className="na-cont">
			<div className="na-illustration">
				<img
					src="nav-main.svg"
					className="na-illustration__main"
					alt="navigation main"
				/>

				<div>
					<InternalLink to="/about">
						<img
							src={`nav-about${langEn ? "" : "-ch"}.svg`}
							className="na-illustration--absolute na-illustration__about"
							alt="about"
						/>
					</InternalLink>
					<InternalLink to="/portfolio">
						<img
							src={`nav-portfolio${langEn ? "" : "-ch"}.svg`}
							className="na-illustration--absolute na-illustration__portfolio"
							alt="portfolio"
						/>
					</InternalLink>
					<InternalLink to="/blog">
						<img
							src={`nav-blog${langEn ? "" : "-ch"}.svg`}
							className="na-illustration--absolute na-illustration__blog"
							alt="blog"
						/>
					</InternalLink>
					<InternalLink to="/certificate">
						<img
							src={`nav-cert${langEn ? "" : "-ch"}.svg`}
							className="na-illustration--absolute na-illustration__cert"
							alt="certificates"
						/>
					</InternalLink>
					<InternalLink to="/">
						<img
							src={`nav-home${langEn ? "" : "-ch"}.svg`}
							className="na-illustration--absolute na-illustration__home"
							alt="back to animation"
						/>
					</InternalLink>
				</div>
				<a href="https://doro-chau.github.io/" target="_blank" rel="noreferrer">
					<img
						src="nav-roadruler.svg"
						className="na-illustration--absolute na-illustration__roadruler"
						alt="roadruler project"
					/>
				</a>
				<a
					href="https://prontomock-abed0.web.app/"
					target="_blank"
					rel="noreferrer"
				>
					<img
						src="nav-pm.svg"
						className="na-illustration--absolute na-illustration__pm"
						alt="prontomock"
					/>
				</a>
				<div>
					<iframe
						id="Taipei-City-Dashboard-Component"
						title="板南線擁擠程度"
						src={`https://citydashboard.taipei/embed/${randomId}`}
						width="450"
						height="400"
						style={{ backgroundColor: "#282a2c" }}
						frameBorder="0"
						allow="fullscreen"
						loading="lazy"
						className="na-illustration--absolute na-illustration__component"
					></iframe>
				</div>
				<a
					style={{ width: "450px", height: "400px" }}
					className="na-illustration--absolute na-illustration__component"
					href="https://citydashboard.taipei"
					target="_blank"
					rel="noreferrer"
				>
					{" "}
				</a>
				<p className="na-illustration__date">{`${month}/${day}`}</p>
			</div>
		</div>
	);
}

export default Navigation;
