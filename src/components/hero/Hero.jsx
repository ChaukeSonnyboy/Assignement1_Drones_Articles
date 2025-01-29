import Styles from "./Hero.module.css";

const Hero = () => {
	return (
		<section className={Styles.hero}>
			<div>
				<h1>DRONOTICZ</h1>
				<h2>the era of drones</h2>
				<hr className={Styles.heroContainer} />
			</div>
		</section>
	);
};

export default Hero;
