import Subscribe from "./components/subscribe/Subscribe";
import Articles from "./components/articles/Articles";
import Footer from "./components/navigation/Footer";
import About from "./components/about/About";
import Hero from "./components/hero/Hero";

function App() {
	return (
		<>
			<Hero />
			<Articles />
			<About />
			<Subscribe />
			<Footer />
		</>
	);
}

export default App;
