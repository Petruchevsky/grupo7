'use client'
import styles from "./blog.module.css"
import Post from "../blog/Post"
import { toast } from "react-toastify";
import config from "@/app/utils/ToastConfig";
import { useEffect, useState } from "react";

export const metadata = {
   title: "Tips G7",
   description: "Mira Nuestros tips de Limpieza"
}

export async function getBlog() {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_APIURL}/api/blogs?populate=imagen`,
      { cache: 'no-store' }
    );

    if (response.ok) {
      let { data } = await response.json();
      return data;
    } else {
      throw new Error('Algo salió mal');
    }

  } catch (error) {
    console.error("Error capturado:", error);
    toast.error("Error al obtener los Tips, por favor recargue la página.", config);
  }
}

export default function BlogComponente() {

  let [data, setData] = useState([])

  useEffect(() => {
    getBlog().then(data => {
      setData(data)
    })
  }, [])

  return (
    <div className={styles.contenedor}>
      <h1 className={styles.pageH1}>Tips que deberías saber</h1>
      {data?.map((post, index) => (
        <Post
          key={index}
          post={post.attributes}/>
      ))}
    </div>
  )
}
