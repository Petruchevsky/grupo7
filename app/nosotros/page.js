import NosotrosComponente from "../components/nosotros-componente/NosotrosComponente";


export const metadata = {
	openGraph: {
		title: "Nosotros G7",
		description: "Somos una gran empreza familiar en plena expansión!",
		images: {
			url: "https://res.cloudinary.com/dtqfrwjdm/image/upload/v1695335899/logo_cuadrado_8e31427e86.jpg",
		},
		locale: "es_CL",
		type: "website",
	},
};

function Nosotros() {
	return <NosotrosComponente />;
}

export default Nosotros;
