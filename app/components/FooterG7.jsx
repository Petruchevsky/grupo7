// "use client";
// import Link from "next/link";
// import styles from "./Footer.module.css";
// import { Form, Button } from "react-bootstrap";
// import React, { useState, useContext } from "react";
// import { AuthContext } from "@/app/context/AuthContext";


// const Footer = () => {
// 	const { isLoggedIn } = useContext(AuthContext);

// 	const [msje, setMsje] = useState("");
// 	const [asunto, setAsunto] = useState("");

// 	const [loading, setLoading] = useState(false);



// 	function handleSubmit(e) {
// 		e.preventDefault();

// 		const email = localStorage.getItem("userEmail");
// 		const data = {
// 			email: email,
// 			asunto: asunto,
// 			msje: msje,
// 		};

// 		if (!isLoggedIn) {
// 			setModalLoginTitle("¡Oops!");
// 			setModalLoginMessage(
// 				"Lo sentimos, pero no puedes dejar tu mensaje sin iniciar sesión previamente."
// 			);
// 			setModalLoginImage("/img/oops.webp");
// 			setModalLogin(true);
// 			return;
// 		}

// 		setLoading(true);

// 		fetch(`/api/send-mail`, {
// 			method: "POST",
// 			headers: {
// 				"Content-Type": "application/json",
// 			},
// 			body: JSON.stringify(data),
// 		})
// 			.then((response) => {
// 				if (response.status === 200) {
// 					setModalTitle("¡Excelente!");
// 					setModalMessage("¡Mensaje enviado correctamente!");
// 					setModalImage("/img/msje-enviado.jpg");
// 					setLoading(false);
// 				} else {
// 					setModalTitle("¡Oh no, oh nooo!");
// 					setModalMessage(
// 						"Error al enviar el mensaje. Por favor inténtalo de nuevo..."
// 					);
// 					setModalImage("/img/msje-no-enviado.avif");
// 					setLoading(false);
// 				}
// 				setModal(true);
// 			})
// 			.catch((error) => {
// 				console.error("Oh no!, Mensaje no enviado", error.message);
// 				setModalMessage("¡Ay caramba! Algo salió mal.");
// 				setModalMessage(
// 					"Error al enviar el mensaje. Por favor inténtalo de nuevo..."
// 				);
// 				setModalImage("/img/msje-no-enviado.avif");
// 				setModal(true);
// 				setLoading(false);
// 			});
// 	}

// 	return (
// 		<footer className={styles.footerDiv}>
// 			<div className={styles.contenedor}>
// 				{/* Enlaces */}
// 				<div className={styles.cajaEnlaces}>
// 					<h5 className={styles.cajaH1}>Enlaces</h5>
// 					<div className={`${styles.caja} bsg`}>
// 						<ul className="list-none p-3 m-0">
// 							<li className={styles.links}>
// 								<Link href="/" className={styles.links}>
// 									Inicio
// 								</Link>
// 							</li>
// 							<li className={styles.links}>
// 								<Link href="/nosotros" className={styles.links}>
// 									Nosotros
// 								</Link>
// 							</li>
// 							<li className={styles.links}>
// 								<Link href="/tienda" className={styles.links}>
// 									Tienda
// 								</Link>
// 							</li>
// 							<li className={styles.links}>
// 								<Link href="/blog" className={styles.links}>
// 									Tips
// 								</Link>
// 							</li>
// 							<li className={styles.links}>
// 								<Link href="/proximamente" className={styles.links}>
// 									Proximamente
// 								</Link>
// 							</li>
// 						</ul>
// 					</div>
// 				</div>

// 				{/* Mapa */}
// 				{loading ? (
// 					<SpinnerG7 />
// 				) : (
// 					<div className={styles.cajaMaps}>
// 						<h5 className={styles.cajaH1}>Ubicación</h5>
// 						<div className="">
// 							<iframe
// 								src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3327.2686818287507!2d-70.61061852538631!3d-33.494386073372105!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9662d01041b0615d%3A0x1c0d56224fade49f!2sSergio%20Vieira%20de%20Mello%204524%2C%207820204%20Macul%2C%20Regi%C3%B3n%20Metropolitana!5e0!3m2!1sen!2scl!4v1694029121849!5m2!1sen!2scl"
// 								width="100%"
// 								height="300"
// 								style={{ border: "0" }}
// 								allowFullScreen=""
// 								loading="lazy"
// 								onLoad={() => setLoading(false)}
// 								referrerPolicy="no-referrer-when-downgrade"
// 								title="Mapa"
// 								className="rounded-4 bsg"
// 							></iframe>
// 						</div>
// 					</div>
// 				)}

// 				{/* Formulario */}
// 				{loading ? (
// 					<SpinnerG7 />
// 				) : (
// 					<form
// 						className={styles.cajaForm}
// 						onSubmit={handleSubmit}
// 						noValidate
// 						autoComplete="off"
// 					>
// 						<div>
// 							<h5 className={styles.cajaH1}>Déjanos un Mensaje!</h5>
// 							<div className={`${styles.caja} bsg`}>
// 								<Form.Group className="mb-3">
// 									<Form.Label htmlFor="asunto" className={styles.formLabel}>
// 										Asunto
// 									</Form.Label>
// 									<Form.Control
// 										className={styles.formInput}
// 										onChange={(e) => setAsunto(e.target.value)}
// 										required
// 										id="asunto"
// 										type="text"
// 									/>
// 								</Form.Group>

// 								<Form.Group className="mb-3">
// 									<Form.Label htmlFor="message" className={styles.formLabel}>
// 										Mensaje
// 									</Form.Label>
// 									<Form.Control
// 										className={styles.formTextarea}
// 										onChange={(e) => setMsje(e.target.value)}
// 										id="message"
// 										placeholder="Mensaje"
// 										as="textarea"
// 										rows={6}
// 									/>
// 								</Form.Group>

// 								<Button
// 									type="submit"
// 									className={`${styles.formButton} bg-blue-500`}
// 								>
// 									ENVIAR
// 								</Button>
// 							</div>
// 						</div>
// 					</form>
// 				)}
// 			</div>

// 			<div className={`${styles.cajaPie} text-center text-gray-700 bsw`}>
// 				<p className={styles.cajaPSm}>
// 					<span className="text-blue-600">Grupo 7 </span>{" "}
// 					<span className="text-green-500">&copy;</span> Todos los derechos
// 					reservados. Desarrollado por Moisés Berdichevsky,{" "}
// 					{new Date().getFullYear()}.
// 				</p>
// 			</div>

// 			<MyModal
// 				show={modal}
// 				onHide={() => setModal(false)}
// 				title={modalTitle}
// 				message={modalMessage}
// 				imageUrl={modalImage}
// 				className={styles.modalDiv}
// 			/>

// 			<MyModalLogin
// 				show={modalLogin}
// 				onHide={() => setModalLogin(false)}
// 				title={modalLoginTitle}
// 				message={modalLoginMessage}
// 				imageUrl={modalLoginImage}
// 				className={styles.modalDiv}
// 			/>
// 		</footer>
// 	);
// };

// export default Footer;
