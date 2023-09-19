"use client";
import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import styles from "./iniciar-sesion.module.css";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useContext } from "react";
import { AuthContext } from "@/app/context/AuthContext";
import Cookies from "js-cookie";
import { toast } from "react-toastify";
import config from "@/app/utils/ToastConfig";
import SpinnerG7 from "../spinnerG7/SpinnerG7";


function IniciarSesionComponente() {
	
	const router = useRouter();
	const [loading, setLoading] = useState(false);
	const { setIsLoggedIn } = useContext(AuthContext);

	const [identifier, setIdentifier] = useState("");
	const [password, setPassword] = useState("");

	const handleSubmit = async (e) => {
		e.preventDefault();

		setLoading(true)	
		const data = {
			identifier: identifier,
			password: password,
		};

		localStorage.setItem("userEmail", identifier);

		try {
			let response = await fetch(
				`${process.env.NEXT_PUBLIC_APIURL}/api/auth/local`,
				{
					method: "POST",
					headers: {
						"Content-Type": "application/json",
					},
					body: JSON.stringify(data),
					credentials: "include",
				}
			);

			if (response.ok) {
				toast.success("¡Login Exitoso!, Cargando...", config)
				const { jwt } = await response.json();
				Cookies.set("authToken", jwt, {
					expires: 1,
				});
				setIsLoggedIn(true);
				setTimeout(()=>{
					setLoading(false)
				},3700)
				router.push("/");

			} else {
				const errorData = await response.json()
				const errorMessage = errorData.error.message;
				if(errorMessage.includes('confirmed')) {
					toast.error("Debes confirmar tu cuenta antes de iniciar sesión", config)
					setTimeout(()=>{
						setLoading(false)
					},3700)
				} else {
						console.log(errorMessage)
				      toast.error("Email o Contraseña Inválida", config)
						setTimeout(()=>{
							setLoading(false)
						},3700)
					}	
			}
		} catch (error) {
			toast.error(error.message);
			setTimeout(()=>{
				setLoading(false)
			},3700)
		}
	};

	const forgotPassword = async () => {

		setLoading(true)

		try {
			const data = { email: identifier }; 

			let response = await fetch(`${process.env.NEXT_PUBLIC_APIURL}/api/auth/forgot-password`, {
			  method: 'POST',
			  headers: { 'Content-Type': 'application/json' },
			  body: JSON.stringify(data)
			})

			if(response.ok) {
				response = await response.json()
				console.log(response)
				toast("Si estás registrado, recibirás un Email para reestablecer tu Contraseña", config);
				setTimeout(()=>{
					setLoading(false)
				},3700)
			} else {
				const errorData = await response.json();
				const errorMessage = errorData.error.message;
				console.log(errorMessage)
				throw new Error(errorMessage)
			}
		} catch (errorMessage) {
			if(errorMessage.message === "email must be a valid email") {
				toast.error("Email inválido, inténtalo de nuevo", config)
				setTimeout(()=>{
					setLoading(false)
				},2000)
			} else {
				toast.error(errorMessage.message)
				setTimeout(()=>{
					setLoading(false)
				},3700)
			}
		}
	} 

	return (
		<div>
			<div className={styles.contenedor}>
				
					<Image
						src="/img/oro_fondo_oscuro.jpg"
						alt="Imagen de Logotipo de Grupo 7"
						width={500}
						height={500}
						className={styles.logo}
					/>
			
			{ loading ? <SpinnerG7 /> : (
				<div className={styles.divForm}>
					<Form className={styles.form} onSubmit={handleSubmit}>
						<Form.Group>
							<Form.Label className={styles.formLabel}>Email</Form.Label>
							<Form.Control
								type="email"
								placeholder="Ingresa tu email"
								value={identifier}
								onChange={(e) => setIdentifier(e.target.value)}
								required
								className={styles.formInput}
							/>
						</Form.Group>
			
						<Form.Group>
							<Form.Label className={styles.formLabel}>Contraseña</Form.Label>
							<Form.Control
								type="password"
								placeholder="Contraseña"
								value={password}
								onChange={(e) => setPassword(e.target.value)}
								required
								className={styles.formInput}
							/>
						</Form.Group>
			
						<Button
							variant="primary"
							type="submit"
							className={`${styles.button} w-full`}
						>
							INICIAR SESION
						</Button>
			
						<Link href="#" className={styles.links}>
							<button onClick={forgotPassword}>¿Olvidaste tu Contraseña?</button>
						</Link>
						<br /><br />
						<Link href="/registrarse" className={styles.links}>
							¿No tienes una cuenta aún? ¡Regístrate Aquí!
						</Link>
					</Form>
				</div>
			)}
				
					<h1 className={styles.pageH1}>Iniciar Sesión</h1>
				
			
			</div>
		</div>
	);
}

export default IniciarSesionComponente;
