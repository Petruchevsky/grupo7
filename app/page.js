import Slider from "./components/Slider";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ProductosDestacados from "./components/ProductosDestacados";
import Image from "next/image";
import "./page.css";

export const metadata = {
	title: "Inicio",
	description: "Bienvenidos a Grupo 7",
};

function Home() {
	return (
		<main>
			<Header />
			<Navbar />
			<section className="main-container-y">
				<Slider />
			</section>
			<hr className="w-75 m-auto" />
			<section>
				<ProductosDestacados />
			</section>
			<hr className="w-75 m-auto" />
			<div className="home-banner">
				<Image
					src="/img/bannerG7.png"
					width={1700}
					height={400}
					alt="Banner G7"
				/>
			</div>
			<Footer />
		</main>
	);
}

export default Home;
