"use client";
import React from "react";
import ItemCard from "../components/products/ItemCard";
import { BsArrowRightCircleFill } from "react-icons/bs";

export default function Page() {
  // Your testItems array remains unchanged
  const testItems = [
    { id: 1, name: "Item 1" },
    { id: 2, name: "Item 2" },
    { id: 3, name: "Item 3" },
    { id: 4, name: "Item 4" },
    { id: 5, name: "Item 5" },
    { id: 6, name: "Item 6" },
    { id: 7, name: "Item 7" },
    { id: 8, name: "Item 8" },
    { id: 9, name: "Item 9" },
    { id: 10, name: "Item 10" },
    { id: 11, name: "Item 11" },
    { id: 12, name: "Item 12" },
    { id: 13, name: "Item 13" },
    { id: 14, name: "Item 14" },
    { id: 15, name: "Item 15" },
    { id: 16, name: "Item 16" },
    { id: 17, name: "Item 17" },
    { id: 18, name: "Item 18" },
    { id: 19, name: "Item 19" },
    { id: 20, name: "Item 20" },
  ];

  const [currentPage, setCurrentPage] = React.useState(1);
  const totalPages = Math.ceil(testItems.length / 12);

  const goToNextPage = () => {
    setCurrentPage((prevCurrentPage) =>
      Math.min(prevCurrentPage + 1, totalPages)
    );
  };

  const goToPreviousPage = () => {
    setCurrentPage((prevCurrentPage) => Math.max(prevCurrentPage - 1, 1));
  };

  const currentItems = testItems.slice(
    (currentPage - 1) * 12,
    currentPage * 12
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
              Showing 1 - 12 of 28 results
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
            <ItemCard key={item.id} id={item.id} name={item.name} />
          ))}
        </div>
      </div>
    </div>
  );
}
