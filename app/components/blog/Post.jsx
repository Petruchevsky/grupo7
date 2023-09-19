import styles from "./post.module.css"
import Image from 'next/image';
import Link from 'next/link';
import ReactMarkdown from "react-markdown";

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
   
      <article className={`${styles.article}`}>
    
              <Image
                quality={100}
                src={imagen.data.attributes.url}
                alt={`Imagen de Producto ${titulo}`}
                width={900}
                height={900}
                className={styles.imgs}
              />
    
          <div className={`${styles.cajaText}`}>
          
              <div>
                <h1 className={styles.postH1}>{titulo}</h1>
                <p className={styles.postFecha}>{formattedDate}</p>
              </div>
    
              <div className={styles.littleDiv}>
                <ReactMarkdown className={styles.postP}>{`${contenido.slice(0, 256)}...`}</ReactMarkdown>
                <Link href={`/blog/${url}`} className={styles.links}>Leer más...</Link>
              </div>
    
          </div>
          
      </article>

   
  )
}

export default Post
