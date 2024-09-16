import Styles from "./Articles.module.css";

const ArticleCard = () => {
	const drones = [
		{
			id: 1,
			source: "src/assets/images/surveillance.png",
			description: "How to automate surveillance drones",
			altext: "Surveillance drone image",
		},
		{
			id: 2,
			source: "src/assets/images/robotics.png",
			description: "Robotics and Artificial Intelligence",
			altext: "Robotics drone image",
		},
		{
			id: 3,
			source: "src/assets/images/prosthetics.png",
			description: "Improving Lives through Robotics Prosthetics",
			altext: "Prosthetics drone image",
		},
		{
			id: 4,
			source: "/src/assets/images/agriculture.png",
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
