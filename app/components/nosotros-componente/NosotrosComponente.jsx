'use client'
import Image from "next/image";
import styles from "./nosotros.module.css"
import { toast } from "react-toastify";
import config from "@/app/utils/ToastConfig";
import ReactMarkdown from "react-markdown";
import { useEffect, useState } from "react";

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
      return null;
	}
}

function NosotrosComponente() {

   let [data, setData] = useState()

	useEffect(()=>{
      getData().then(data=>{
         setData(data)
      })
   }, [])

	let imagenData = data?.attributes?.imagen?.data;
	let descripcion = data?.attributes?.descripcion;

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

export default NosotrosComponente