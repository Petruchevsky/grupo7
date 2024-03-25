import Image from "next/image";
import "./post-url.css";
import ReactMarkdown from "react-markdown";
import Header from "@/app/components/Header";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";

export const metadata = {
	title: "Tips G7",
	description: "Nuestros tips de Limpieza",
};

async function getBlog(url) {
	try {
		const response = await fetch(
			`${process.env.NEXT_PUBLIC_APIURL}/api/blogs?filters[url]=${url}&populate=imagen`,
			{ cache: "no-store" }
		);

		if (!response.ok) throw new Error("Algo salió mal");
		return await response.json();
	} catch (error) {
		console.error(error);
		toast.error("Error al cargar este Tip", config);
	}
}

async function PostURL({ params }) {
	let { url } = params;
	let { data } = await getBlog(url);
	let { titulo, contenido, createdAt, imagen } = data[0].attributes;
	const date = new Date(createdAt);
	const options = {
		year: "numeric",
		month: "long",
		day: "numeric",
		hour: "2-digit",
		minute: "2-digit",
	};
	const formattedDate = date.toLocaleDateString("es-ES", options) + " hrs.";

	return (
		<main>
			<Header />
			<Navbar />

			<div className="post-url-container">
				<h1 className="h1-page">{titulo}</h1>
				<h2>{formattedDate}</h2>

				<article className="post-url-article">
					<div className="post-url-img-div ">
						<Image
							src={imagen.data.attributes.url}
							alt={`Imagen de Producto`}
							width={1000}
							height={1000}
							className="post-url-img"
						/>
					</div>
					<ReactMarkdown>{contenido}</ReactMarkdown>
				</article>
			</div>

			<Footer />
		</main>
	);
}

export default PostURL;
