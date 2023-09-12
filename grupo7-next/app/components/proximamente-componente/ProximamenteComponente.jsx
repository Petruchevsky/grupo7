"use client"
import React, { useEffect, useState } from 'react'
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import styles from './proximamente.module.css'
import SpinnerG7 from '../spinnerG7/SpinnerG7'
import Image from 'next/image';
import config from '@/app/utils/ToastConfig';
import ReactMarkdown from 'react-markdown';


export const metadata = {
	title: "Proximamente",
	description: "Proximamente en Grupo 7.",
};

export async function getItems() {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_APIURL}/api/proximamentes?populate=imagen`, { cache: "no-store" });
    
    if (!response.ok) {
      throw new Error(`Error al obtener los items de Proximamente: ${response.statusText}`);
    }
    
    const { data } = await response.json();
    return data;

  } catch (error) {
    console.error(error);
    throw error; // Re-lanza el error para que pueda ser manejado por quien invoca la función
  }
}


function ProximamenteComponente() {
  
  const [data, setData] = useState(null); 
  const [error, setError] = useState(false);

  useEffect(()=> {
     getItems()
      .then(data => setData(data))
      .catch(error => {
        console.error(error)
        toast("Error al cargar los datos. Recargando la página...", config);
        setError(true);
        setTimeout(() => window.location.reload(), 6000);
      })
  }, [])

  if (error) {
    return (
      <div>
        <SpinnerG7 />
        <ToastContainer />
      </div>
    );
  }

  if (!data) return <SpinnerG7 />

  
  return (
    <div className={styles.container}>
      <h1 className={styles.pageH1}>Proximamente en Grupo 7</h1>
      <div>
        {data && data.length > 0 ? (
          data?.map((item) => {
            const { titulo, descripcion, imagen: { data: { attributes: { url } } } } = item.attributes;
            const { id } = item;
  
            return (
              <div className={styles.itemDiv} key={id}>
                <Image src={url} width={250} height={250} alt='imagen de nuevo producto' />
                <div className={styles.textoDiv}>
                  <h1 className={styles.titulo}>{titulo}</h1>
                  <ReactMarkdown className={styles.parrafo}>{descripcion}</ReactMarkdown>
                </div>
              </div>
            );
          })
        ) : (
          <div className={styles.container2}>
            <h1>¡Aquí verás todos los productos que te podremos ofrecer en el futuro!</h1>
            <Image src="/img/logo-redondo-oro.png" width={400} height={400} alt="logo de Grupo 7" />
            <Image src="/img/prox-img2.jpg" width={450} height={450} alt="imagen de quimico trabajando" />
          </div>
        )}
      </div>
    </div>
  );
  
}

export default ProximamenteComponente
