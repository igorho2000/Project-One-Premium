import { useTranslation } from "react-i18next";
import InternalLink from "../components/InternalLink";
import Sidebar from "../components/Sidebar";
import { PortList } from "../static/portfolio/portfolioPosts";
import MainTitle from "../components/MainTitle";
import BackTo from "../components/BackTo";

function Portfolio() {
	const { t } = useTranslation();
	const PortInfo = PortList.map((item, index) => (
		<div className="po-infocont" key={`Port${index}`}>
			<h3 className="po-infocont__title">{item.title}</h3>
			<div className="po-imagecont">
				<img
					className="po-imagecont__image"
					src={`../portfolio/${item.banner}`}
					alt={item.title}
				/>
			</div>
			<div className="po-buttoncont">
				<InternalLink
					to={`${item.title.toLowerCase().replaceAll(" ", "-")}`}
					className="po-button"
				>
					{t("portfolio.to-gallery")}
				</InternalLink>
			</div>
		</div>
	));

	return (
		<div className="ge-infocont">
			<div className="ge-header">
				<BackTo to="/navigation/" where="back.nav"></BackTo>
				<MainTitle title={t("portfolio.T")} titleEn="PORTFOLIO" />
			</div>
			<div>{PortInfo}</div>
			<Sidebar />
		</div>
	);
}

export default Portfolio;
