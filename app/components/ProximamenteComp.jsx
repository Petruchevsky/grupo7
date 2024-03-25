"use client"
import './ProximamenteComp.css'
import Image from 'next/image';
import ReactMarkdown from 'react-markdown';
import { Bounce, Slide } from 'react-awesome-reveal';



function ProximamenteComponente({ props }) {
  
  const data = props;
  console.log(data);

  return (
    <main className="prox-container">
      <Slide><h1 className="h1-page">Proximamente en Grupo 7</h1></Slide>
        <div className='items-container'>
      <Bounce cascade damping={0.2}>
          {data && data.length > 0 ? (
            data?.map((item) => {
              const { titulo, descripcion, imagen: { data: { attributes: { url } } } } = item.attributes;
              const { id } = item;
        
              return (
                <div className="itemDiv ishadow" key={id}>
                  <Image src={url} width={250} height={250} alt='imagen de nuevo producto' />
                  <div className="textoDiv">
                    <h1>{titulo}</h1>
                    <ReactMarkdown>{descripcion}</ReactMarkdown>
                  </div>
                </div>
              );
            })
          ) : (
            <div className="container2">
              <h1>¡Aquí verás todos los productos que te podremos ofrecer en el futuro!</h1>
              <Image src="/img/logo-redondo-oro.png" width={400} height={400} alt="logo de Grupo 7" />
              <Image src="/img/prox-img2.jpg" width={450} height={450} alt="imagen de quimico trabajando" />
            </div>
          )}
      </Bounce>
        </div>
    </main>
  );
  
}

export default ProximamenteComponente
