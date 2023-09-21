
import Slider from "./components/slider/Slider"


export const metadata = {
  openGraph: {
    title: "Grupo 7 - Inicio",
    description: "Bienvenidos a Grupo 7",
    images: {
      url: "https://res.cloudinary.com/dtqfrwjdm/image/upload/v1695335899/logo_cuadrado_8e31427e86.jpg"
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


