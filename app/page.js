
import Slider from "./components/slider/Slider"

// export const metadata = {

// 	 title: "Grupo 7 - Inicio",
// 	 description: "Bienvenidos a Grupo 7",
// 	 keywords: "inicio",
// };

export const metadata = {
  openGraph: {
    title: "Grupo 7 - Inicio",
    description: "Bienvenidos a Grupo 7",
    images: {
      url: "https://res.cloudinary.com/dtqfrwjdm/image/upload/v1695334473/logo_radius_8870e0c763.png"
    },
    locale: 'es_CL',
    type: 'website',
  }
}

export default function Home() {

  return (
    <div>
      <Slider />
    </div>
  )
}


