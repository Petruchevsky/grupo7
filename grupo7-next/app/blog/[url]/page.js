import Image from "next/image";
import styles from "./postUrl.module.css";
import { toast } from "react-toastify";
import config from "@/app/utils/ToastConfig";
import ReactMarkdown from "react-markdown";

export const metadata = {
   title: "Tips G7",
   description: "Mira Nuestros tips de Limpieza"
}

async function getBlog(url) {
	try {
		const response = await fetch(
			`${process.env.NEXT_PUBLIC_APIURL}/api/blogs?filters[url]=${url}&populate=imagen`,
			{ cache: 'no-store' }
		);

		if (!response.ok) throw new Error('Algo salió mal');
		return await response.json();

	} catch (error) {
		console.error(error);
		toast.error("Error al cargar este Tip", config)
	}
}


async function PostURL ({ params }) {
  
   let { url } = params;
   let { data } = await getBlog(url);
   let { titulo, contenido, createdAt, imagen } = data[0].attributes;
   const date = new Date(createdAt);
	const options = {
		year: 'numeric',
		month: 'long',
		day: 'numeric',
		hour: '2-digit',
		minute: '2-digit',
	};
	const formattedDate = date.toLocaleDateString('es-ES', options) + ' hrs.';
  

  	return (
		<div className={styles.contenedor}>
			<h1 className={styles.pageH1}>{titulo}</h1>
			<h2 className={styles.postFecha}>{formattedDate}</h2>
  
			<div className={styles.article}>
				<div className={styles.imgDiv}>
      
							<Image
								src={imagen.data.attributes.url}
								alt={`Imagen de Producto`}
								width={1000}
								height={1000}
								className={styles.imgs}
							/>
		
				</div>
      
			   <ReactMarkdown className={styles.postP}>{contenido}</ReactMarkdown>
				
			</div>
		</div>
	);
}

export default PostURL;