import "./globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Inter } from "next/font/google";
import { AuthProvider } from "./context/AuthContext";

const inter = Inter({
	subsets: ["latin"],
	preload: true,
});

export const metadata = {
	openGraph: {
		title: "Grupo 7",
		description: "Diseñando productos para que tu vida sea más simple",
		images: {
			url: "https://res.cloudinary.com/dtqfrwjdm/image/upload/v1685815570/original_logo-fondos_oscuros_z4ew5b.jpg",
		},
		locale: "es_CL",
		type: "website",
	},
};

export default function RootLayout({ children }) {
	return (
		<AuthProvider>
			<html lang="en">
				<body className={inter.className}>{children}</body>
			</html>
		</AuthProvider>
	);
}
