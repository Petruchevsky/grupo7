import Header from "../components/Header";
import Navbar from "../components/Navbar";
import TiendaComp from "../components/TiendaComp";
import Footer from "../components/Footer";

export const metadata = {
	title: "Tienda G7",
	description: "Productos 100% Biodegradables",
};

async function Tienda() {

	return (
		<div>
			<Header />
			<Navbar />
			<TiendaComp />
			<Footer />
		</div>
	);
}

export default Tienda;
