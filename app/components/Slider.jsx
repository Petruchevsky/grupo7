import SliderComp from "./SliderComp";

async function getSlides() {
  try {
    console.log(process.env.NEXT_PUBLIC_APIURL)
    const response = await fetch(`${process.env.NEXT_PUBLIC_APIURL}/api/slider-photos?populate=*`, { cache: "no-store" })

    if (!response.ok) {
      const errorData = await response.json();
      const errorMessage = `Error: ${response.status}: ${errorData.message}`
      throw new Error(errorMessage)
    }
    const { data } = await response.json();
    return data;
  } catch (error) {
    console.error(error)
    
    return null
  }
}

async function Slider() {
  
  const data = await getSlides();

  return  <SliderComp props={data}/>
  
}

export default Slider;
