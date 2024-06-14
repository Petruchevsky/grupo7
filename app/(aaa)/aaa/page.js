import React from 'react'
import { Spinner } from 'react-bootstrap';

const getProd = async () => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_NEXT_APIURL}/api/proximamente`,
    { cache: "no-store" }
  );

  if (!res.ok) {
    errorHandler(res.status);
    // setRedToast(res.statusText);
    // throw new Error(res.statusText);
  }

  const {data} = await res.json();
  console.log(data)
  return data;
}

async function Aaa() {

  const data = await getProd();
  console.log(data.isEmpty)
  const products = data.products;
  console.log(products[0].images[0].url)


  return (
    <main>
      {data.products.map((product) => (
        <div key={product.id}>
          <h1>{product.title}</h1>
          <p>{product.releaseDate}</p>
          <p>{product.description}</p>
          {/* <p>{product.price}</p> */}
          {/* <p>{product.stock}</p> */}
          {/* <p>{product.slug}</p> */}
          {/* <img src={product.images[0].url} alt={product.title} /> */}
          {/* <p>{product.images[1].publicId}</p> */}
        </div>
      ))}
      <div style={{ backgroundColor:"black", width:"500px", height:"100px"}}> 
        <Spinner />
      </div>
    </main>
  )
}

export default Aaa
