import React from "react";
import { Link } from "react-router-dom";

const FeaturesCard = ({cards = []}) => {
  return (
    <>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-24">
     
            <h1 className="sm:text-3xl md:text-4xl font-bold title-font text-gray-900">Browse Our Diverse Categories</h1>
          </div>
          <div className="flex flex-wrap -m-4 my-14">

            {

              cards?.map((card) => {

                return (


                  <Link to={`/categories/${card}`} className="p-1 md:w-1/4 w-2/4">
                    <div className="flex rounded-lg h-full bg-gray-100 p-8 flex-col">
                      <div className="flex items-center mb-3">
                        <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-indigo-500 text-white flex-shrink-0">
                          <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                            <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                          </svg>
                        </div>
                        <h2 className="text-gray-900 text-lg title-font font-medium capitalize">{card || 'Example card'}</h2>
                      </div>
                      <div className="flex-grow">
                        <p className="leading-relaxed text-base"></p>
                        <a className="mt-3 text-indigo-500 inline-flex items-center">Explore More
                          <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                            <path d="M5 12h14M12 5l7 7-7 7"></path>
                          </svg>
                        </a>
                      </div>
                    </div>
                  </Link>


                )

              })


            }


          </div>
        </div>
      </section>
    </>
  )
}

export default FeaturesCard;