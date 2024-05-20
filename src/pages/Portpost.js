import { useTranslation } from "react-i18next";
import Sidebar from "../components/Sidebar";
import BackTo from "../components/BackTo";
import { useSelector } from "react-redux";
import { selectDarkmode } from "../store/utilSlice";

export default function PortPost(props) {
	const { t } = useTranslation();
	const darkmode = useSelector(selectDarkmode);
	const gallery = props.info.img.map((item) => (
		<div>
			<img
				src={`../../portfolio/${item[0]}`}
				className="bl-blogimage"
				alt="portfolio media"
			/>
			<p className="bl-caption">{item[1]}</p>
			<br />
		</div>
	));
	const buttons = props.info.button.map((item) => {
		if (item.type === "a") {
			return (
				<a
					className="po-button"
					href={item.link}
					target="_blank"
					rel="noreferrer"
				>
					{item.text}
				</a>
			);
		} else {
			// if (item.type === "d")
			return (
				<a className="po-button" href={`../../portfolio/${item.link}`} download>
					{item.text}
				</a>
			);
		}
	});

	return (
		<div className="ge-infocont">
			<div className="ge-header">
				<BackTo to="/portfolio" where="portfolio.t" />
				<div className={darkmode && "d-text"}>
					<h1 className="ge-header__title bl-posttitle">{props.info.title}</h1>
					<h4
						className="bl-infocard__tag"
						style={{ width: "fit-content", marginBottom: "0.2rem" }}
					>
						{props.info.type}
					</h4>
					<p>{props.info.date}</p>
				</div>
			</div>
			<div bl-content className={darkmode && "d-text"}>
				<div className="po-post__buttoncont">{buttons}</div>
				<br />
				<h3 className="bl-sectiontitle">{t("portfolio.description")}</h3>
				<br />
				<p>{props.info.description}</p>
				<br />
				<br />
				<h3 className="bl-sectiontitle">{t("portfolio.gallery")}</h3>
				<br />
				{gallery}

				<BackTo to="/portfolio" where="portfolio.t" />
			</div>
			<Sidebar path="../" />
		</div>
	);
}
