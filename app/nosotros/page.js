import Image from "next/image";
import styles from "./nosotros.module.css"
import { toast } from "react-toastify";
import config from "../utils/ToastConfig";
import ReactMarkdown from "react-markdown";

export const metadata = {
	title: "Nosotros G7",
	description: "Somos una gran empreza familiar en plena expansión!",
	keywords: "nosotros",
};

export const getData = async () => {
	try {
		let response = await fetch(`${process.env.NEXT_PUBLIC_APIURL}/api/nosotro?populate=imagen`, { cache: "no-store" })
		if (response.ok) {
			let { data } = await response.json(); 
			return data;
		} else {
			throw new Error
		}	
	} catch (error) {
		console.error(error);
		toast(error.message, config)
	}
}

async function Nosotros() {

	let data = await getData();
	let imagenData = data.attributes.imagen.data;
	let descripcion = data.attributes.descripcion;

	return (
		<div>
			<h1 className={styles.pageH1}>Sobre Nosotros</h1>

			<div className={styles.contenedor}>
				{ imagenData?.map(img => {
					let { attributes: { url } } = img;
					let { id } = img;
	
					return (
						<Image
							src={ url }
							alt="Imagen sobre nosotros"
							width={300}
							height={300}
							className={styles.imgs}
							key={id}
						/>
					)
				})}
			</div>

			<ReactMarkdown className={styles.pageP}>{ descripcion }</ReactMarkdown>
		   
		</div>	
	);
}

export default Nosotros