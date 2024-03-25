"use client";
import Carousel from "react-bootstrap/Carousel";
import Image from "next/image";
import { Bounce } from "react-awesome-reveal";
import "./SliderComp.css";

function SliderComp({ props }) {

    const  data  = props;

	const videoExtensions = [
		".mp4",
		".avi",
		".webm",
		".ogg",
		".mov",
		".mkv",
		".flv",
		".mpeg",
		".mpg",
		".m4v",
		".3gp",
		".wmv",
		".svi",
	];

	return (
		
			<Bounce>
				<Carousel className="container carousel-container">
					{data?.map((item) => {
						const url = item.attributes.imagen.data.attributes.url;
						const { id } = item;
				
						if (videoExtensions.some((extension) => url.includes(extension))) {
							return (
								<Carousel.Item key={id} className="border-c">
									<video
										className="w-100 media"
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
								<Carousel.Item key={id} className="border-c">
									<Image
										className="w-100 media"
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
			</Bounce>
		
	);
}

export default SliderComp;
