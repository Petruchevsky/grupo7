import ProximamenteComponente from "../components/proximamente-componente/ProximamenteComponente";


export const metadata = {
	openGraph: {
    title: "Proximamente G7",
    description: "Proximamente en Grupo 7.",
	  images: {
		 url: "https://res.cloudinary.com/dtqfrwjdm/image/upload/v1695335899/logo_cuadrado_8e31427e86.jpg"
	  },
	  locale: 'es_CL',
	  type: 'website',
	}
 }

function Proximamente() {
  return (
    <div>
      <ProximamenteComponente />
    </div>
  )
}

export default Proximamente

