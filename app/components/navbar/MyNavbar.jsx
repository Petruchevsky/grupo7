"use client";
import { useState, useContext } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { FaWhatsapp, FaFacebook, FaInstagram, FaPhone } from "react-icons/fa";
import styles from "./myNavbar.module.css";
import { useRouter } from "next/navigation";
import { AuthContext } from "@/app/context/AuthContext";
import Cookies from "js-cookie";
import dynamic from "next/dynamic";
import { toast } from "react-toastify";
import config from "@/app/utils/ToastConfig";

const MyNavbar = () => {
	const router = useRouter();
	const { isLoggedIn, setIsLoggedIn } = useContext(AuthContext);
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	const handleLogout = () => {
		toast("¡Vuelve Pronto!", config)
		Cookies.remove("authToken");
		setIsLoggedIn(false);
		setTimeout(()=>{
			router.push("/iniciar-sesion")
		},3500)
	};

	const toggleMenu = () => {
		setIsMenuOpen(!isMenuOpen);
	};

	return (
		<Navbar
			className={`position-sticky top-0 ${styles.cajaNav}`}
			expand="lg"
			variant="light"
			bg="primary backdrop-blur bg-opacity-75 backdrop-filter"
		>
			<Container>
				<Navbar.Brand href="/" className={`${styles.brand}`}>
					Grupo 7
				</Navbar.Brand>
				<Navbar.Toggle
					className={styles.burger}
					onClick={toggleMenu}
					aria-controls="navbar-nav"
				/>
				<Navbar.Collapse id="navbar-nav" className={`${isMenuOpen ? "show" : ""}`}>
					<Nav className={styles.navLadoIzquierdo}>
						<Nav.Link href="/" className={styles.links}>
							Inicio
						</Nav.Link>
						<Nav.Link href="/tienda" className={`${styles.links}`}>
							Tienda
						</Nav.Link>
						<Nav.Link href="/nosotros" className={`${styles.links}`}>
							Nosotros
						</Nav.Link>
						<Nav.Link href="/blog" className={`${styles.links}`}>
							Tips
						</Nav.Link>
						<Nav.Link href="/proximamente" className={`${styles.links}`}>
							Proximamente
						</Nav.Link>
					</Nav>
					<Nav className={styles.navLadoDerecho}>
						<Nav className={styles.navIcons}>
							<Nav.Link
								className={`${styles.links} ${styles.carritoDiv}`}
								href="tel:+56937131180"
								rel="noopener noreferer"
								target="_blank"
							>
								<FaPhone className={styles.carrito} />
							</Nav.Link>
							<Nav.Link
								className={`${styles.links} ${styles.carritoDiv}`}
								href="https://www.facebook.com/profile.php?id=100093444983434"
								rel="noopener noreferer"
								target="_blank"
							>
								<FaFacebook className={styles.carrito} />
							</Nav.Link>
							<Nav.Link
								className={`${styles.links} ${styles.carritoDiv}`}
								href="https://wa.me/56937131180"
								rel="noopener noreferer"
								target="_blank"
							>
								<FaWhatsapp className={styles.carrito} />
							</Nav.Link>
							<Nav.Link
								className={`${styles.links} ${styles.carritoDiv}`}
								href="https://www.instagram.com/grupo7_social/"
								rel="noopener noreferer"
								target="_blank"
							>
								<FaInstagram className={styles.carrito} />
							</Nav.Link>
						</Nav>

						{!isLoggedIn ? (
							<>
								<Nav.Link className={`${styles.links}`} href="/iniciar-sesion">
									Iniciar sesión
								</Nav.Link>
								<Nav.Link className={styles.links} href="/registrarse">
									Registrarse
								</Nav.Link>
							</>
						) : (
							<Nav.Link
								className={styles.links}
								href="#"
								onClick={handleLogout}
							>
								{" "}
								Cerrar sesión{" "}
							</Nav.Link>
						)}
					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
};

export default dynamic(() => Promise.resolve(MyNavbar), { ssr: false });
