"use client";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import config from "@/app/utils/ToastConfig";
import "react-toastify/dist/ReactToastify.css";
import Producto from "../producto/Producto";
import styles from "./tienda.module.css";
import SpinnerG7 from "../spinnerG7/SpinnerG7";
import Image from "next/image";

export async function getProductos() {
	try {
		const response = await fetch(
			`${process.env.NEXT_PUBLIC_APIURL}/api/productos?populate=imagen`,
			{ cache: "no-store" }
		);

		if (!response.ok) {
			throw new Error(`Error al cargar los productos: ${response.statusText}`);
		}

		let { data: productos } = await response.json();
		return productos;
	} catch (error) {
		console.error(error);
		throw error; // Re-lanza el error para que pueda ser manejado por quien invoca la función
	}
}

export default function TiendaComponente() {
	const [productos, setProductos] = useState(null);
	const [error, setError] = useState(false);

	useEffect(() => {
		getProductos()
			.then((productos) => setProductos(productos))
			.catch((error) => {
				console.error(error);
				toast("Error al cargar los productos. Recargando la página...", config);
				setError(true);
				setTimeout(() => window.location.reload(), 4000);
			});
	}, []);

	if (error) return <SpinnerG7 />;
	if (!productos) return <SpinnerG7 />;
	
	if (productos.length === 0) {
		return (
			<div className={styles.container}>
				<h1 className={styles.H1}>
					Aún no hemos agregado Productos a Nuestra Tienda
				</h1>

				<Image
					src="/img/tienda-vacia.avif"
					width={626}
					height={351}
					alt="imagen de tienda vacia"
					className={styles.Img}
				/>
			</div>
		);
	}

	return (
		<div>
			<h1 className={styles.pageH1}>Nuestra Tienda</h1>
			<h2 className={styles.observacion}>
				Recuerda que solo en tu primera compra deberás incluir el costo de
				$1.500 correspondiente a nuestro envase retornable.<br></br>
				<span>
					Los precios de nuestra tienda no incluyen el costo del envase.
				</span>
			</h2>

			<div className={styles.contenedor}>
				{productos &&
					productos.map((producto) => {
						return (
							<Producto
								key={producto.id.toString()}
								producto={producto.attributes}
							/>
						);
					})}
			</div>
		</div>
	);
}
