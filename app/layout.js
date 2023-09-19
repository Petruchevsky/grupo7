"use client";
import "./styles/globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Outfit } from "next/font/google";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import { useEffect } from "react";
import MyNavbar from "./components/navbar/MyNavbar";
import { AuthProvider } from "./context/AuthContext";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"


const outfit = Outfit({
	subsets: ["latin"],
	preload: true,
});

// export const metadata = {
// 	title: "Grupo 7",
// 	description: "Venta de Productos Químicos y Limpieza al Detalle y Mayotista, ven y Conoce Nuestro Catálogo!",

// 	openGraph: {
// 		title: "Grupo 7",
// 		description: "Grupo 7, Ven y Conoce Nuestro Catálogo!",
// 		url: "www.grupo7.cl",
// 		siteName: "Grupo 7 - Químicos y Limpieza",
// 		images: {
// 			url: "https://res.cloudinary.com/dtqfrwjdm/image/upload/v1685815570/original_logo-fondos_oscuros_z4ew5b.jpg",
// 			width: "500",
// 			height: "500",
// 		},
// 	},
// };

export default function RootLayout({ children }) {

	useEffect(() => {
		require("bootstrap/dist/js/bootstrap.bundle.min.js");
	}, []);


	return (
		<html lang="en" className={outfit.className}>
			<head>
				<link rel="icon" href="/icon.png" sizes="any" />
			</head>
			<body className={`container ${outfit.className}`}>
				<AuthProvider>
					<MyNavbar />
					<Header />
					{children}
					<Footer />
					<ToastContainer
						 position= "bottom-left"
						 autoClose= "3500"
						 hideProgressBar= {false}
						 closeOnClick= {true}
						 pauseOnHover= {true}
						 draggable= {true}
						 progress= {undefined}
						 theme= "light"
					/>
				</AuthProvider>
			</body>
		</html>
	);
}
