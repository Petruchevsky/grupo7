"use client";
import Image from "next/image";
import { useState, useEffect } from 'react';
import styles from "./registro-exitoso.module.css";

function RegistroExitosoComponente() {
	const [email, setEmail] = useState('');
	const [nombreCapitalizado, setNombreCapitalizado] = useState('');

	useEffect(() => {
		const emailFromLS = localStorage.getItem("RegisteredEmail");
		const nombreLS = localStorage.getItem('UserName');

		if (nombreLS) {
			const nombre = nombreLS.split(' ')[0];
			const nombreCap = nombre.charAt(0).toUpperCase() + nombre.slice(1).toLowerCase();
			setNombreCapitalizado(nombreCap);
		}

		setEmail(emailFromLS);
	}, []);

	return (
		<div className={styles.container}>
			<div className={styles.textDiv}>
				<h1>¡Felicidades {nombreCapitalizado}!</h1>
				<h2> Te has registrado exitosamente en <span>Grupo 7</span></h2>
				
				<p>
					Por favor revisa la bandeja de entrada de <span>{email}</span> y pincha el enlace que
					te hemos enviado para confirmar tu cuenta.
				</p>
			</div>

			<Image
				src="/img/exito.jpg"
				alt="Foto de exito"
				width={600}
				height={400}
				className={styles.image}
			/>
		</div>
	);
}

export default RegistroExitosoComponente;
