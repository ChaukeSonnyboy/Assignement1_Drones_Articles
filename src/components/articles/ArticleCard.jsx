import Styles from "./Articles.module.css";
import surveillanceImage from "../../assets/images/surveillance.png";
import roboticsImage from "../../assets/images/robotics.png";
import prostheticsImage from "../../assets/images/prosthetics.png";
import agricultureImage from "../../assets/images/agriculture.png";

const ArticleCard = () => {
	const drones = [
		{
			id: 1,
			source: surveillanceImage,
			description: "How to automate surveillance drones",
			altext: "Surveillance drone image",
		},
		{
			id: 2,
			source: roboticsImage,
			description: "Robotics and Artificial Intelligence",
			altext: "Robotics drone image",
		},
		{
			id: 3,
			source: prostheticsImage,
			description: "Improving Lives through Robotics Prosthetics",
			altext: "Prosthetics drone image",
		},
		{
			id: 4,
			source: agricultureImage,
			description: "Power of Robotics in Agriculture",
			altext: "Agriculture drone image",
		},
	];

	return (
		<>
			<ul className={Styles.list}>
				{drones.map((drone) => (
					<li className="article-card" key={drone.id}>
						<div className={Styles.card}>
							<img
								className={Styles.img}
								src={drone.source}
								alt={drone.altext}
							/>
							<div className={Styles.content}>
								<hr />
								<p>{drone.description}</p>
							</div>
						</div>
					</li>
				))}
			</ul>
		</>
	);
};

export default ArticleCard;
