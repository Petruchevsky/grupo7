import Image from "next/image";
import Link from "next/link";
import styles from "./articulo.module.css";
import ReactMarkdown from "react-markdown";

export const metadata = {
	title: "Tienda G7",
	description: "Todos nuestros productos son Biodegradables",
	keywords: "tienda",
};

export async function obtenerProductos(url) {
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
		<div className={styles.contenedor}>
			<h2 className={styles.observacion}>
				Recuerda que solo en tu primera compra deberás incluir el costo de
				$1.500 correspondiente a nuestro envase retornable.
				<br />
				<span>
					Los precios de nuestra tienda no incluyen el costo del envase.
				</span>
			</h2>
			<div className={styles.main}>
				<div className={styles.DivImgArt}>

							<Image
								src={data[0].attributes.imagen.data.attributes.url}
								alt={`Imagen de Producto`}
								width={300}
								height={300}
								className={styles.imgArt}
							/>
				</div>			
	
				<div className={styles.cajaText}>
					<h1 className={styles.articuloH1}>{data[0].attributes.nombre}</h1>
					<h2 className={styles.articuloPrecio}>{precio}</h2>
					<ReactMarkdown className={styles.articuloP}>
						{data[0].attributes.descripcion}
					</ReactMarkdown>
				</div>

				<div className={styles.cajaBtns}>
					<Link
						className={styles.btnWhatsApp}
						href="https://wa.me/56937131180"
						target="_blank"
						rel="noopener noreferer"
					>
						<Image
							src="/img/whatsapp_PNG3.png"
							width={200}
							height={200}
							alt="icono de whatsapp"
							className={styles.btnWhatsApp}
						/>
					</Link>
					<p className={styles.pedido}>COMPRAR!</p>
					{/* <button className="btn btn-success">AGREGAR AL CARRITO</button>
					<button className="btn btn-danger">QUITAR DEL CARRITO</button>
					<button className="btn btn-primary">IR AL CARRITO</button> */}
				</div>
			</div>
		</div>
	);
}

export default Articulo;
