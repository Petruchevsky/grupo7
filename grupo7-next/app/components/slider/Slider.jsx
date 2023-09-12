"use client";
import config from "@/app/utils/ToastConfig";
import Image from "next/image";
import { useEffect, useState } from "react";
import Carousel from 'react-bootstrap/Carousel';
import { toast } from "react-toastify";

export const getSlides = async () => {
  try {
    let response = await fetch(`${process.env.NEXT_PUBLIC_APIURL}/api/slider-photos?populate=imagen`, { cache: "no-store" })

    if (response.ok) {
      let { data } = await response.json();
      return data;
    } else {
      throw new Error
    }
  } catch (error) {
    console.error(error)
    toast(error.message, config)
    return null
  }
}

function Slider() {
  let [data, setData] = useState([]);

  useEffect(() => {
    getSlides().then(data => {
      setData(data);
    });
  }, []);

  const videoExtensions = ['.mp4', '.avi', '.webm', '.ogg', '.mov', '.mkv', '.flv', '.mpeg', '.mpg', '.m4v', '.3gp', '.wmv', '.svi'];

  return (
    <Carousel className="container p-0">
      {data?.map(item => {
          const url = item.attributes.imagen.data.attributes.url;
          const { id } = item; 

          if (videoExtensions.some(extension => url.includes(extension))) {
            return (
              <Carousel.Item key={id}>
                <video
                  className="d-block w-100"
                  src={url}
                  alt="Slide media"
                  width={1421}
                  height={539}
                  autoPlay
                  loop
                  muted
                />
              </Carousel.Item>
            );
          } else {
            return (
              <Carousel.Item key={id}>
                <Image
                  className="d-block w-100"
                  src={url}
                  alt="Slide media"
                  width={1421}
                  height={539}
                />
              </Carousel.Item>
            );
          }
      })}
    </Carousel>
  );
}

export default Slider;
