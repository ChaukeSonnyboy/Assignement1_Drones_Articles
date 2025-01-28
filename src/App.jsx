import Subscribe from "./components/subscribe/Subscribe";
import Articles from "./components/articles/Articles";
import Footer from "./components/navigation/Footer";
import About from "./components/about/About";
import Hero from "./components/hero/Hero";
import Header from "./components/navigation/Header";

function App() {
	return (
		<>
			<Header />
			<Hero />
			<Articles />
			<About />
			<Subscribe />
			<Footer />
		</>
	);
}

export default App;
