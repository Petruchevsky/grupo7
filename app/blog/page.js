import BlogComponente from '../components/blog-componente/BlogComponente'


export const metadata = {
	openGraph: {
    title: "Tips G7",
    description: "Mira Nuestros tips de Limpieza",
		images: {
			url: "https://res.cloudinary.com/dtqfrwjdm/image/upload/v1695335899/logo_cuadrado_8e31427e86.jpg",
		},
		locale: "es_CL",
		type: "website",
	},
};

function Blog() {
  return (
    <div>
      <BlogComponente />
    </div>
  )
}

export default Blog
