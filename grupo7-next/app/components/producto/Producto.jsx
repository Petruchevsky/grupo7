'use client'
import Image from "next/image";
import Link from "next/link";
import { Button } from "react-bootstrap";
import styles from "./producto.module.css"


const Producto = ({ producto }) => {

	let imgURL = producto.imagen.data.attributes.url

	let { nombre, precio, stock, url } = producto;
	precio = precio.toLocaleString("es-CL", {
		style: "currency",
		currency: "CLP",
	})


	return (

		<div className={`${styles.caja} bsg`}>
					
					<Image
						src={imgURL}
						alt={`Imagen de Producto ${nombre}`}
						width={300}
						height={300}
						className={styles.imgProducto}
					/>
				
			<div className={styles.cajaText}>
				<h1 className={styles.productoH1}>{nombre}</h1>
				<h2 className={styles.productoH2}>Precio: {precio}</h2>
				<p className={styles.productoP}>Disponible: {stock ? "SI" : "NO"}</p>
				{stock ? (
					<Link href={`/tienda/${url}`} className="w-full">
						<Button className={`${styles.boton}`}>
							Ver Producto
						</Button>
					</Link>
				) : (
					<Button className={`${styles.boton}`} disabled>
						Ver Producto
					</Button>
				)}
			</div>
		</div>
	
	);
};

export default Producto;
