import React from "react";
import Category from "./Category";

export default function Categories({ children, link }) {
  return (
    <div
      id="Products"
      className="flex flex-col items-center justify-center gap-14 w-full lg:w-full "
    >
      <h1 className="lg:col-start-2 font-mont font-bold text-[#115D99] text-4xl">
        Product Categories
      </h1>

      <div className="grid place-items-center grid-cols-2 md:grid-cols-3 lg:grid-cols-4 w-full gap-4">
        <Category link="/Meats.jpg" children="Meats" />
        <Category link="/Carbs.jpg" children="Carbs" />
        <Category link="/SuperFoods.jpg" children="Super Foods" />
        <Category link="/Keto.jpg" children="Keto" />
        <Category
          link="/Frozenfruit.jpg"
          children="Frozen Fruit and Vegetables"
        />
        <Category link="/Spices.jpg" children="Condiments" />
        <Category link="/Sauces.jpg" children="Sauces" />
        <Category link="/Desserts.jpg" children="Desserts" />
      </div>
    </div>
  );
}
