import { FaFacebook } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";
import { FaPinterest } from "react-icons/fa";
import Styles from "./Navigation.module.css";

const Socials = () => {
	return (
		<>
			<div className={Styles.socialsContainer}>
				<nav>
					<ul className={Styles.socialsLinks}>
						<li>
							<a href="https://www.facebook.com/" target="_blank">
								<FaFacebook className={Styles.socialIcon} />
							</a>
						</li>
						<li>
							<a href="https://www.linkedin.com/ " target="_blank">
								<FaLinkedin className={Styles.socialIcon} />
							</a>
						</li>
						<li>
							<a href="https://za.pinterest.com/" target="_blank">
								<FaPinterest
									className={`${Styles.socialIcon} ${Styles.pinterestIcon}`}
								/>
							</a>
						</li>
					</ul>
				</nav>
			</div>
		</>
	);
};

export default Socials;
