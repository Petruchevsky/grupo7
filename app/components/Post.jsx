import Image from 'next/image';
import Link from 'next/link';
import ReactMarkdown from "react-markdown";
import "./Post.css"

function Post({ post }) {
  
  const { titulo, contenido, imagen, url, createdAt } = post;
  const date = new Date(createdAt);
  
  const options = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  };
  const formattedDate = date.toLocaleDateString('es-ES', options) + ' hrs.'


  return (
   
      
        <article className="post-container">
        
                <Image
                  quality={100}
                  src={imagen.data.attributes.url}
                  alt={`Imagen de Producto ${titulo}`}
                  width={900}
                  height={900}
                  className="img-post"
                />
        
            <div className="text-post-container">
            
                <div>
                  <h1>{titulo}</h1>
                  <p>{formattedDate}</p>
                </div>
        
                <div className="contenido-div">
                  <ReactMarkdown>{`${contenido.slice(0, 256)}...`}</ReactMarkdown>
                  <Link href={`/blog/${url}`} className="link">Leer más...</Link>
                </div>
        
            </div>
            
        </article>
     

   
  )
}

export default Post
