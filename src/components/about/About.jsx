import drone5 from "../../assets/images/about.png";
const About = () => {
	return (
		<>
			<section className="aboutSection">
				<div className="aboutContainer">
					<div className="abtImage">
						<img src={drone5} alt="Image of a big drone" />
					</div>
					<div className="abtContent">
						<h2>ABOUT US</h2>
						<p>
							Welcome to our dronotics, where innovation and technology converge
							to shape the future. We revolutionize and improve lives worldwide
							through our passion for pushing the boundaries of what robots can
							do. With expertise in AI, computer vision, mechanical engineering,
							and automation, we lead the way in the robotics revolution. Our
							brilliant team creates intelligent machines that seamlessly
							integrate into daily life, enhancing productivity , safety, and
							efficiency. Join us on this exciting challenges, and shape a
							future where intelligent machones work hand-in-hand with humans.
							Discover the power of robotics and be part of the revolution.{" "}
						</p>
					</div>
				</div>
			</section>
		</>
	);
};

export default About;
