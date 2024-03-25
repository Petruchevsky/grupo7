import Producto from "./Producto";
import "./ProductosDestacados.css"
import "../page.css"
import Image from "next/image";

async function getProductos() {
	try {
		const response = await fetch(
			`${process.env.NEXT_PUBLIC_APIURL}/api/productos?populate=imagen`,
			{ cache: "no-store" }
		);

		if (!response.ok) {
			const errorData = await response.json();
			const errorMessage = `Error: ${response.status}: ${errorData.message}`;
			throw new Error(errorMessage);
		}

		const { data } = await response.json();
		return data;
	} catch (error) {
		console.error(error);
	}
}

async function TiendaComp() {

	const data = await getProductos();

	if (data.length === 0) {
		return (
			<div className="PD-container-empty">
				<h1>
					Aún no hemos agregado Productos a Nuestra Tienda
				</h1>

				<Image
					src="/img/tienda-vacia.avif"
					width={626}
					height={351}
					alt="imagen de tienda vacia"
					className="PD-img"
				/>
			</div>
		);
	}

	return (
		<main className="main-container-y main-container-PD">
			<h1 className="h1-page">Tienda</h1>

			<div className="PD-container">
				{data &&
					data.map((producto) => {
						return (
							<Producto
								key={producto.id.toString()}
								producto={producto.attributes}
							/>
						);
					})}
			</div>

            <div className="home-banner">
				<Image
					src="/img/bannerG7.png"
					width={1700}
					height={400}
					alt="Banner G7"
				/>
			</div>
			
		</main>
	);
}

export default TiendaComp;
