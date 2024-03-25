"use client";
import Image from "next/image";
import "./NosotrosComp.css";
import ReactMarkdown from "react-markdown";
import Link from "next/link";
import { Slide, Zoom, Bounce } from "react-awesome-reveal";

function NosotrosComp({ descripcion, imagenes }) {
	return (
		<main className="nosotros-container">
			<Bounce><h1 className="h1-page">Nosotros</h1></Bounce>
			<Slide>
				<div className="nosotros-img-container">
					{imagenes?.map((img) => {
						let {
							attributes: { url },
						} = img;
						let { id } = img;
				
						return (
							<Image
								src={url}
								alt="Imagen sobre nosotros"
								width={300}
								height={300}
								className="nosotros-img"
								key={id}
							/>
						);
					})}
				</div>
			</Slide>
			<Slide><ReactMarkdown>{descripcion}</ReactMarkdown></Slide>
			<Bounce>
				<Link
					className="link-button"
					href="mailto:contacto@grupo7.cl?subject=Consulta"
				>
					Escríbenos!
				</Link>
			</Bounce>
		</main>
	);
}

export default NosotrosComp;
