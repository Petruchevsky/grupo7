'use client'
import Image from "next/image";
import Link from "next/link";
import { Button } from "react-bootstrap";
import { Zoom } from "react-awesome-reveal";
import "./Producto.css"


const Producto = ({ producto }) => {

	let imgURL = producto.imagen.data.attributes.url

	let { nombre, precio, stock, url } = producto;
	precio = precio.toLocaleString("es-CL", {
		style: "currency",
		currency: "CLP",
	})


	return (

		<Zoom cascade damping={0.1}>
			<div className="card-prod">
						<Image
							src={imgURL}
							alt={`Imagen de Producto ${nombre}`}
							width={300}
							height={300}
							className="img-prod"
						/>
					
				<div className="card-prod-text">
					<Zoom cascade damping={0.2}>
						<h1>{nombre}</h1>
						<h2>Precio: {precio}</h2>
						<p>Disponible: {stock ? "SI" : "NO"}</p>
						{stock ? (
							<Link href={`/tienda/${url}`} className="link-button">
									Ver Producto
							</Link>
						) : (
							<Button className="link-button" variant="outlined" disabled>
								Ver Producto
							</Button>
						)}
					</Zoom>
				</div>
			</div>
		</Zoom>
	
	);
};

export default Producto;
