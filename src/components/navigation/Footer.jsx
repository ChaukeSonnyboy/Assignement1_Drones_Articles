import Navbar from "./Navbar";
import Socials from "./Socials";
import Styles from "./Navigation.module.css";

const Footer = () => {
	return (
		<div className={Styles.footer}>
			<Socials />
			<Navbar  />
		</div>
	);
};

export default Footer;
