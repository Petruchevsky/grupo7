import React from 'react'
import TiendaComponente from '../components/tienda-componente/TiendaComponente'

export const metadata = {
	title: "Tienda G7",
	description: "Todos nuestros productos son Biodegradables",
	keywords: "tienda",
};


function Tienda() {
  return (
	 <div>
		<TiendaComponente />
	 </div>
  )
}

export default Tienda
