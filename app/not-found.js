import styles from "./not-found.module.css"
import Link from "next/link";
import React from "react";

export default function NotFound() {
	return (
		<div className={styles.container}>
			<Link
				href="/"
				className={styles.boton}
			>Volver al Inicio</Link>
			<img
				src="/img/not-found-page.jpg"
				alt="imagen de pagina no encontrada"
			/>
		</div>
	);
}

export async function getServerSideProps() {
	return { notFound: true };
 }
