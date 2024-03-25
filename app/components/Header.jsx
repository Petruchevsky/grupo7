"use client";
import Image from "next/image";
import "./Header.css";
import Link from "next/link";
import { GoPasskeyFill } from "react-icons/go";
import { Fade, Zoom } from "react-awesome-reveal";

async function Header() {
	return (
		<header>
			<div className="main-container">
				<Zoom>
					<div>
						<Image
							src="https://res.cloudinary.com/dtqfrwjdm/image/upload/v1710860635/Original_f589ce9d03.png"
							width={500}
							height={500}
							alt="logo de Orlando Rojas"
							className="logo-header"
						/>

					</div>
						
						<div className="title-container">
							<h3 className="grupo7">Grupo 7</h3>
							<h3 className="slogan">"Diseñando productos para que tu vida sea más fácil"</h3>
						</div>

					<div className="header-button-container">
						<Link className="link-button" href="/">Registrarse</Link>
						<Link className="link-button" href="/">Iniciar Sesión</Link>
					</div>
				</Zoom>
			</div>
			
		</header>
	);
}

export default Header;
