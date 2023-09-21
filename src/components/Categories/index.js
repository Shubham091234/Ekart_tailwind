import React, { useEffect, useState } from "react";
import FeaturesCard from "../FeaturesCard";


const Categories = () =>{

    const [ categories, setcategories] = useState([]);
    useEffect(()=>{

     const FetchCategory = async () =>{

        try {
            const response = await fetch(`https://fakestoreapi.com/products/categories`);
            if (!response.ok) {
              throw new Error(`HTTP error! Status: ${response.status}`);
            }
            const data = await response.json();
            setcategories(data);
          } catch (error) {
            console.error("An error occurred while fetching data:", error);
            // Handle the error, such as displaying an error message.
          }
        }
        FetchCategory();
     


    },[])

return(

    <>
    
    <FeaturesCard cards={categories}/>
    
    </>
)
}


export default Categories;