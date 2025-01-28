import Styles from "./About.module.css";

const About = () => {
	return (
		<>
			<section className={Styles.aboutSection} id="aboutus">
				<article className={Styles.swiperContainer}>
					<img
						src="https://images.unsplash.com/photo-1473968512647-3e447244af8f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
						alt="White drone image"
					/>
				</article>
				<article className={Styles.aboutContent}>
					<div>
						<div>
							<h2>ABOUT US</h2>
							<hr />
						</div>

						<p>
							Welcome to our dronoticz, where innovation and technology converge
							to shape the future. We revolutionize industries and improve lives
							worldwide through our passion for pushing the boundaries of what
							robots can do. With expertise in AI, computer vision, mechanical
							engineering, and automation, we lead the way in the robotics
							revolution. Our brilliant team creates intelligent machines that
							seamlessly integrate into daily life, enhancing productivity,
							safety, and efficiency.Join us on this exciting journey as we
							unlock new frontiers, solve complex challenges, and shape a future
							where intelligent machines work hand-in-hand with humans. Discover
							the power of robotics and be part of the revolution.
						</p>
					</div>
				</article>
			</section>
		</>
	);
};

export default About;
