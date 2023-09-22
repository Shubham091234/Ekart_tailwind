import React, { useEffect, useState } from 'react';
import Hero from "../../components/Hero/hero";
import ProductCard from '../../components/ProductCard'

import Statics from '../../components/Statics';
import Categories from '../../components/Categories';


const Home = ()=>{


    const [ products, setProducts] = useState([]);

    useEffect(() => {
    const fetchProducts =async () => {
    
      const response = await fetch ('https://fakestoreapi.com/products?limit=12')
      const data = await response.json()
      console.log(data);
      setProducts(data);
    }
    fetchProducts();
    
    }, [])

    return(
        <>

<Hero />
<Categories />
<div className="flex flex-col text-center w-full">
      <h2 className="text-4xl text-black tracking-widest font-medium title-font mb-1">Most Selling Products</h2>
    
    </div>
{  products.length > 0 ? 

<ProductCard  productss={products} /> : <div className='text-4xl text-indigo-500 text-center mt-20'> Loading Products ......  </div>
}



<Statics />


</>
)}

export default Home;