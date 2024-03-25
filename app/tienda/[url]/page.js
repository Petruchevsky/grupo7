import Header from "@/app/components/Header";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import Image from "next/image";
import Link from "next/link";
import "./tienda-url.css"
import { FaWhatsapp } from "react-icons/fa";
import ReactMarkdown from "react-markdown";

export const metadata = {
	title: "Tienda G7",
	description: "Todos nuestros productos son Biodegradables",
	keywords: "tienda",
};

const obtenerProductos = async (url) => {
	return fetch(
		`${process.env.NEXT_PUBLIC_APIURL}/api/productos?filters[url]=${url}&populate=imagen`,
		{ cache: "no-store" }
	)
		.then((res) => {
			if (!res.ok) {
				throw new Error("Network response was not ok");
			}
			return res.json();
		})
		.catch((error) => {
			console.error(
				"There has been a problem with your fetch operation:",
				error
			);
		});
}

async function Articulo({ params }) {
	let { url } = params;
	let { data } = await obtenerProductos(url);
	let precio = data[0].attributes.precio.toLocaleString("es-CL", {
		style: "currency",
		currency: "CLP",
	});


	return (
		<main>
			<Header />
			<Navbar />
			<section className="url-main-container">
				<h2 className="observacion">
					Recuerda que solo en tu primera compra deberás incluir el costo de
					$1.500 correspondiente a nuestro envase retornable.
					<br />
					<span>
						Los precios de nuestra tienda no incluyen el costo del envase.
					</span>
				</h2>
			
				<section className="inner-container">
					<div className="url-img-div">
								<Image
									src={data[0].attributes.imagen.data.attributes.url}
									alt={`Imagen de Producto`}
									width={300}
									height={300}
									className="url-img"
								/>
					</div>			
			
					<div className="div-text-url">
						<h1>{data[0].attributes.nombre}</h1>
						<h2>{precio}</h2>
						<ReactMarkdown>
							{data[0].attributes.descripcion}
						</ReactMarkdown>
					</div>
			
				
						<div className="btn-div-url">
							<Link
								className="link-button-success"
								href="https://wa.me/56937131180?text=Hola!%20Quisiera%20comprar%20un%20producto%20de%20Grupo%207!"
								target="_blank"
								rel="noopener noreferrer"
							>
								<FaWhatsapp/>Comprar!
							</Link>
						</div>
					
				</section>
			</section>
			<Footer />
		</main>
	);
}

export default Articulo;
