import React from "react";
import logo from './logo.png'
import { Link } from "react-router-dom";

const Header = ()=>{


    const navigation = [

        {

            name: "Home",
            path:`/`
        },
        {
            name:"Products",
            path:'/products'
        },
        {
            name:"About",
            path:`/about`
        },
        {
            name:"Contact",
            path:`/contact`
        }

    ]

return(

<>


<header className="text-gray-600 body-font shadow-lg">
    <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row ">
        <Link to ={`/`} className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
        <a className="flex flex-col title-font font-medium items-center  justify-center text-gray-900 -mt-6">   
        <img src={logo} alt="hello" className="h-28 rounded-full "></img>
        <span className=" text-xl -mt-14">Ekart</span>
      </a>
        </Link>
        <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
          {

             navigation.map((data) => {
                return(
           <Link  to = {data.path} className="mr-5 hover:text-gray-900 md:text-2xl text-md"> {data.name} </Link>

              ) })
          }
        </nav>
     <div className="">
     <button className="inline-flex items-center text-white bg-indigo-500 border-0 py-3 px-4 focus:outline-none hover:bg-gray-200 hover:text-black
        rounded text-base mt-4 md:mt-0 float-right">Go To Cart
            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-1" viewBox="0 0 24 24">
                <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
        </button>

     </div>
    </div>
</header>


</>

)
}

export default Header;