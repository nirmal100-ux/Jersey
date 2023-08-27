import React from 'react'
import { useGetAllProductsQuery } from '../features/product/productApi'
import ProductCard from '../components/ProductCard';

const HomePage = () => {

  const { data, isLoading, isError, error } = useGetAllProductsQuery();

  if (isLoading) {
    return <div className='h-[400px] w-[400px] mx-auto mt-7'>
      <lottie-player src="https://lottie.host/01986b4b-7629-473a-8223-f06d23ec4120/LelU3WnIJp.json" background="#fff" speed="1" loop autoplay ></lottie-player>
    </div>
  }


  return (
    <div>
      <div className='flex py-20 px-60 bg-brown-100 '>

        <div className='  px-20'>
          <h1 className='font-bold text-4xl'>WELCOME TO THE JERSEY SHOP</h1>
          <p className='text-red-800'>The Club Jersey is KTM Biggest Football Jersey Supplier. We are selling Football Jersey Master and Player Quality with lowest Price in Nepal.</p>
          <p className='text-red-800'> We also offer a Discount jersery for anyone wanting to buy it, with additional features and high quality.</p>
        </div>



      </div>
      <div className='p-5 grid grid-cols-3 gap-2 items-start bg-blue-gray-400'>
        {data && data.map((product) => {
          return <ProductCard key={product._id} product={product} />
        })}

      </div>
    </div>
  )
}

export default HomePage
