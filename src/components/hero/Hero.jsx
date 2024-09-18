import Styles from "./Hero.module.css";
import Header from "../navigation/Header";

const Hero = () => {
	return (
		<>
			<section className={Styles.heroSection}>
				<Header />
				<div className={Styles.title}>
					<h1>DRONOTICZ</h1>
					<h2>THE ERA OF DRONES</h2>
					<hr className={Styles.heroLine} />
				</div>
			</section>
		</>
	);
};

export default Hero;
