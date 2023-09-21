import React from 'react'
import TiendaComponente from '../components/tienda-componente/TiendaComponente'


export const metadata = {
	openGraph: {
	  title: "Tienda G7",
	  description: "Productos 100% Biodegradables",
	  images: {
		 url: "https://res.cloudinary.com/dtqfrwjdm/image/upload/v1695335899/logo_cuadrado_8e31427e86.jpg"
	  },
	  locale: 'es_CL',
	  type: 'website',
	}
 }


function Tienda() {
  return (
	 <div>
		<TiendaComponente />
	 </div>
  )
}

export default Tienda
