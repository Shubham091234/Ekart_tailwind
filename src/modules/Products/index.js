import React, { useEffect, useState }  from "react";
import ProductCard from "../../components/ProductCard";
import Categories from "../../components/Categories";

const Products = () =>{


  const [ products, setProducts] = useState([]);

  useEffect(() => {
  const fetchProducts =async () => {
  
    const response = await fetch ('https://fakestoreapi.com/products')
    const data = await response.json()
    console.log(data);
    setProducts(data);
  }
  fetchProducts();
  
  }, [])

return(

    <>
    
    <Categories />
  
    <div className="flex flex-col text-center w-full">
      <h2 className="text-4xl text-indigo-500 tracking-widest font-medium title-font mb-1">All PRODUCTS</h2>
     
    </div>

    {
           products.length > 0 ?   <ProductCard productss={products}/> : <div>Product  is Loading......</div>
    }
    
    </>
)

}


export default Products;