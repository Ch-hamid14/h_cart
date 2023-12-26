import React, { useEffect, useState } from "react";
import axios from "axios";

const Product = () => {
  const [productData, setProductData] = useState([]);
  const [searchText, setSearchText] = useState('');

  const fetchData = () => {
    axios
      .get("http://localhost:1337/api/products?populate=*")
      .then((response) => {
        setProductData(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.log("Error fetching data:", error);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-wrap w-full mb-20">
          <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">
              Product List
            </h1>
            <div className="rounded mt-10">
              <input
                type="text"
                className="w-[100%] p-[10px] bg-gray-200 rounded-lg text-black focus:border-red focus:ring-0"
                value={searchText}
                onChange={(e)=>setSearchText(e.target.value)}
              />
            </div>
          </div>
        </div>
        <div className="xl:w-full md:w-1/2 p-4">
          {productData.data?.map((el) => (
            <div className="flex flex-wrap -m-4">
              <div className="xl:w-1/4 md:w-1/2 p-4">
                <div className="bg-gray-100 p-6 rounded-lg">
                  <img
                    className="h-30 rounded w-full object-cover object-center mb-6"
                    src={
                      el.attributes.image.data &&
                      "http://localhost:1337" +
                        el.attributes.image.data.attributes.url
                    }
                    alt="content"
                  />
                  <h3 className="tracking-widest text-indigo-500 text-xs font-medium title-font">
                    {el.attributes.title}
                  </h3>
                  <h2 className="text-lg text-gray-900 font-medium title-font mb-4">
                    Chichen Itza
                  </h2>
                  <p className="leading-relaxed text-base">
                    {el.attributes.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Product;
