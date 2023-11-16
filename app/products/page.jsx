"use client";
import React from "react";
import ItemCard from "../components/products/ItemCard";
import { BsArrowRightCircleFill } from "react-icons/bs";
import { getProducts } from "@/sanity/sanity-utils";

export default function Page() {
  const [products, setProducts] = React.useState([]);
  const [currentPage, setCurrentPage] = React.useState(1);

  React.useEffect(() => {
    getProducts("Meats").then((data) => {
      setProducts(data);
      console.log(data);
    });
  }, []);

  // Calculate total pages based on the products length
  const itemsPerPage = 12;
  const totalPages = Math.ceil(products.length / itemsPerPage);

  // Function to go to the next page
  const goToNextPage = () => {
    setCurrentPage((prevCurrentPage) =>
      Math.min(prevCurrentPage + 1, totalPages)
    );
  };

  // Function to go to the previous page
  const goToPreviousPage = () => {
    setCurrentPage((prevCurrentPage) => Math.max(prevCurrentPage - 1, 1));
  };

  // Get current items to display
  const currentItems = products.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <div className="w-full flex pt-44  max-w-7xl px-20  justify-center gap-24 ">
      <div className="bg-yellow-500 h-full px-8">Categories</div>
      <div className="flex flex-col w-fit h-fit gap-4 ">
        <div className=" w-full  flex flex-col items-center justify-center ">
          <h1 className="text-[#242B33] font-mont font-semibold text-5xl">
            Meats
          </h1>
          <div className="flex justify-between w-full">
            <p className="text-xs font-karla text-[#242B33] opacity-60 ">
              Showing 1 - 12 of {products.length} results
            </p>
            <div className="flex gap-4">
              <BsArrowRightCircleFill
                size={24}
                onClick={goToPreviousPage}
                disabled={currentPage === 1}
                className={` cursor-pointer rounded-full rotate-180 ${
                  currentPage === 1 ? "fill-gray-300" : "fill-[#115D99]"
                }`}
              />
              <p>
                {currentPage}/{totalPages}
              </p>
              <BsArrowRightCircleFill
                size={24}
                onClick={goToNextPage}
                disabled={currentPage === totalPages}
                className={` cursor-pointer rounded-full ${
                  currentPage === totalPages
                    ? "fill-gray-300"
                    : "fill-[#115D99]"
                }`}
              />
            </div>
          </div>
        </div>
        <div className=" h-fit w-fit col-start-2 col-span-3 grid grid-cols-4 gap-8 ">
          {currentItems.map((item) => (
            <ItemCard
              image={item.imageUrl}
              key={item.number}
              id={item.number}
              children={item.name}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
