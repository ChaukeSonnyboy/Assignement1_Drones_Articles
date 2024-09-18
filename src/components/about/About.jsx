import drone5 from "../../assets/images/about.png";
import Styles from "./About.module.css";

const About = () => {
	return (
		<>
			<section className={Styles.aboutSection} id="aboutus">
				<div className={Styles.aboutContainer}>
					<div className={Styles.abtImage}>
						<img src={drone5} alt="Image of a big drone" />
					</div>
					<div className={Styles.contentContainer}>
						<div className={Styles.title}>
							<h2>ABOUT US</h2>
							<hr className="titleLine" />
						</div>

						<article className={Styles.aboutDrones}>
							<p>
								Welcome to our dronotics, where innovation and technology
								converge to shape the future. We revolutionize and improve lives
								worldwide through our passion for pushing the boundaries of what
								robots can do. With expertise in AI, computer vision, mechanical
								engineering, and automation, we lead the way in the robotics
								revolution. Our brilliant team creates intelligent machines that
								seamlessly integrate into daily life, enhancing productivity,
								safety, and efficiency. Join us on this exciting challenges and
								shape a future where intelligent machones work hand-in-hand with
								humans. Discover the power of robotics and be part of the
								revolution.{" "}
							</p>
						</article>
					</div>
				</div>
			</section>
		</>
	);
};

export default About;
