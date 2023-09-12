"use client";
import { Form, Button } from "react-bootstrap";
import { useEffect, useState } from "react";
import styles from "./code.module.css";
import { toast } from "react-toastify";
import config from "@/app/utils/ToastConfig";
import { useRouter } from "next/navigation"
import SpinnerG7 from "@/app/components/spinnerG7/SpinnerG7";

function Code({ params }) {
	const router = useRouter()

	const [loadingPage, setLoadingPage] = useState(true)
	const [loading, setLoading] = useState(false)
	const [password, setPassword] = useState("");
	const [rePassword, setRePassword] = useState("");

	useEffect(()=>{
		setLoadingPage(false)
	}, [])

	const { code } = params;
   
	const handleSubmit = async (e) => {
      e.preventDefault();
		setLoading(true);

      
		try {
			const data = {
				password: password,
				passwordConfirmation: rePassword,
				code: code,
			};
			
			if(data.password !== data.passwordConfirmation) {
				toast.error("Las contraseñas ingresadas deben ser idénticas", config)
				setTimeout(()=>{
					setLoading(false)
				}, 3000)
				return
			}

			let response = await fetch(`${process.env.NEXT_PUBLIC_APIURL}/api/auth/reset-password`, {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},	
				body: JSON.stringify(data),
				credentials: "include"
			 })

			 if(response.ok) {
				 toast.success("¡Contraseña cambiada exitosamente!", config);
				 setTimeout(() => {
					 router.push("/iniciar-sesion")
				 }, 5500);
			 } else {
				const errorData = await response.json();
				const errorMessage = errorData.error.message;
				if(errorMessage.includes('code')) {
					toast.error("Hey!, no es bueno meterse con las contraseñas ajenas!", config)
					setTimeout(()=>{
						setLoading(false)
						router.push("/registrarse")
					},3700)
					return;
				}
				throw new Error(errorMessage);
			 }

		} catch (errorMessage) {
			return toast.error(errorMessage.message)
		}
	};

	return (
		loadingPage ? (<SpinnerG7 />) : (
	
		<div className={styles.container}>
			
				<h1 className={styles.pageH1}>
					Reestableciendo mi Contraseña
				</h1>
			

		{ loading ? <SpinnerG7 /> : (
			<Form className={styles.form} onSubmit={handleSubmit}>
				<Form.Group className={styles.group}>
					<Form.Label className={styles.label}>Nueva Contraseña</Form.Label>
					<Form.Control
						type="password"
						value={password}
						placeholder="Ingresa tu nueva contraseña"
						required
						onChange={(e) => setPassword(e.target.value)}
					/>
				</Form.Group>

				<Form.Group className={styles.group}>
					<Form.Label className={styles.label}>Repetir Nueva Contraseña</Form.Label>
					<Form.Control
						type="password"
						value={rePassword}
						placeholder="Reingresa tu nueva contraseña"
						required
						onChange={(e) => setRePassword(e.target.value)}
					/>
				</Form.Group>

				<Button type="submit">REESTABLECER CONTRASEÑA</Button>
			</Form>
		)}	
		</div>
	
	))
}

export default Code;


// $2a$10$RZ4jLzoCz2agC3lDroCEDuq3lxDSWWwXyUiOvVLw31ITqxMO/Dq8G
// $2a$10$sU3iqMHYPnpP.8NXoIf7wucpuqCoKWuJZzO0IZkQrEFMRpq.OHmNi