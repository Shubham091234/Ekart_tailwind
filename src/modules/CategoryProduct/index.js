import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ProductCard from "../../components/ProductCard";


const CategoryProduct = ()=>{
const {name} = useParams();
const [ products, setProducts] = useState([]);

  useEffect(() => {
  const fetchProducts =async () => {
  
    const response = await fetch (`https://fakestoreapi.com/products/category/${name}`)
    const data = await response.json()
    console.log(data);
    setProducts(data);
  }
  fetchProducts();
  
  }, [])

return(


    <>

    <div className="text-4xl m-8 text-center capitalize font-bold text-blue-800">
        {name}
    </div>
    <ProductCard productss={products} />
    </>
)

}


export default CategoryProduct;