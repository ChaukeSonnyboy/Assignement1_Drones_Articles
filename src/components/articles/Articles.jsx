import ArticleCard from "./ArticleCard";
import Styles from "./Articles.module.css";

const Articles = () => {
	return (
		<>
			<section className={Styles.articlesSection} id="articles">
				<div className={Styles.container}>
					<div className={Styles.titleContainer}>
						<h2>LATEST ARTICLES</h2>
						<hr />
					</div>
					<ArticleCard />
				</div>
			</section>
		</>
	);
};

export default Articles;
