import { useTranslation } from "react-i18next";
import Sidebar from "../components/Sidebar";
import BackTo from "../components/BackTo";
import { useSelector } from "react-redux";
import { selectDarkmode } from "../store/utilSlice";

export default function Posts(props) {
	const { t } = useTranslation();
	const darkmode = useSelector(selectDarkmode);
	function BlogContent(array) {
		var blog = [];
		for (let i = 0; i < array.length; i++) {
			if (array[i].length === 1) {
				continue;
			}
			switch (array[i - 1]) {
				case "p":
					blog.push(
						<p style={{ display: "inline" }}>
							{array[i]}
							<br />
							<br />
						</p>
					);
					break;
				case "f":
					blog.push(<p style={{ display: "inline" }}>{array[i]}</p>);
					break;
				case "s":
					blog.push(
						<p style={{ display: "inline" }}>
							<strong>{array[i]}</strong>
							<br />
							<br />
						</p>
					);
					break;
				case "c":
					blog.push(
						<p className="bl-caption" style={{ display: "inline" }}>
							{array[i]}
							<br />
							<br />
						</p>
					);
					break;
				case "i":
					blog.push(
						<img
							className="bl-blogimage"
							src={`../../blog/${array[i]}`}
							alt="blog media"
						/>
					);
					break;
				case "h":
					blog.push(
						<h3 style={{ display: "inline" }} className="bl-sectiontitle">
							{array[i]}
							<br />
							<br />
						</h3>
					);
					break;
				case "z":
					blog.push(<p style={{ display: "inline" }}>{array[i]}</p>);
					break;
				case "a":
					blog.push(
						<a
							style={{ display: "inline" }}
							href={array[i][0]}
							target="_blank"
							rel="noreferrer"
						>
							{array[i][1]}
						</a>
					);
					break;
				case "v":
					blog.push(
						<div>
							<iframe
								className="bl-blogvideo"
								src={array[i]}
								title="blog media"
							></iframe>
							<br />
							<br />
						</div>
					);
					break;
				default:
					blog.push(
						<p style={{ display: "inline" }}>
							{array[i]}
							<br />
							<br />
						</p>
					);
					break;
			}
		}
		return blog;
	}

	return (
		<div className="ge-infocont">
			<div className="ge-header">
				<BackTo to="/blog" where="blog.t" />
				<div className={darkmode && "d-text"}>
					<h1 className="ge-header__title bl-posttitle">{props.info.title}</h1>
					<h4
						className="bl-infocard__tag"
						style={{ width: "fit-content", marginBottom: "0.2rem" }}
					>
						{t(`blog.${props.info.type}`)}
					</h4>
					<p>{props.info.date}</p>
				</div>
			</div>
			<div bl-content className={darkmode && "d-text"}>
				<img
					className="bl-blogimage"
					src={`../../blog/${props.info.banner}`}
					alt={`${props.info.title} banner`}
				/>
				<br />
				<br />
				{BlogContent(props.info.content)}
				<img
					style={{ display: "inline", width: "0.9rem" }}
					src={`../../logo-o-3d.svg`}
					alt="end of article"
				/>
				<br />
				<br />

				<BackTo to="/blog" where="blog.t" />
			</div>
			<Sidebar path="../" />
		</div>
	);
}
