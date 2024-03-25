"use client";
import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import styles from "./registrarse.module.css";
import Image from "next/image";
import { useRouter } from "next/navigation";

function RegistrarseComponente() {
	const router = useRouter();

	const [loading, setLoading] = useState(false);
	const [usuario, setUsuario] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [confirmPassword, setConfirmPassword] = useState("");

	const handleSubmit = async (e) => {
		e.preventDefault();

		const randomValue = Math.floor(Math.random() * 10000000);
		const usuarioModificado = `${usuario} - ${randomValue}`;

		// Collect form data.
		const data = {
			username: usuarioModificado,
			email: email,
			password: password,
			confirmPassword: confirmPassword,
			registered: true,
		};

		if (password !== confirmPassword) {
			alert("Las contraseñas no coinciden. Inténtalo de nuevo.");
			setPassword("");
			setConfirmPassword("");
			return;
		}

		setLoading(true);

		try {
			const response = await fetch(
				`${process.env.NEXT_PUBLIC_APIURL}/api/auth/local/register`,
				{
					method: "POST",
					headers: {
						"Content-Type": "application/json",
					},
					body: JSON.stringify(data),
				}
			);

			if (response.ok) {
				toast("Espera un segundo, te estamos registrando...");
				localStorage.setItem("RegisteredEmail", email);
				localStorage.setItem("UserName", usuario);
				setTimeout(() => {
					router.push("/registro-exitoso");
				}, 3500);
				setLoading(false);
				setUsuario("");
				setEmail("");
				setPassword("");
				setConfirmPassword("");
			} else {
				const errorData = await response.json();
				const errorMessage = errorData.error.message;
				console.log(errorMessage);

				if (errorMessage.includes("Email")) {
					alert("Usuario ya registrado en Grupo 7, por favor inicia sesión");
					setUsuario("");
					setEmail("");
					setPassword("");
					setConfirmPassword("");
					setLoading(false);
				} else {
					alert("Error desconocido, por favor inténtalo otra vez");
					setLoading(false);
				}
			}
		} catch (error) {
			console.error("Error:", error);
			setLoading(false);
		}
	};

	return (
		<div className={styles.contenedor}>
			<Image
				src="/img/oro_fondo_oscuro.jpg"
				alt="Imagen de Logotipo de Grupo 7"
				width={500}
				height={500}
				className={styles.logo}
			/>

			<div className={styles.divForm}>
				<Form className={styles.form} onSubmit={handleSubmit}>
					<Form.Group>
						<Form.Label className={styles.formLabel}>
							Nombre de Usuario
						</Form.Label>
						<Form.Control
							type="text"
							placeholder="Ingresa tu nombre de usuario"
							value={usuario}
							onChange={(e) => setUsuario(e.target.value)}
							required
							className={styles.formInput}
						/>
					</Form.Group>

					<Form.Group>
						<Form.Label className={styles.formLabel}>Email</Form.Label>
						<Form.Control
							type="email"
							placeholder="Ingresa tu email"
							value={email}
							onChange={(e) => setEmail(e.target.value)}
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
							autoComplete="true"
						/>
					</Form.Group>

					<Form.Group>
						<Form.Label className={styles.formLabel}>
							Confirmar Contraseña
						</Form.Label>
						<Form.Control
							type="password"
							placeholder="Por Favor Repite tu Contraseña"
							value={confirmPassword}
							onChange={(e) => setConfirmPassword(e.target.value)}
							required
							className={styles.formInput}
						/>
					</Form.Group>

					<Button
						variant="primary"
						type="submit"
						className={`${styles.button} w-full`}
					>
						REGISTRARSE
					</Button>
				</Form>
			</div>

			<h1 className={styles.pageH1}>Regístrate Aquí</h1>
		</div>
	);
}

export default RegistrarseComponente;
