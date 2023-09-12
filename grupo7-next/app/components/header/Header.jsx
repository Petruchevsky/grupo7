'use client'
import styles from "./header.module.css";
import Image from "next/image";
import React, { useEffect, useRef, useState } from 'react';
import Typed from 'typed.js';

const getSlogan = async () => {
	
	try {
		let response = await fetch(`${process.env.NEXT_PUBLIC_APIURL}/api/frases-de-slogans`, { cache: "no-store"})
		if (response.ok) {
			let {data} = await response.json()
			const frases = data?.map(item => item.attributes.frase) || [];
			return frases;
		} else {
			throw new Error("Oh oh... algo se rompió...")
		}
	} catch (error) {
		console.error(error)
	}
	
}

function Header() {

	const slogan = useRef(null);
	let [frases, setFrases] = useState([])

	useEffect(() => {
		getSlogan().then(frases => {
			setFrases(frases)
		})
	}, [])

	useEffect(() => {

		if (frases?.length === 0 || frases === undefined) {
			frases = ['En Grupo 7, nos gusta cuidar el medioambiente...', 'Por eso siempre estamos diseñando y creando pensando en nuestro planeta...', 'Con nuestros envases retornables aportamos nuestro grano de arena...', 'Y sobre todo, estamos creando productos para que tu vida sea mucho más fácil.']
		}

		const options = {
		  strings: frases,
		  typeSpeed: 20,
		  backSpeed: 15,
		  loop: true, 
		  cursorChar: '|',
		};
  
		// Inicializar Typed.js
		const typed = new Typed(slogan.current, options);
  
		// Cleanup
		return () => {
		  typed.destroy();
		};
	 }, [frases]);

	return (
		<header className={`${styles.contenedor} ${styles.headerBgImage} p-0`}>
			<div className={styles.caja}>
		
					<Image
						src="/img/Original.png"
						alt="Logo de Grupo 7"
						width={150}
						height={150}
						priority="true"
						className={styles.logo}
					/>
				
			   <h2 className={styles.cajaH1}>
				<span ref={slogan} />
			   </h2>		
				
			</div>
		</header>
	);
}

export default Header